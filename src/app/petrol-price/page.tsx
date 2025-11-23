
'use client';
import React, { useState, useMemo } from 'react';
import { FuelPriceCard } from '@/components/dashboard/fuel-price-card';
import { fuelPrices } from '@/lib/data';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

const allCities = Object.keys(fuelPrices);

export default function PetrolPricePage() {
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
          Petrol Price Today
        </h1>
        <div className="relative w-full max-w-xs">
           <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10"
          />
        </div>
      </div>
      
      {filteredCities.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredCities.map(city => {
            const cityFuelData = {
                petrol: fuelPrices[city].petrol,
                diesel: { price: 0, change: 0, raw: '' } // Dummy data for diesel
            };
            return (
              <FuelPriceCard
                key={city}
                city={city}
                fuelData={cityFuelData}
                showDiesel={false}
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
