import { FC } from 'react';

import { ArrowRight, Brain, MessageSquare, Settings, Share2 } from 'lucide-react';

interface Solution {
  icon: React.ReactNode;
  title: string;
  description: string;
  examples: string[];
}

const solutions: Solution[] = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: 'AI Agent Services',
    description: 'Intelligent automation that learns and adapts',
    examples: [
      'Customer Support Automation',
      'Sales Intelligence & Lead Qualification',
      'Financial Decision Making',
      'Operations Management',
      'Hiring & Recruitment',
      'Strategic Planning',
    ],
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    title: 'Customer Experience',
    description: 'Enhance every customer interaction',
    examples: [
      'Lead Nurturing Sequences',
      'Customer Onboarding',
      'Support Ticket Management',
      'Feedback Collection',
      'Customer Success Monitoring',
      'Personalized Communications',
    ],
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: 'Business Operations',
    description: 'Streamline your core processes',
    examples: [
      'Invoice & Payment Processing',
      'Data Entry & Reporting',
      'Inventory Management',
      'Supply Chain Optimization',
      'Resource Planning',
      'Quality Control',
    ],
  },
  {
    icon: <Share2 className="w-6 h-6" />,
    title: 'Marketing & Content',
    description: 'Automate your marketing efforts',
    examples: [
      'Social Media Management',
      'Email Marketing Campaigns',
      'Content Scheduling',
      'Analytics Reporting',
      'Lead Scoring',
      'Campaign Optimization',
    ],
  },
];

export const AutomationSolutions: FC = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="solutions">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#6B46C1]/5 to-transparent" />

      <div className="w-[95%] max-w-[1400px] mx-auto relative">
        <div className="text-center mb-24">
          <h2 className="text-7xl font-clash mb-8 bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] inline-block text-transparent bg-clip-text leading-tight">
            Beyond Basic Automation
          </h2>
          <p className="text-xl text-gray-300 font-satoshi max-w-3xl mx-auto leading-relaxed">
            Transform your business with AI agents that think, adapt, and make autonomous decisions.
            Unlike traditional automation, our solutions evolve with your needs.
          </p>
        </div>

        <div id="solutions" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution) => (
            <div
              key={solution.title}
              className="group bg-black/20 backdrop-blur-xl rounded-2xl p-8 border border-white/5 hover:border-[#6B46C1]/30 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B46C1] to-[#E94B87] flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300">
                  {solution.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-clash text-white">{solution.title}</h3>
                  <p className="text-gray-300 font-satoshi">{solution.description}</p>
                </div>
              </div>
              <ul className="space-y-3">
                {solution.examples.map((example) => (
                  <li key={example} className="flex items-start gap-3 text-gray-300 group/item">
                    <ArrowRight className="w-4 h-4 text-[#E94B87] mt-1 shrink-0 group-hover/item:translate-x-1 transition-transform" />
                    <span className="font-satoshi">{example}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
