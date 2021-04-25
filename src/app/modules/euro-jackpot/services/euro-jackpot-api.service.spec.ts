import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { EuroJackpotApiService } from './euro-jackpot-api.service';
import { initialState } from '../store/euro-jackpot.reducer';

describe('EuroJackpotApiService', () => {
  let service: EuroJackpotApiService;
  let httpMockService: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EuroJackpotApiService);
    httpMockService = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable<Jackpots>', () => {
    service.getEuroJackpotsData().subscribe(jackpots => {
      expect(jackpots).toEqual(initialState.jackpotResults);
    });

    const req = httpMockService.expectOne(service.euroJackpotURL);
    expect(req.request.method).toBe('GET');
    req.flush(initialState.jackpotResults);
  });
});
