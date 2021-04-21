import { EuroJackpotActions, EuroJackpotActionTypes } from './euro-jackpot.actions';

export const euroJackpotFeatureKey = 'euroJackpot';

export interface State {
  euroJackpots: {
    last: object,
    next: object
  };
}

export const initialState: State = {
  euroJackpots: {
    last: {},
    next: {}
  }
};

export function reducer(state = initialState, action: EuroJackpotActions): State {
  switch (action.type) {

    case EuroJackpotActionTypes.LoadEuroJackpots:
      return {
        ...state,
      };

    case EuroJackpotActionTypes.LoadEuroJackpotsSuccess:
      return {
        ...state,
        euroJackpots: action.payload.data
      };

    case EuroJackpotActionTypes.LoadEuroJackpotsFailure:
      return {
        ...state,
      };

    default:
      return state;
  }
}
