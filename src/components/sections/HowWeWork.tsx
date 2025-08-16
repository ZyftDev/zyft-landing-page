import { FC } from 'react';

const steps = [
  {
    number: '01',
    title: 'Connect Your Tools',
    description:
      'Integrate Zyft with your existing workflow tools - email, calendar, CRM, and more. Setup takes minutes.',
  },
  {
    number: '02',
    title: 'Train Your Agent',
    description:
      'Your AI agent learns your preferences and processes through natural conversation and demonstration.',
  },
  {
    number: '03',
    title: 'Define Tasks',
    description:
      'Specify which tasks you want to automate. Your agent adapts to your unique business requirements.',
  },
  {
    number: '04',
    title: 'Monitor & Refine',
    description:
      'Watch your agent work in real-time, approve actions, and fine-tune its behavior for optimal performance.',
  },
];

export const HowWeWork: FC = () => {
  return (
    <section className="py-32" id="how-we-work">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-clash mb-4">How We Work</h2>
          <p className="text-xl text-gray-300 font-satoshi max-w-2xl mx-auto">
            Getting started with Zyft is simple. Our intelligent agents integrate seamlessly into
            your workflow in four easy steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {steps.map((step) => (
            <div key={step.number} className="relative group">
              <div className="bg-black/10 backdrop-blur-sm rounded-lg p-8 border border-[#6B46C1]/10 hover:border-[#6B46C1]/20 transition-colors">
                <div className="flex items-start gap-6">
                  <span className="text-4xl font-clash bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] text-transparent bg-clip-text">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-clash mb-3">{step.title}</h3>
                    <p className="text-gray-300 font-satoshi">{step.description}</p>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#E94B87]/5 to-[#F9A23F]/5 rounded-lg -z-10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
