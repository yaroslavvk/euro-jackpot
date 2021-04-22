import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, concatMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  LoadEuroJackpotsFailure,
  LoadEuroJackpotsSuccess,
  EuroJackpotActionTypes,
  EuroJackpotActions,
  LoadCurrentEuroJackpotSuccess
} from './euro-jackpot.actions';
import { EuroJackpotApiService } from '../services/euro-jackpot-api.service';
import { Jackpots } from '../models/jackpots';


@Injectable()
export class EuroJackpotEffects {

  @Effect()
  loadEuroJackpots$ = this.actions$.pipe(
    ofType(EuroJackpotActionTypes.LoadEuroJackpots),
    concatMap(() =>
      this.euroJackpotApiService.getEuroJackpotData().pipe(
        mergeMap((data: Jackpots) => [
          new LoadEuroJackpotsSuccess({ data }),
          new LoadCurrentEuroJackpotSuccess({ data: data.last }),
        ]),
        catchError(error => of(new LoadEuroJackpotsFailure({ error }))))
    )
  );



  constructor(
    private actions$: Actions<EuroJackpotActions>,
    private euroJackpotApiService: EuroJackpotApiService,
    ) {}

}
