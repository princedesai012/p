import React from 'react';
import { PriceCard } from '@/components/dashboard/price-card';
import { FuelPriceCard } from '@/components/dashboard/fuel-price-card';
import { lpgRates } from '@/lib/data';
import { Flame } from 'lucide-react';
import type { PriceItem } from '@/lib/types';

const iconMap: { [key: string]: React.ElementType } = {
  'LPG Cylinder': Flame,
};

export default function FuelPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-primary">
        Fuel & LPG Prices
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="sm:col-span-2 lg:col-span-1">
          <FuelPriceCard />
        </div>
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
    </div>
  );
}
