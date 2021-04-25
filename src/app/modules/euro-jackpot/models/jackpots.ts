export interface JackpotDate {
  full: string;
}

export interface Odd {
  prize: number;
  specialPrize: number | null;
  winners: number;
  tier?: number;
}

export interface Jackpot {
  Winners: number;
  climbedSince: number;
  closingDate: string;
  currency: string;
  date: JackpotDate;
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
