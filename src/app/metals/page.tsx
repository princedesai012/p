import React from 'react';
import { PriceCard } from '@/components/dashboard/price-card';
import { goldSilverRates } from '@/lib/data';
import { Gem, Disc } from 'lucide-react';
import type { PriceItem } from '@/lib/types';

const iconMap: { [key: string]: React.ElementType } = {
  'Gold 24K': Gem,
  'Gold 22K': Gem,
  Silver: Disc,
};

export default function MetalsPage() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-primary">
        Gold & Silver Prices
      </h1>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {goldSilverRates.map((item: PriceItem) => (
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
