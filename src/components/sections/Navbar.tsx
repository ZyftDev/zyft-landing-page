'use client';

import { FC } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui';

const navItems = [
  { label: 'Pricing', href: '/pricing' },
  { label: 'Features', href: '/features' },
  { label: 'Enterprise', href: '/enterprise' },
  { label: 'Blog', href: '/blog' },
  { label: 'Docs', href: '/docs' },
  { label: 'Careers', href: '/careers' },
];

export const Navbar: FC = () => {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]">
      <div className="bg-black/30 backdrop-blur-md rounded-lg px-6 h-[60px] flex items-center justify-between border border-[#6B46C1]/20">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/logo-no-bg.png"
            alt="Zyft Logo"
            width={130}
            height={40}
            className="h-12 w-auto"
          />{' '}
          <h1 className="text-2xl font-clash">Zyft</h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-[#F9A23F] transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] text-white hover:opacity-90"
            asChild
          >
            <Link href="/download" className="flex items-center gap-2">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
