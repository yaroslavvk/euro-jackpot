import { Odd } from '../models/jackpots';

export const JackpotsResultsMock = {
  last: {
    Winners: 925410,
    climbedSince: 31,
    closingDate: '23.04.2021, 19:00',
    currency: 'EUR',
    date: {full: 'Die Lottozahlen vom Freitag, den 23.04.2021', day: 23, month: 4, year: 2021, hour: 21},
    drawingDate: '23.04.2021, 21:00',
    euroNumbers: [1, 5],
    jackpot: '22',
    lateClosingDate: '23.04.2021, 20:10',
    marketingJackpot: '22',
    nr: 475,
    numbers: [3, 6, 11, 14, 49],
    odds: {
      rank0: {
        prize: 0,
        specialPrize: 0,
        winners: 0
      }, rank1: {
        prize: 2200000000,
        specialPrize: 0,
        winners: 0
      }, rank2: {
        prize: 2200000000,
        specialPrize: 0,
        winners: 0
      }, rank3: {
        prize: 2200000000,
        specialPrize: 0,
        winners: 0
      }, rank8: {
        prize: 2200000000,
        specialPrize: 0,
        winners: 0
      },
    },
    specialMarketingJackpot: '22',
  },
  next: {
    Winners: 925410,
    climbedSince: 31,
    closingDate: '23.04.2021, 19:00',
    currency: 'EUR',
    date: {full: 'Die Lottozahlen vom Freitag, den 23.04.2021', day: 23, month: 4, year: 2021, hour: 21},
    drawingDate: '23.04.2021, 21:00',
    euroNumbers: [1, 5],
    jackpot: '22',
    lateClosingDate: '23.04.2021, 20:10',
    marketingJackpot: '22',
    nr: 475,
    numbers: [3, 6, 11, 14, 49],
    specialMarketingJackpot: '22',
  }
};

export const initiateStateMock = {
  jackpotResults: JackpotsResultsMock,
  currentJackpotResult: JackpotsResultsMock.last
};

export const OddsMock: Odd[] = [
  {
    prize: 0,
    specialPrize: 0,
    winners: 0
  },
  {
    prize: 2200000000,
    specialPrize: 0,
    winners: 0
  },
  {
    prize: 2200000000,
    specialPrize: 0,
    winners: 0
  },
  {
    prize: 2200000000,
    specialPrize: 0,
    winners: 0
  },
  {
    prize: 2200000000,
    specialPrize: 0,
    winners: 0
  }
];

export const OddsTransformedMock: Odd[] = [
  {
    prize: 2200000000,
    specialPrize: null,
    winners: 0,
    tier: 1
  },
  {
    prize: 2200000000,
    specialPrize: null,
    winners: 0,
    tier: 2
  },
  {
    prize: 2200000000,
    specialPrize: null,
    winners: 0,
    tier: 3
  },
  {
    prize: 2200000000,
    specialPrize: null,
    winners: 0,
    tier: 4
  }
];
