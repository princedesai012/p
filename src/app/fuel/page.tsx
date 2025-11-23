'use client';
import React, { useState, useMemo } from 'react';
import { PriceCard } from '@/components/dashboard/price-card';
import { FuelPriceCard } from '@/components/dashboard/fuel-price-card';
import { lpgRates, fuelPrices } from '@/lib/data';
import { Flame } from 'lucide-react';
import type { PriceItem } from '@/lib/types';
import { Input } from '@/components/ui/input';

const iconMap: { [key: string]: React.ElementType } = {
  'LPG Cylinder': Flame,
};

const allCities = Object.keys(fuelPrices);

export default function FuelPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCities = useMemo(() => {
    if (!searchTerm) {
      return allCities;
    }
    return allCities.filter(city =>
      city.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);


  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-primary">
          Fuel & LPG Prices
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {lpgRates.map((item: PriceItem) => (
          <PriceCard
            key={item.title}
            title={item.title}
            price={item.price}
            unit={item.unit}
            change={item.change}
            Icon={iconMap[item.title]}
            lastUpdated={new Date().toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          />
        ))}
      </div>

      <div className="mt-8">
        <h2 className="mb-4 text-2xl font-bold tracking-tight">
          Petrol & Diesel Prices by City
        </h2>
        {filteredCities.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCities.map(city => (
              <FuelPriceCard
                key={city}
                city={city}
                fuelData={fuelPrices[city]}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No cities found.</p>
        )}
      </div>
    </div>
  );
}
