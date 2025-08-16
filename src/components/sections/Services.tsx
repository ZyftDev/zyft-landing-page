import { FC } from 'react';

const services = [
  {
    title: 'Data Entry & Processing',
    description:
      'Our AI agents handle all your data entry tasks with high accuracy, from form filling to data extraction and validation.',
    icon: '📊',
  },
  {
    title: 'Meeting Scheduling',
    description:
      'Seamlessly coordinate meetings across time zones, handle calendar conflicts, and send professional follow-ups.',
    icon: '📅',
  },
  {
    title: 'Email Management',
    description:
      'Smart email filtering, response drafting, and follow-up tracking to keep your inbox organized and efficient.',
    icon: '📧',
  },
  {
    title: 'Document Processing',
    description:
      'Automated document analysis, data extraction, and organization for contracts, invoices, and more.',
    icon: '📄',
  },
  {
    title: 'Customer Support',
    description:
      'First-line support handling common queries, ticket categorization, and intelligent routing.',
    icon: '💬',
  },
  {
    title: 'Task Automation',
    description:
      'Custom workflow automation for your specific business needs, integrated with your existing tools.',
    icon: '⚡',
  },
];

export const Services: FC = () => {
  return (
    <section className="py-32" id="services">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-clash mb-4 text-[var(--color-text-primary)]">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 font-satoshi max-w-2xl mx-auto">
            Powerful AI agents that transform how you work, giving you back precious time to focus
            on what matters most.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-black/10 backdrop-blur-sm rounded-lg p-8 border border-[#6B46C1]/10 hover:border-[#6B46C1]/20 transition-colors group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-clash mb-3">{service.title}</h3>
              <p className="text-gray-300 font-satoshi">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
