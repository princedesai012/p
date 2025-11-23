
import React from 'react';
import { PriceCard } from '@/components/dashboard/price-card';
import { goldSilverRates } from '@/lib/data';
import { Gem } from 'lucide-react';

export default function GoldPricePage() {
  const goldRates = goldSilverRates.filter(item => item.title.includes('Gold'));

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-primary">
        Gold Price Today
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {goldRates.map(item => (
          <PriceCard
            key={item.title}
            title={item.title}
            price={item.price}
            unit={item.unit}
            change={item.change}
            Icon={Gem}
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
