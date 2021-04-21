import { Action } from '@ngrx/store';

export enum EuroJackpotActionTypes {
  LoadEuroJackpots = '[EuroJackpot] Load EuroJackpots',
  LoadEuroJackpotsSuccess = '[EuroJackpot] Load EuroJackpots Success',
  LoadEuroJackpotsFailure = '[EuroJackpot] Load EuroJackpots Failure',
}

export class LoadEuroJackpots implements Action {
  readonly type = EuroJackpotActionTypes.LoadEuroJackpots;
}

export class LoadEuroJackpotsSuccess implements Action {
  readonly type = EuroJackpotActionTypes.LoadEuroJackpotsSuccess;
  constructor(public payload: { data: any }) { }
}

export class LoadEuroJackpotsFailure implements Action {
  readonly type = EuroJackpotActionTypes.LoadEuroJackpotsFailure;
  constructor(public payload: { error: any }) { }
}

export type EuroJackpotActions = LoadEuroJackpots | LoadEuroJackpotsSuccess | LoadEuroJackpotsFailure;

