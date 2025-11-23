
import React from 'react';
import { PriceCard } from '@/components/dashboard/price-card';
import { cropRates } from '@/lib/data';
import { Wheat, Sprout } from 'lucide-react';
import type { PriceItem } from '@/lib/types';

const iconMap: { [key: string]: React.ElementType } = {
  Wheat: Wheat,
  Rice: Sprout,
  Cotton: Sprout,
  Sugar: Sprout,
};

export default function CropsPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-primary">
        Crop Prices
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cropRates.map((item: PriceItem) => (
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
