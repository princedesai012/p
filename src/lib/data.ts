import type { PriceItem, CityFuelPrices, ComparisonItem } from './types';

export const goldSilverRates: PriceItem[] = [
  {
    title: 'Gold 24K',
    price: 7250,
    unit: 'per gram',
    change: 50.5,
  },
  {
    title: 'Gold 22K',
    price: 6645,
    unit: 'per gram',
    change: 45.2,
  },
  {
    title: 'Silver',
    price: 91.5,
    unit: 'per gram',
    change: -1.2,
  },
];

export const lpgRates: PriceItem[] = [
  {
    title: 'LPG Cylinder',
    price: 803,
    unit: '14.2 kg cylinder',
    change: 0,
  },
];

export const vegetableRates: PriceItem[] = [
  {
    title: 'Onions',
    price: 35,
    unit: 'per kg',
    change: 2.5,
  },
  {
    title: 'Tomatoes',
    price: 40,
    unit: 'per kg',
    change: -5,
  },
];

export const fuelPrices: CityFuelPrices = {
  Delhi: {
    petrol: {
      price: 94.72,
      change: 0,
      raw: JSON.stringify({
        price: 94.72,
        currency: 'INR',
        unit: 'litre',
        last_updated: '2024-07-28T06:00:00Z',
        source: 'delhi_oil_co_api_v1',
      }),
    },
    diesel: {
      price: 87.62,
      change: 0,
      raw: JSON.stringify({
        price: 87.62,
        currency: 'INR',
        unit: 'litre',
        last_updated: '2024-07-28T06:00:00Z',
        source: 'delhi_oil_co_api_v1',
      }),
    },
  },
  Mumbai: {
    petrol: {
      price: 104.21,
      change: 0,
      raw: JSON.stringify({
        price: 104.21,
        currency: 'INR',
        unit: 'litre',
        last_updated: '2024-07-28T06:00:00Z',
        source: 'mumbai_petroleum_data_feed',
      }),
    },
    diesel: {
      price: 92.15,
      change: 0,
      raw: JSON.stringify({
        price: 92.15,
        currency: 'INR',
        unit: 'litre',
        last_updated: '2024-07-28T06:00:00Z',
        source: 'mumbai_petroleum_data_feed',
      }),
    },
  },
  Bengaluru: {
    petrol: {
      price: 102.86,
      change: 0,
      raw: JSON.stringify({
        price: 102.86,
        currency: 'INR',
        unit: 'litre',
        last_updated: '2024-07-28T06:00:00Z',
        source: 'bengaluru_fuel_services_json',
      }),
    },
    diesel: {
      price: 88.94,
      change: 0,
      raw: JSON.stringify({
        price: 88.94,
        currency: 'INR',
        unit: 'litre',
        last_updated: '2024-07-28T06:00:00Z',
        source: 'bengaluru_fuel_services_json',
      }),
    },
  },
  Chennai: {
    petrol: {
      price: 100.75,
      change: 0,
      raw: JSON.stringify({
        price: 100.75,
        currency: 'INR',
        unit: 'litre',
        last_updated: '2024-07-28T06:00:00Z',
        source: 'chennai_daily_rates_v3',
      }),
    },
    diesel: {
      price: 92.34,
      change: 0,
      raw: JSON.stringify({
        price: 92.34,
        currency: 'INR',
        unit: 'litre',
        last_updated: '2024-07-28T06:00:00Z',
        source: 'chennai_daily_rates_v3',
      }),
    },
  },
};

export const comparisonData: ComparisonItem[] = [
  {
    name: 'Gold 24K',
    today: goldSilverRates[0].price,
    yesterday: goldSilverRates[0].price - goldSilverRates[0].change,
  },
  {
    name: 'Silver',
    today: goldSilverRates[2].price,
    yesterday: goldSilverRates[2].price - goldSilverRates[2].change,
  },
  {
    name: 'Petrol (Delhi)',
    today: fuelPrices['Delhi'].petrol.price,
    yesterday: fuelPrices['Delhi'].petrol.price - fuelPrices['Delhi'].petrol.change,
  },
  {
    name: 'Diesel (Delhi)',
    today: fuelPrices['Delhi'].diesel.price,
    yesterday: fuelPrices['Delhi'].diesel.price - fuelPrices['Delhi'].diesel.change,
  },
];
