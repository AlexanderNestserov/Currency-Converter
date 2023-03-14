export interface CurrencyRates {
  currency: string;
  code: string;
  mid: number;
}

export interface CurrencyData {
  effectiveDate: string;
  no: string;
  rates: CurrencyRates[];
  table: string;
}

export interface ErrorMessage {
  message: string;
  value: boolean;
}

