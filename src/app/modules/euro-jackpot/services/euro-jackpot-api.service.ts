import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EuroJackpotApiService {
  private euroJackpotURL = `${environment.baseApiURI}${environment.euroJackpotURN}`;

  constructor(
    private http: HttpClient,
  ) { }

  getEuroJackpotData(): Observable<object> {
    return this.http.get(this.euroJackpotURL);
  }
}
