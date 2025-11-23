import React from 'react';
import { PriceCard } from '@/components/dashboard/price-card';
import { goldSilverRates } from '@/lib/data';
import { Disc } from 'lucide-react';

const lastUpdated = new Date('2024-07-28T06:00:00Z').toLocaleDateString('en-IN', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});


export default function SilverPricePage() {
  const silverRate = goldSilverRates.find(item => item.title === 'Silver');

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold tracking-tight text-primary">
        Silver Price Today
      </h1>
      {silverRate && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <PriceCard
            key={silverRate.title}
            title={silverRate.title}
            price={silverRate.price}
            unit={silverRate.unit}
            change={silverRate.change}
            Icon={Disc}
            lastUpdated={lastUpdated}
          />
        </div>
      )}
    </div>
  );
}
