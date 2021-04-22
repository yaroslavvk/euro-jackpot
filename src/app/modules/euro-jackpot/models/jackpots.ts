export interface Date {
  full: string;
}

export interface Odd {
  tier: number;
  prize: number;
  specialPrize: number;
  winners: number;
}

export interface Jackpot {
  Winners: number;
  climbedSince: number;
  closingDate: string;
  currency: string;
  date: Date;
  drawingDate: string;
  euroNumbers: number[];
  jackpot: string;
  lateClosingDate: string;
  marketingJackpot: string;
  nr: number;
  numbers: number[];
  odds?: object;
  specialMarketingJackpot: string;
}

export interface Jackpots {
  last: Jackpot;
  next: Jackpot;
}
