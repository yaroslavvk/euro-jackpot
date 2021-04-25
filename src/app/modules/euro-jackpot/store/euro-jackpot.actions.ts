import { Action } from '@ngrx/store';
import {Jackpot, Jackpots} from '../models/jackpots';

export enum EuroJackpotActionTypes {
  LoadEuroJackpots = '[EuroJackpot] Load EuroJackpots',
  LoadEuroJackpotsSuccess = '[EuroJackpot] Load EuroJackpots Success',
  LoadCurrentEuroJackpotSuccess = '[EuroJackpot] Load Current Euro Jackpot Success',
}

export class LoadEuroJackpots implements Action {
  readonly type = EuroJackpotActionTypes.LoadEuroJackpots;
}

export class LoadEuroJackpotsSuccess implements Action {
  readonly type = EuroJackpotActionTypes.LoadEuroJackpotsSuccess;
  constructor(public payload: { data: Jackpots }) { }
}

export class LoadCurrentEuroJackpotSuccess implements Action {
  readonly type = EuroJackpotActionTypes.LoadCurrentEuroJackpotSuccess;
  constructor(public payload: { data: Jackpot }) { }
}

export type EuroJackpotActions = LoadEuroJackpots | LoadEuroJackpotsSuccess | LoadCurrentEuroJackpotSuccess;

