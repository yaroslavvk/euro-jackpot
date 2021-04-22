import { Component, Input } from '@angular/core';

import { Store } from '@ngrx/store';
import { LoadCurrentEuroJackpotSuccess } from '../../store/euro-jackpot.actions';
import { initialState } from '../../store/euro-jackpot.reducer';
import * as fromEuroJackpot from '../../store/euro-jackpot.reducer';

import { Jackpots } from '../../models/jackpots';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input() jackpotResults: Jackpots = initialState.jackpotResults;

  constructor(
    private store: Store<fromEuroJackpot.State>,
  ) { }

  public setCurrentJackpotResult(key: 'last' | 'next'): void {
    this.store.dispatch(new LoadCurrentEuroJackpotSuccess({ data: this.jackpotResults[key] || initialState.currentJackpotResult }));
  }

}
