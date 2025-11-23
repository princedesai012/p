'use client';

import React from 'react';
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Home, Gem, Fuel, Carrot, Disc, Flame, Droplets, Wheat, Sprout } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/gold-price', label: 'Gold Price', icon: Gem },
  { href: '/silver-price', label: 'Silver Price', icon: Disc },
  { href: '/petrol-price', label: 'Petrol Price', icon: Fuel },
  { href: '/diesel-price', label: 'Diesel Price', icon: Droplets },
  { href: '/lpg-price', label: 'LPG Price', icon: Flame },
  { href: '/vegetables', label: 'Vegetable Prices', icon: Carrot },
  { href: '/onion-price', label: 'Onion Price', icon: Sprout },
  { href: '/crops', label: 'Crop Prices', icon: Wheat },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <SidebarContent>
      <SidebarMenu>
        {menuItems.map(({ href, label, icon: Icon }) => (
          <SidebarMenuItem key={href}>
            <Link href={href} passHref legacyBehavior>
              <SidebarMenuButton
                as="a"
                isActive={pathname === href}
                tooltip={label}
              >
                <div>
                  <Icon />
                  <span>{label}</span>
                </div>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
}
