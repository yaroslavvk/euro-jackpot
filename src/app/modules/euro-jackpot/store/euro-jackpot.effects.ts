import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { LoadEuroJackpotsFailure, LoadEuroJackpotsSuccess, EuroJackpotActionTypes, EuroJackpotActions } from './euro-jackpot.actions';
import {EuroJackpotApiService} from '../services/euro-jackpot-api.service';




@Injectable()
export class EuroJackpotEffects {

  @Effect()
  loadEuroJackpots$ = this.actions$.pipe(
    ofType(EuroJackpotActionTypes.LoadEuroJackpots),
    concatMap(() =>
      this.euroJackpotApiService.getEuroJackpotData().pipe(
        map(data => new LoadEuroJackpotsSuccess({ data })),
        catchError(error => of(new LoadEuroJackpotsFailure({ error }))))
    )
  );



  constructor(
    private actions$: Actions<EuroJackpotActions>,
    private euroJackpotApiService: EuroJackpotApiService,
    ) {}

}
