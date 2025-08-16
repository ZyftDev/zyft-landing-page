import { FC } from 'react';

const faqs = [
  {
    question: "How does Zyft's AI agent learn my processes?",
    answer:
      "Zyft's AI agents learn through a combination of natural language conversation and observation of your workflow. You can teach them by demonstration, verbal instructions, or by reviewing and correcting their actions.",
  },
  {
    question: 'Is my data secure with Zyft?',
    answer:
      "Absolutely. We employ enterprise-grade encryption, regular security audits, and strict data access controls. Your data is never used to train other clients' agents.",
  },
  {
    question: 'Can Zyft integrate with my existing tools?',
    answer:
      "Yes! Zyft integrates with popular business tools including Gmail, Outlook, Slack, Salesforce, and many more. We're constantly adding new integrations.",
  },
  {
    question: 'What kind of tasks can Zyft handle?',
    answer:
      'Zyft excels at repetitive tasks like data entry, email management, scheduling, document processing, and customer support. If a task has clear patterns, Zyft can likely automate it.',
  },
  {
    question: 'How long does it take to set up?',
    answer:
      'Basic setup takes minutes. Your agent becomes more efficient over time as it learns your preferences and processes, typically reaching optimal performance within 1-2 weeks.',
  },
  {
    question: 'What support does Zyft provide?',
    answer:
      'We offer 24/7 technical support, comprehensive documentation, and dedicated onboarding specialists for enterprise clients. Our team is always here to help.',
  },
];

export const FAQ: FC = () => {
  return (
    <section className="py-32" id="faq">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-clash mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-300 font-satoshi max-w-2xl mx-auto">
            Everything you need to know about Zyft and our AI agents. Can&apos;t find your answer?
            Reach out to our support team.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="bg-black/10 backdrop-blur-sm rounded-lg p-8 border border-[#6B46C1]/10 hover:border-[#6B46C1]/20 transition-colors"
            >
              <h3 className="text-2xl font-clash mb-3">{faq.question}</h3>
              <p className="text-gray-300 font-satoshi">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
