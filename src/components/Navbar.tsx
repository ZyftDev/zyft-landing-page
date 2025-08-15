'use client';

import { FC, useEffect, useState } from 'react';

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
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY;

        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setVisible(true);
        } else if (currentScrollY > lastScrollY && currentScrollY > 10) {
          setVisible(false);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px] transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-32'
      }`}
    >
      <div className="bg-black backdrop-blur-md rounded-lg px-6 h-[60px] flex items-center justify-between border border-gray-800/50">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/zyft-logo-transparent.png"
            alt="Zyft Logo"
            width={130}
            height={40}
            className="h-12 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button variant="default" className="bg-white text-black hover:bg-white/90" asChild>
            <Link href="/download" className="flex items-center gap-2">
              Get in Touch
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
