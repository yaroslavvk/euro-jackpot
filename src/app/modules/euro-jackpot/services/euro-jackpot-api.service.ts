import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import {Jackpots} from '../models/jackpots';

@Injectable({
  providedIn: 'root'
})
export class EuroJackpotApiService {
  readonly euroJackpotURL = `${environment.baseApiURI}${environment.euroJackpotURN}`;

  constructor(
    private http: HttpClient,
  ) { }

  getEuroJackpotsData(): Observable<Jackpots> {
    return this.http.get<Jackpots>(this.euroJackpotURL);
  }
}
