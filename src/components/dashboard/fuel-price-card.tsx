'use client';

import React, { useState, useEffect, useTransition, Suspense } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { getFormattedFuelPrice } from '@/lib/actions';
import { fuelPrices } from '@/lib/data';
import { Fuel } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const cities = Object.keys(fuelPrices);

function FuelInfo({
  formattedData,
  isLoading,
}: {
  formattedData: string | null;
  isLoading: boolean;
}) {
  if (isLoading || !formattedData) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-4 w-1/2" />
        <Skeleton className="h-4 w-2/3" />
      </div>
    );
  }

  return (
    <div className="whitespace-pre-wrap text-sm text-foreground">
      {formattedData}
    </div>
  );
}

export function FuelPriceCard() {
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [petrolData, setPetrolData] = useState<string | null>(null);
  const [dieselData, setDieselData] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      setPetrolData(null);
      setDieselData(null);

      if (!selectedCity || !fuelPrices[selectedCity]) return;

      const cityData = fuelPrices[selectedCity];

      const [petrolResult, dieselResult] = await Promise.all([
        getFormattedFuelPrice(
          selectedCity,
          'Petrol',
          cityData.petrol.raw
        ),
        getFormattedFuelPrice(
          selectedCity,
          'Diesel',
          cityData.diesel.raw
        ),
      ]);
      setPetrolData(petrolResult);
      setDieselData(dieselResult);
    });
  }, [selectedCity]);

  return (
    <Card className="flex h-full transform flex-col shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>Fuel Prices</span>
          <Fuel className="h-6 w-6 text-muted-foreground" />
        </CardTitle>
        <div className="pt-2">
          <Select
            defaultValue={selectedCity}
            onValueChange={setSelectedCity}
            disabled={isPending}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-around space-y-4">
        <div>
          <h4 className="mb-2 font-semibold">Petrol</h4>
          <FuelInfo formattedData={petrolData} isLoading={isPending} />
        </div>
        <Separator />
        <div>
          <h4 className="mb-2 font-semibold">Diesel</h4>
          <FuelInfo formattedData={dieselData} isLoading={isPending} />
        </div>
      </CardContent>
    </Card>
  );
}
