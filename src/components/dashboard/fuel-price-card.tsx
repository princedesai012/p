'use client';

import React, { useState, useEffect, useTransition, Suspense } from 'react';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { getFormattedFuelPrice } from '@/lib/actions';
import type { CityFuelPrices } from '@/lib/types';
import { Fuel } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

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

interface FuelPriceCardProps {
  city: string;
  fuelData: CityFuelPrices[string];
  showPetrol?: boolean;
  showDiesel?: boolean;
}

export function FuelPriceCard({ 
  city, 
  fuelData, 
  showPetrol = true, 
  showDiesel = true 
}: FuelPriceCardProps) {
  const [petrolData, setPetrolData] = useState<string | null>(null);
  const [dieselData, setDieselData] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    startTransition(async () => {
      if (!city || !fuelData) return;

      if(showPetrol) {
        setPetrolData(null);
        const petrolResult = await getFormattedFuelPrice(
            city,
            'Petrol',
            fuelData.petrol.raw
        );
        setPetrolData(petrolResult);
      }

      if(showDiesel) {
        setDieselData(null);
        const dieselResult = await getFormattedFuelPrice(
            city,
            'Diesel',
            fuelData.diesel.raw
        );
        setDieselData(dieselResult);
      }
    });
  }, [city, fuelData, showPetrol, showDiesel]);

  return (
    <Card className="flex h-full transform flex-col shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-base font-medium">
          <span>{city}</span>
          <Fuel className="h-6 w-6 text-muted-foreground" />
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col justify-around space-y-4">
        {showPetrol && (
          <div>
            <h4 className="mb-2 font-semibold">Petrol</h4>
            <FuelInfo formattedData={petrolData} isLoading={isPending} />
          </div>
        )}
        {showPetrol && showDiesel && <Separator />}
        {showDiesel && (
          <div>
            <h4 className="mb-2 font-semibold">Diesel</h4>
            <FuelInfo formattedData={dieselData} isLoading={isPending} />
          </div>
        )}
      </CardContent>
    </Card>
  );
}
