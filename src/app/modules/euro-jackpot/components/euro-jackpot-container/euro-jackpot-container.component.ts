import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromEuroJackpot from '../../store/euro-jackpot.reducer';
import { selectFeatureCurrentJackpotResult, selectFeatureJackpotResults } from '../../store/euro-jackpot.selectors';
import { initialState } from '../../store/euro-jackpot.reducer';

import { Jackpot, Jackpots, Odd } from '../../models/jackpots';

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
        this.currentJackpotOdds = currentJackpotResult.odds ? Object.values(currentJackpotResult.odds) : [];
        this.currentJackpotOdds = this.currentJackpotOdds.filter(odd => (odd.prize > 0));
        this.currentJackpotOdds.map((odd, i) => (odd.tier = i + 1));
      }
    }));
  }

}
