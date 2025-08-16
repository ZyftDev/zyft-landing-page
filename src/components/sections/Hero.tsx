import { FC } from 'react';

import { Button } from '@/components/ui';

export const Hero: FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="text-center w-3/5 mx-auto">
        <h1 className="text-landing-hero-heading text-7xl font-[400] font-clash mb-6">
          Your Work Isn&apos;t Supposed To Suck
        </h1>
        <p className="text-landing-hero-subheading text-xl font-[450] font-satoshi max-w-2xl mx-auto text-gray-300">
          We build AI agents that handle your repetitive tasks - data entry, scheduling, follow-ups,
          and all the other stuff eating your time. You focus on what actually grows your business.
        </p>
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            size="lg"
            className="bg-gradient-to-r from-[#E94B87] to-[#F9A23F] hover:opacity-90 text-white font-satoshi px-8"
          >
            Get Started Free
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-[#E94B87] text-[#E94B87] hover:bg-[#E94B87]/10 font-satoshi px-8"
          >
            See How It Works
          </Button>
        </div>
      </div>
    </section>
  );
};
