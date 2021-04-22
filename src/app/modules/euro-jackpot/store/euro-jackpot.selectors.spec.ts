import * as fromEuroJackpot from './euro-jackpot.reducer';
import { selectEuroJackpotState } from './euro-jackpot.selectors';
import { initialState } from './euro-jackpot.reducer';

describe('EuroJackpot Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEuroJackpotState({
      [fromEuroJackpot.euroJackpotFeatureKey]: initialState
    });

    expect(result).toEqual(initialState);
  });
});
