import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  goldSilverRates,
  lpgRates,
  vegetableRates,
  comparisonData,
} from '@/lib/data';
import { PriceCard } from '@/components/dashboard/price-card';
import type { PriceItem } from '@/lib/types';
import { ComparisonChart } from '@/components/dashboard/comparison-chart';
import { FuelPriceCard } from '@/components/dashboard/fuel-price-card';
import { Gem, Disc, Flame, Carrot } from 'lucide-react';

const iconMap: { [key: string]: React.ElementType } = {
  'Gold 24K': Gem,
  'Gold 22K': Gem,
  Silver: Disc,
  'LPG Cylinder': Flame,
  Onions: Carrot,
  Tomatoes: Carrot,
};

export default function Home() {
  const allPrices: PriceItem[] = [
    ...goldSilverRates,
    ...lpgRates,
    ...vegetableRates,
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 animate-fade-in p-4 pt-8 md:p-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {allPrices.map((item) => (
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
            <div className="sm:col-span-2 lg:col-span-1">
              <FuelPriceCard />
            </div>
          </div>

          <div className="mt-8">
            <ComparisonChart data={comparisonData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
