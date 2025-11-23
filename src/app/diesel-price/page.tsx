
'use client';
import React, { useState, useMemo } from 'react';
import { FuelPriceCard } from '@/components/dashboard/fuel-price-card';
import { fuelPrices } from '@/lib/data';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const allCities = Object.keys(fuelPrices);

export default function DieselPricePage() {
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
          Diesel Price Today
        </h1>
      </div>
      
      {filteredCities.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCities.map(city => {
             const cityFuelData = {
                petrol: { price: 0, change: 0, raw: '' }, // Dummy data for petrol
                diesel: fuelPrices[city].diesel
            };
            return (
              <FuelPriceCard
                key={city}
                city={city}
                fuelData={cityFuelData}
                showPetrol={false}
              />
            )
          })}
        </div>
      ) : (
        <p className="text-center text-muted-foreground">No cities found.</p>
      )}
    </div>
  );
}
