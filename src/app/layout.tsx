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
      <body className="bg-black text-white bg-gradient-to-t from-gray-950 via-[#6B46C1]/10 to-[#F9A23F]/5 min-h-screen bg-fixed">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
