export interface PriceItem {
  title: string;
  price: number;
  unit: string;
  change: number;
}

export interface FuelPrice {
  price: number;
  change: number;
  raw: string;
}

export interface CityFuelPrices {
  [city: string]: {
    petrol: FuelPrice;
    diesel: FuelPrice;
  };
}

export interface ComparisonItem {
  name: string;
  today: number;
  yesterday: number;
}
