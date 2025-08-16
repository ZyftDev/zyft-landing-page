import type { Metadata } from 'next';

import { Navbar } from '@/components/Navbar';

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
      <body className="bg-black">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
