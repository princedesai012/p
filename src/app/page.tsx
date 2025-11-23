import React from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import {
  goldSilverRates,
  lpgRates,
  comparisonData,
  fuelPrices,
} from '@/lib/data';
import { PriceCard } from '@/components/dashboard/price-card';
import type { PriceItem } from '@/lib/types';
import { ComparisonChart } from '@/components/dashboard/comparison-chart';
import { FuelPriceCard } from '@/components/dashboard/fuel-price-card';
import { Gem, Disc, Flame, Carrot, Fuel } from 'lucide-react';
import { SidebarProvider, Sidebar, SidebarTrigger, SidebarInset } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/layout/sidebar';

const iconMap: { [key: string]: React.ElementType } = {
  'Gold 24K': Gem,
  Silver: Disc,
  'LPG Cylinder': Flame,
  Onions: Carrot,
  Tomatoes: Carrot,
  Petrol: Fuel,
  Diesel: Fuel,
};

const lastUpdated = new Date('2024-07-28T06:00:00Z').toLocaleDateString('en-IN', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
});

export default function Home() {
  const featuredPrices: PriceItem[] = [
    goldSilverRates[0], // Gold 24K
    goldSilverRates[2], // Silver
    lpgRates[0], // LPG
  ];

  return (
    <SidebarProvider>
      <Sidebar>
        <AppSidebar />
      </Sidebar>
      <SidebarInset>
        <div className="flex min-h-screen flex-col">
          <Header>
            <SidebarTrigger />
          </Header>
          <main className="flex-1 animate-fade-in p-4 pt-8 md:p-8">
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
                  Welcome to Bharat RateWatch
                </h1>
                <p className="mt-4 text-lg text-muted-foreground">
                  Your daily source for prices of essential commodities across India.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {featuredPrices.map((item) => (
                  <PriceCard
                    key={item.title}
                    title={item.title}
                    price={item.price}
                    unit={item.unit}
                    change={item.change}
                    Icon={iconMap[item.title]}
                    lastUpdated={lastUpdated}
                  />
                ))}
                 <div className="sm:col-span-2 lg:col-span-1">
                   <FuelPriceCard city="Mumbai" fuelData={fuelPrices["Mumbai"]} />
                </div>
              </div>

              <div className="mt-8">
                <ComparisonChart data={comparisonData} />
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
