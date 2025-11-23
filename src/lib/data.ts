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
      raw: JSON.stringify({ price: 94.72, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 87.62,
      change: 0,
      raw: JSON.stringify({ price: 87.62, last_updated: '2024-07-28T06:00:00Z' }),
    },
  },
  Mumbai: {
    petrol: {
      price: 104.21,
      change: 0,
      raw: JSON.stringify({ price: 104.21, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 92.15,
      change: 0,
      raw: JSON.stringify({ price: 92.15, last_updated: '2024-07-28T06:00:00Z' }),
    },
  },
  Bengaluru: {
    petrol: {
      price: 102.86,
      change: 0,
      raw: JSON.stringify({ price: 102.86, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 88.94,
      change: 0,
      raw: JSON.stringify({ price: 88.94, last_updated: '2024-07-28T06:00:00Z' }),
    },
  },
  Chennai: {
    petrol: {
      price: 100.75,
      change: 0,
      raw: JSON.stringify({ price: 100.75, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 92.34,
      change: 0,
      raw: JSON.stringify({ price: 92.34, last_updated: '2024-07-28T06:00:00Z' }),
    },
  },
  Kolkata: {
    petrol: {
      price: 103.94,
      change: 0,
      raw: JSON.stringify({ price: 103.94, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 90.76,
      change: 0,
      raw: JSON.stringify({ price: 90.76, last_updated: '2024-07-28T06:00:00Z' }),
    },
  },
  Hyderabad: {
    petrol: {
      price: 107.41,
      change: 0,
      raw: JSON.stringify({ price: 107.41, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 95.65,
      change: 0,
      raw: JSON.stringify({ price: 95.65, last_updated: '2024-07-28T06:00:00Z' }),
    },
  },
  Pune: {
    petrol: {
      price: 103.58,
      change: 0,
      raw: JSON.stringify({ price: 103.58, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 90.11,
      change: 0,
      raw: JSON.stringify({ price: 90.11, last_updated: '2024-07-28T06:00:00Z' }),
    },
  },
  Ahmedabad: {
    petrol: {
      price: 94.44,
      change: 0,
      raw: JSON.stringify({ price: 94.44, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 90.11,
      change: 0,
      raw: JSON.stringify({ price: 90.11, last_updated: '2024-07-28T06:00:00Z' }),
    },
  },
  Jaipur: {
    petrol: {
      price: 104.88,
      change: 0,
      raw: JSON.stringify({ price: 104.88, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 90.36,
      change: 0,
      raw: JSON.stringify({ price: 90.36, last_updated: '2024-07-28T06:00:00Z' }),
    },
  },
  Lucknow: {
    petrol: {
      price: 94.65,
      change: 0,
      raw: JSON.stringify({ price: 94.65, last_updated: '2024-07-28T06:00:00Z' }),
    },
    diesel: {
      price: 87.76,
      change: 0,
      raw: JSON.stringify({ price: 87.76, last_updated: '2024-07-28T06:00:00Z' }),
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
