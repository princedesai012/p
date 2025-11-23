'use client';

import React from 'react';
import {
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from '@/components/ui/sidebar';
import { Home, Gem, Fuel, Carrot } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const menuItems = [
  { href: '/', label: 'Dashboard', icon: Home },
  { href: '/metals', label: 'Metals', icon: Gem },
  { href: '/fuel', label: 'Fuel & LPG', icon: Fuel },
  { href: '/vegetables', label: 'Vegetables', icon: Carrot },
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
                <Icon />
                <span>{label}</span>
              </SidebarMenuButton>
            </Link>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarContent>
  );
}
