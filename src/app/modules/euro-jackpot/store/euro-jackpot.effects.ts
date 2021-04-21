import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { EMPTY, of } from 'rxjs';
import { LoadEuroJackpotsFailure, LoadEuroJackpotsSuccess, EuroJackpotActionTypes, EuroJackpotActions } from './euro-jackpot.actions';




@Injectable()
export class EuroJackpotEffects {

  @Effect()
  loadEuroJackpots$ = this.actions$.pipe(
    ofType(EuroJackpotActionTypes.LoadEuroJackpots),
    concatMap(() =>
      /** An EMPTY observable only emits completion. Replace with your own observable API request */
      EMPTY.pipe(
        map(data => new LoadEuroJackpotsSuccess({ data })),
        catchError(error => of(new LoadEuroJackpotsFailure({ error }))))
    )
  );



  constructor(private actions$: Actions<EuroJackpotActions>) {}

}
