
import React from 'react';
import { PriceCard } from '@/components/dashboard/price-card';
import { vegetableRates } from '@/lib/data';
import { Sprout } from 'lucide-react';

export default function OnionPricePage() {
  const onionRate = vegetableRates.find(item => item.title === 'Onions');

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-primary">
        Onion Price Today
      </h1>
      {onionRate && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            key={onionRate.title}
            title={onionRate.title}
            price={onionRate.price}
            unit={onionRate.unit}
            change={onionRate.change}
            Icon={Sprout}
            lastUpdated={new Date().toLocaleDateString('en-IN', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            })}
          />
        </div>
      )}
    </div>
  );
}
