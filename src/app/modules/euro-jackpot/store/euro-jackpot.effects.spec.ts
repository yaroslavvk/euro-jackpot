import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { EuroJackpotEffects } from './euro-jackpot.effects';

describe('EuroJackpotEffects', () => {
  let actions$: Observable<any>;
  let effects: EuroJackpotEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        EuroJackpotEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EuroJackpotEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
