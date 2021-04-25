import * as fromEuroJackpot from './euro-jackpot.reducer';
import { selectEuroJackpotState, selectFeatureCurrentJackpotResult, selectFeatureJackpotResults } from './euro-jackpot.selectors';
import { initialState } from './euro-jackpot.reducer';

describe('EuroJackpot Selectors', () => {
  it('should select the feature state', () => {
    const result = selectEuroJackpotState({
      [fromEuroJackpot.euroJackpotFeatureKey]: initialState
    });
    expect(result).toEqual(initialState);
  });
  it('should select the jackpot results', () => {
    const result = selectFeatureJackpotResults.projector(initialState);
    expect(result).toEqual(initialState.jackpotResults);
  });
  it('should select the current jackpot', () => {
    const result = selectFeatureCurrentJackpotResult.projector(initialState);
    expect(result).toEqual(initialState.jackpotResults.last);
  });
});
