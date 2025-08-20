import { FC } from 'react';

import { ArrowDownToLine, Zap } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui';

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Analysis',
    subtitle: '(Skip if you already know your use case)',
    description: 'We dive deep into your business processes and daily workflows to identify:',
    bullets: [
      'Pain points that slow you down',
      'Repetitive tasks eating up your time',
      'Opportunities where AI can make the biggest impact',
    ],
    outcome: 'A clear picture of where automation can save you time and money.',
  },
  {
    number: '02',
    title: 'Solution Presentation',
    description: 'We return with tailored recommendations showing:',
    bullets: [
      'What can be automated in your specific situation',
      'Expected benefits and time savings',
      'Multiple approaches for you to consider',
    ],
    outcome: "You'll see exactly how AI can transform your operations.",
  },
  {
    number: '03',
    title: 'Technical Deep Dive',
    description: 'In our detailed technical presentation, we cover:',
    bullets: [
      "Implementation approach - How we'll build your solution",
      'Running costs - Transparent pricing for ongoing operations',
      'Service fees - Our development and support costs',
      'Timeline - When you can expect to see results',
    ],
    outcome: 'A comprehensive quote with all costs and timelines clearly outlined.',
  },
  {
    number: '04',
    title: 'Agreement & Launch',
    description: '',
    bullets: [
      'Review and negotiate the proposal (take all the time you need!)',
      'Sign the final contract with agreed pricing and timeline',
      'Begin development of your custom AI solution',
    ],
  },
];

export const HowWeWork: FC = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="how-we-work">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B46C1]/5 to-transparent" />

      <div className="w-[95%] max-w-[1400px] mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="text-7xl font-clash mb-8 bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] inline-block text-transparent bg-clip-text leading-tight">
            How We Work
          </h2>
          <p className="text-xl text-gray-300 font-satoshi max-w-3xl mx-auto leading-relaxed">
            We understand that every business has unique needs when it comes to AI automation.
            That&apos;s why we&apos;ve designed a simple, transparent process that meets you exactly
            where you are.
          </p>
        </div>

        <div className="mb-32">
          <div className="grid grid-cols-1 gap-12">
            {processSteps.map((step) => (
              <div key={step.number} className="relative group">
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-10 border border-white/5 hover:border-[#6B46C1]/30 transition-all duration-300">
                  <div className="flex items-start gap-8">
                    <div className="shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6B46C1] to-[#E94B87] flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                      <span className="text-2xl font-clash text-white">{step.number}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-3xl font-clash text-white">{step.title}</h3>
                        {step.subtitle && (
                          <span className="text-sm text-[#E94B87] font-medium bg-[#E94B87]/10 px-3 py-1 rounded-full">
                            {step.subtitle}
                          </span>
                        )}
                      </div>
                      {step.description && (
                        <p className="text-lg text-gray-300 font-satoshi mb-6 leading-relaxed">
                          {step.description}
                        </p>
                      )}
                      <ul className="space-y-4 mb-6">
                        {step.bullets.map((bullet, index) => (
                          <li
                            key={index}
                            className="flex items-start gap-4 text-gray-300 font-satoshi group/item"
                          >
                            <Zap className="w-5 h-5 text-[#E94B87] shrink-0 mt-1 group-hover/item:text-[#F9A23F] transition-colors" />
                            <span className="text-lg leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                      {step.outcome && (
                        <div className="mt-8 pt-6 border-t border-white/5">
                          <div className="flex items-center gap-3 text-lg">
                            <ArrowDownToLine className="w-5 h-5 text-[#F9A23F]" />
                            <p className="text-gray-300 font-satoshi">
                              <span className="font-semibold text-white">Outcome:</span>{' '}
                              {step.outcome}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/10 to-[#F9A23F]/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/10 via-[#E94B87]/10 to-[#F9A23F]/10 blur-3xl -z-10" />
          <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-12 border border-white/5">
            <h4 className="text-3xl font-clash text-white mb-6">
              Ready to Transform Your Business?
            </h4>
            <p className="text-xl text-gray-300 font-satoshi mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you have a specific automation in mind or want to explore the possibilities,
              we&apos;re here to help you harness the power of AI for your business.
            </p>
            <Button
              asChild
              className="bg-gradient-to-r from-[var(--color-gradient-start)] via-[var(--color-gradient-middle)] to-[var(--color-gradient-end)] text-white font-satoshi px-8 py-6 text-lg rounded-lg btn-primary-glow"
            >
              <Link href="https://calendly.com/zyft-info/30min" target="_blank">
                Book an Appointment
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
