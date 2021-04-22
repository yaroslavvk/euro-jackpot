import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromEuroJackpot from './euro-jackpot.reducer';

export const selectEuroJackpotState = createFeatureSelector<fromEuroJackpot.State>(
  fromEuroJackpot.euroJackpotFeatureKey
);

export const selectFeatureJackpotResults = createSelector(
  selectEuroJackpotState,
  (state: fromEuroJackpot.State) => state.jackpotResults
);

export const selectFeatureCurrentJackpotResult = createSelector(
  selectEuroJackpotState,
  (state: fromEuroJackpot.State) => state.currentJackpotResult
);
