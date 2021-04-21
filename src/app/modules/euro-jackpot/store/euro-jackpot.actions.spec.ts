import * as EuroJackpotActions from './euro-jackpot.actions';

describe('EuroJackpot', () => {
  it('should create an instance', () => {
    expect(new EuroJackpotActions.LoadEuroJackpots()).toBeTruthy();
  });
});
