'use client';

import React from 'react';
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroup,
  SidebarGroupLabel,
} from '@/components/ui/sidebar';
import { Home, Gem, Fuel, Carrot, Disc, Flame, Droplets, Wheat, Sprout } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuGroups = [
    {
        label: 'Main',
        items: [
            { href: '/', label: 'Dashboard', icon: Home },
        ]
    },
    {
        label: 'Precious Metals',
        items: [
            { href: '/gold-price', label: 'Gold Price', icon: Gem },
            { href: '/silver-price', label: 'Silver Price', icon: Disc },
        ]
    },
    {
        label: 'Fuel Prices',
        items: [
            { href: '/petrol-price', label: 'Petrol Price', icon: Fuel },
            { href: '/diesel-price', label: 'Diesel Price', icon: Droplets },
            { href: '/lpg-price', 'label': 'LPG Price', icon: Flame },
        ]
    },
    {
        label: 'Groceries',
        items: [
            { href: '/vegetables', label: 'Vegetables', icon: Carrot },
            { href: '/onion-price', label: 'Onion Price', icon: Sprout },
        ]
    },
    {
        label: 'Crops',
        items: [
            { href: '/crops', label: 'Crop Prices', icon: Wheat },
        ]
    }
]

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <SidebarContent>
        {menuGroups.map((group) => (
            <SidebarGroup key={group.label}>
                <SidebarGroupLabel>{group.label}</SidebarGroupLabel>
                <SidebarMenu>
                    {group.items.map(({ href, label, icon: Icon }) => (
                    <SidebarMenuItem key={href}>
                        <Link href={href} legacyBehavior passHref>
                        <SidebarMenuButton
                            as="a"
                            href={href}
                            isActive={pathname === href}
                            tooltip={label}
                        >
                            <Icon />
                            <span>{label}</span>
                        </SidebarMenuButton>
                        </Link>
                    </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
        ))}
    </SidebarContent>
  );
}
