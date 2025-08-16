import type { Metadata } from 'next';

import { Footer, Navbar } from '@/components/sections';

import './globals.css';

export const metadata: Metadata = {
  title: 'Zyft',
  description: 'Zyft',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
