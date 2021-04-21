import {
  ActionReducerMap,
  ActionReducer,
  MetaReducer,
} from '@ngrx/store';

import * as fromEuroJackpot from './modules/euro-jackpot/store/euro-jackpot.reducer';
import { EuroJackpotActions } from './modules/euro-jackpot/store/euro-jackpot.actions';
import { environment } from '../environments/environment';

export interface State {
  euroJackpot: fromEuroJackpot.State;
}

export const reducers: ActionReducerMap<State, EuroJackpotActions> = {
  euroJackpot: fromEuroJackpot.reducer,
};

export function logger(reducer: ActionReducer<State, EuroJackpotActions>): ActionReducer<State, EuroJackpotActions> {
  return (state: any, action: any): State => {
    if (!environment.production) {
      // tslint:disable-next-line:no-console
      console.info('state', state);
      // tslint:disable-next-line:no-console
      console.info('action', action);
    }
    return reducer(state, action);
  };
}

export const metaReducers: MetaReducer<State, EuroJackpotActions>[] = [logger];
