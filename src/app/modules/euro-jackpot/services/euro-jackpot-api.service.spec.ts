import { TestBed } from '@angular/core/testing';

import { EuroJackpotApiService } from './euro-jackpot-api.service';

describe('EuroJackpotApiService', () => {
  let service: EuroJackpotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EuroJackpotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
