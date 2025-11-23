import React from 'react';
import { PriceCard } from '@/components/dashboard/price-card';
import { vegetableRates } from '@/lib/data';
import { Carrot } from 'lucide-react';
import type { PriceItem } from '@/lib/types';

const iconMap: { [key: string]: React.ElementType } = {
  Onions: Carrot,
  Tomatoes: Carrot,
};

export default function VegetablesPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-primary">
        Vegetable Prices
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {vegetableRates.map((item: PriceItem) => (
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
