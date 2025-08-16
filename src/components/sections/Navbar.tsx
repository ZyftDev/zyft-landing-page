'use client';

import { FC, useState } from 'react';

import { Menu } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Button } from '@/components/ui';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const navItems = [
  { label: 'Services', href: '#services' },
  { label: 'How We Work', href: '#how-we-work' },
  { label: 'Contact', href: '#contact' },
  { label: 'FAQ', href: '#faq' },
];

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    const element = document.querySelector(href);
    if (element) {
      e.preventDefault();
      setIsOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-[1200px]">
      <div className="bg-[var(--color-nav-bg)] backdrop-blur-md rounded-lg px-6 h-[60px] flex items-center justify-between border border-[var(--color-nav-border)]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logos/logo-no-bg.png"
            alt="Zyft Logo"
            width={130}
            height={40}
            className="h-12 w-auto"
          />{' '}
          <h1 className="text-2xl font-clash text-[var(--color-text-primary)]">Zyft</h1>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-[var(--color-nav-text)] hover:text-[var(--color-nav-text-hover)] transition-colors text-sm font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <Button
            variant="default"
            className="bg-gradient-to-r from-[var(--color-gradient-start)] via-[var(--color-gradient-middle)] to-[var(--color-gradient-end)] text-white font-satoshi rounded-sm btn-primary-glow"
            asChild
          >
            <Link
              href="#contact"
              onClick={(e) => handleClick(e, '#contact')}
              className="flex items-center gap-2"
            >
              Contact Us
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className="md:hidden">
              <Menu className="h-6 w-6 text-[var(--color-nav-text)]" />
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] bg-[var(--color-nav-mobile-bg)] border-[var(--color-nav-border)] p-8"
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col gap-8 mt-12">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="text-[var(--color-nav-text)] hover:text-[var(--color-nav-text-hover)] transition-colors text-xl font-medium tracking-wide"
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  variant="default"
                  className="bg-gradient-to-r from-[var(--color-gradient-start)] via-[var(--color-gradient-middle)] to-[var(--color-gradient-end)] text-white hover:opacity-90 mt-8 py-6 text-lg"
                  asChild
                >
                  <Link href="#contact" onClick={(e) => handleClick(e, '#contact')}>
                    Contact Us
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
