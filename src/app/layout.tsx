import type { Metadata } from 'next';

import { Footer, Navbar } from '@/components/sections';

import './globals.css';

export const metadata: Metadata = {
  title: 'Zyft | Let AI Agents Handle The Work You Hate',
  description:
    'Stop doing work a robot could handle. Our AI agents crush the repetitive stuff so you can focus on building something that matters.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black bg-gradient-to-t from-gray-950 via-[#6B46C1]/10 to-[#F9A23F]/5 min-h-screen bg-fixed overflow-x-hidden">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
