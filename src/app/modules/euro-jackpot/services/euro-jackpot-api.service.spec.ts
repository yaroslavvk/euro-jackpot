import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { EuroJackpotApiService } from './euro-jackpot-api.service';

describe('EuroJackpotApiService', () => {
  let service: EuroJackpotApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(EuroJackpotApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
