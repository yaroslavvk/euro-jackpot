import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import * as fromEuroJackpot from '../../store/euro-jackpot.reducer';
import { selectFeatureCurrentJackpotResult, selectFeatureJackpotResults } from '../../store/euro-jackpot.selectors';

import { Jackpot, Jackpots, Odd } from '../../models/jackpots';

@Component({
  selector: 'app-euro-jackpot-container',
  templateUrl: './euro-jackpot-container.component.html',
  styleUrls: ['./euro-jackpot-container.component.scss']
})
export class EuroJackpotContainerComponent implements OnInit {
  public jackpotResults$: Observable<Jackpots> = this.store.select(selectFeatureJackpotResults);
  public currentJackpotResult$: Observable<Jackpot> = this.store.select(selectFeatureCurrentJackpotResult);
  public currentJackpotOdds: Odd[] = [];

  constructor(
    private store: Store<fromEuroJackpot.State>,
  ) { }

  ngOnInit(): void {
    this.currentJackpotResult$.subscribe({
      next: currentJackpotResult => {
        this.currentJackpotOdds = currentJackpotResult.odds ? Object.values(currentJackpotResult.odds) : [];
        this.currentJackpotOdds = this.currentJackpotOdds.filter(odd => (odd.prize > 0));
        this.currentJackpotOdds.map((odd, i) => (odd.tier = i + 1));
      }
    });
  }

}
