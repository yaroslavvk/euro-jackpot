import { Jackpot, Jackpots } from '../models/jackpots';
import { EuroJackpotActions, EuroJackpotActionTypes } from './euro-jackpot.actions';

export const euroJackpotFeatureKey = 'euroJackpot';

export interface State {
  jackpotResults: Jackpots;
  currentJackpotResult: Jackpot;
}

export const initialState: State = {
  jackpotResults: {
    last: {
      Winners: 0,
      climbedSince: 0,
      closingDate: '',
      currency: '',
      date: {
        full: ''
      },
      drawingDate: '',
      euroNumbers: [],
      jackpot: '',
      lateClosingDate: '',
      marketingJackpot: '',
      nr: 0,
      numbers: [],
      odds: {},
      specialMarketingJackpot: '',
    },
    next: {
      Winners: 0,
      climbedSince: 0,
      closingDate: '',
      currency: '',
      date: {
        full: ''
      },
      drawingDate: '',
      euroNumbers: [],
      jackpot: '',
      lateClosingDate: '',
      marketingJackpot: '',
      nr: 0,
      numbers: [],
      specialMarketingJackpot: '',
    }
  },
  currentJackpotResult: {
    Winners: 0,
    climbedSince: 0,
    closingDate: '',
    currency: '',
    date: {
      full: ''
    },
    drawingDate: '',
    euroNumbers: [],
    jackpot: '',
    lateClosingDate: '',
    marketingJackpot: '',
    nr: 0,
    numbers: [],
    odds: {},
    specialMarketingJackpot: '',
  },
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
        jackpotResults: action.payload.data,
      };

    case EuroJackpotActionTypes.LoadEuroJackpotsFailure:
      return {
        ...state,
      };

    case EuroJackpotActionTypes.LoadCurrentEuroJackpotSuccess:
      return {
        ...state,
        currentJackpotResult: action.payload.data,
      };

    default:
      return state;
  }
}
