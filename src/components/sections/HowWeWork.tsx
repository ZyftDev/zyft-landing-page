import { FC } from 'react';

import { ArrowDownToLine, ArrowRight, CheckCircle2, Sparkles, Zap } from 'lucide-react';

const startingPoints = [
  {
    icon: '🎯',
    title: 'Already Know What You Want to Automate?',
    description: "Perfect! We'll jump straight into the technical details and solution design.",
  },
  {
    icon: '🤔',
    title: 'Not Sure Where AI Can Help Your Business?',
    description: "No problem! We'll help you discover the best opportunities together.",
  },
];

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

const benefits = [
  'Transparent - No hidden costs or surprise requirements',
  'Flexible - We adapt to your knowledge level and needs',
  'Thorough - Every detail discussed before we start',
  "Risk-free - You know exactly what you're getting before you commit",
];

export const HowWeWork: FC = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="how-we-work">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B46C1]/5 to-transparent" />

      <div className="w-[95%] max-w-[1400px] mx-auto relative">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-2 text-[#E94B87] mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="uppercase tracking-wider text-sm font-semibold">Our Approach</span>
          </div>
          <h2 className="text-7xl font-clash mb-8 bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] inline-block text-transparent bg-clip-text leading-tight">
            How We Work
          </h2>
          <p className="text-xl text-gray-300 font-satoshi max-w-3xl mx-auto leading-relaxed">
            We understand that every business has unique needs when it comes to AI automation.
            That&apos;s why we&apos;ve designed a simple, transparent process that meets you exactly
            where you are.
          </p>
        </div>

        {/* Starting Points */}
        <div className="mb-32 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/10 via-transparent to-[#F9A23F]/10 blur-3xl -z-10" />
          <h3 className="text-4xl font-clash text-center mb-16 relative">
            <span className="bg-gradient-to-r from-[#6B46C1] to-[#E94B87] inline-block text-transparent bg-clip-text">
              Two Starting Points
            </span>
            <span className="text-white">, One Great Outcome</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {startingPoints.map((point) => (
              <div key={point.title} className="relative group">
                <div className="bg-black/20 backdrop-blur-xl rounded-2xl p-10 border border-white/5 hover:border-[#6B46C1]/30 transition-all duration-300 h-full transform hover:-translate-y-1">
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#6B46C1] to-[#E94B87] flex items-center justify-center text-4xl transform group-hover:scale-110 transition-transform duration-300">
                      {point.icon}
                    </div>
                    <h4 className="text-2xl font-clash text-white">{point.title}</h4>
                    <p className="text-lg text-gray-300 font-satoshi leading-relaxed">
                      {point.description}
                    </p>
                    <ArrowRight className="w-6 h-6 text-[#E94B87] opacity-0 group-hover:opacity-100 transform group-hover:translate-x-2 transition-all duration-300" />
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/10 to-[#F9A23F]/10 rounded-2xl -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              </div>
            ))}
          </div>
        </div>

        {/* Process Steps */}
        <div className="mb-32">
          <h3 className="text-4xl font-clash text-center mb-16">
            <span className="bg-gradient-to-r from-[#E94B87] to-[#F9A23F] inline-block text-transparent bg-clip-text">
              Our Process
            </span>
          </h3>
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

        {/* Why This Process Works */}
        <div className="mb-32">
          <h3 className="text-4xl font-clash text-center mb-16">
            <span className="bg-gradient-to-r from-[#F9A23F] to-[#6B46C1] inline-block text-transparent bg-clip-text">
              Why This Process Works
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="group flex items-center gap-4 bg-black/20 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-[#6B46C1]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1]/20 to-[#E94B87]/20 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle2 className="text-[#E94B87] h-6 w-6 shrink-0" />
                </div>
                <span className="text-lg text-gray-300 font-satoshi leading-relaxed">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
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
            <button className="bg-gradient-to-r from-[#6B46C1] to-[#E94B87] text-white font-satoshi px-8 py-4 rounded-xl text-lg font-medium hover:opacity-90 transition-opacity">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
