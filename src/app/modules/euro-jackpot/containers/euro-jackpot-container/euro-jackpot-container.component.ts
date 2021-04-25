import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromEuroJackpot from '../../store/euro-jackpot.reducer';
import { selectFeatureCurrentJackpotResult, selectFeatureJackpotResults } from '../../store/euro-jackpot.selectors';
import { initialState } from '../../store/euro-jackpot.reducer';

import { Jackpot, Jackpots, Odd } from '../../models/jackpots';
import { LoadCurrentEuroJackpotSuccess } from '../../store/euro-jackpot.actions';

@Component({
  selector: 'app-euro-jackpot-container',
  templateUrl: './euro-jackpot-container.component.html',
  styleUrls: ['./euro-jackpot-container.component.scss']
})
export class EuroJackpotContainerComponent implements OnDestroy, OnInit {
  private subscriptions: Subscription = new Subscription();
  public jackpotResults$: Observable<Jackpots> = this.store.select(selectFeatureJackpotResults);
  public jackpotResults: Jackpots = initialState.jackpotResults;
  public currentJackpotResult$: Observable<Jackpot> = this.store.select(selectFeatureCurrentJackpotResult);
  public currentJackpotResult: Jackpot = initialState.currentJackpotResult;
  public currentJackpotOdds: Odd[] = [];

  constructor(
    private store: Store<fromEuroJackpot.State>,
  ) { }

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  ngOnInit(): void {
    this.subscriptions.add(this.jackpotResults$.subscribe({
      next: jackpotResults => {
        this.jackpotResults = jackpotResults;
      }
    }));
    this.subscriptions.add(this.currentJackpotResult$.subscribe({
      next: currentJackpotResult => {
        this.currentJackpotResult = currentJackpotResult;
        this.currentJackpotOdds = this.transformOddsToRender(currentJackpotResult);
      }
    }));
  }

  public transformOddsToRender(currentJackpotResult: Jackpot): Odd[] {
    let odds = [];
    odds = this.getOddsMapValues(currentJackpotResult.odds);
    odds = odds.filter(odd => (odd.prize > 0));
    odds.sort((a, b) => (a.prize < b.prize) ? 1 : -1);
    odds.map(this.oddsMapHandler);
    return odds;
  }

  public getOddsMapValues(odds: object | undefined): Odd[] {
    return odds ? Object.values(odds) : [];
  }

  public oddsMapHandler(odd: Odd, i: number): Odd {
    odd.tier = i + 1;
    if (odd.specialPrize === 0) {
      odd.specialPrize = null;
    }
    return odd;
  }

  public setCurrentJackpotResult(key: 'last' | 'next'): void {
    this.store.dispatch(new LoadCurrentEuroJackpotSuccess({ data: this.jackpotResults[key] || initialState.currentJackpotResult }));
  }

}
