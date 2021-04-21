import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEuroJackpot from './euro-jackpot.reducer';

export const selectEuroJackpotState = createFeatureSelector<fromEuroJackpot.State>(
  fromEuroJackpot.euroJackpotFeatureKey
);
