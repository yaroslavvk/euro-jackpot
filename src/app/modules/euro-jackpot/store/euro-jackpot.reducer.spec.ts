import * as fromEuroJackpot from './euro-jackpot.reducer';
import {
  LoadEuroJackpotsSuccess,
  LoadCurrentEuroJackpotSuccess,
} from './euro-jackpot.actions';
import { JackpotsResultsMock } from '../mocks/euro-jackpot.store.fixture';

describe('EuroJackpot Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = fromEuroJackpot.reducer(fromEuroJackpot.initialState, action);

      expect(result).toBe(fromEuroJackpot.initialState);
    });
  });
  describe('LoadEuroJackpotsSuccess action', () => {
    it('should return fetched jackpot results', () => {
      const { initialState } = fromEuroJackpot;
      const action = new LoadEuroJackpotsSuccess({ data: JackpotsResultsMock });
      const result = fromEuroJackpot.reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        jackpotResults: JackpotsResultsMock,
      });
    });
  });
  describe('LoadCurrentEuroJackpotSuccess action', () => {
    it('should return current jackpot data', () => {
      const { initialState } = fromEuroJackpot;
      const action = new LoadCurrentEuroJackpotSuccess({ data: JackpotsResultsMock.last });
      const result = fromEuroJackpot.reducer(initialState, action);

      expect(result).toEqual({
        ...initialState,
        currentJackpotResult: JackpotsResultsMock.last,
      });
    });
  });
});
