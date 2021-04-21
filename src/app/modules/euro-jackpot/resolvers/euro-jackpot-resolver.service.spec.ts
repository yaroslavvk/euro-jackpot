import { TestBed } from '@angular/core/testing';

import { StoreModule } from '@ngrx/store';
import * as fromEuroJackpot from '../store/euro-jackpot.reducer';

import { EuroJackpotResolverService } from './euro-jackpot-resolver.service';

describe('EuroJackpotResolverService', () => {
  let service: EuroJackpotResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromEuroJackpot.euroJackpotFeatureKey, fromEuroJackpot.reducer),
      ]
    });
    service = TestBed.inject(EuroJackpotResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
