import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Store } from '@ngrx/store';

import * as fromEuroJackpot from '../store/euro-jackpot.reducer';
import { LoadEuroJackpots } from '../store/euro-jackpot.actions';

@Injectable({
  providedIn: 'root'
})
export class EuroJackpotResolverService implements Resolve<any> {

  constructor(
    private store: Store<fromEuroJackpot.State>,
  ) { }

  resolve(): void {
    this.store.dispatch(new LoadEuroJackpots());
  }
}
