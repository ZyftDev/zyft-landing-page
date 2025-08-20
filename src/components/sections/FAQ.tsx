'use client';

import { IconArrowRight } from '@tabler/icons-react';

import React, { FC } from 'react';

import { AnimatePresence, motion } from 'framer-motion';

const FAQs = [
  {
    question: 'How much does a custom AI agent cost?',
    answer:
      "Pricing depends on your specific needs and the complexity of your agent. We offer flexible options to fit different budgets, and your initial consultation is completely free! We'd love to hop on a call, understand exactly what you're looking for, and provide you with a personalized quote tailored just for you.",
  },
  {
    question: 'How can we get in touch for more information?',
    answer:
      "We'd love to hear from you! You can reach us at info@zyft.ai or easily book a call through our website using Calendly. Our team is always excited to chat and help answer any questions you might have.",
  },
  {
    question: "What if we're not completely happy with the results?",
    answer:
      "Your satisfaction means everything to us at Zyft. We stand behind our work with a 100% satisfaction guarantee. If you're not thrilled with the results, we'll work with you to make it right – whether that means refining the solution or providing a full refund. Whatever works best for you!",
  },
];

export const FAQ: FC = () => {
  const [open, setOpen] = React.useState<string | null>(null);

  return (
    <div className="relative w-full" id="faq">
      <div className="w-[95%] max-w-[1400px] mx-auto py-16">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-clash mb-6 bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] inline-block text-transparent bg-clip-text">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[var(--color-text-secondary)] font-satoshi max-w-2xl mx-auto">
            Get answers to commonly asked questions about Zyft.
          </p>
        </div>
        <div className="max-w-3xl mx-auto divide-y divide-neutral-800">
          {FAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              open={open}
              setOpen={setOpen}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({
  question,
  answer,
  setOpen,
  open,
}: {
  question: string;
  answer: string;
  open: string | null;
  setOpen: (open: string | null) => void;
}) => {
  const isOpen = open === question;

  return (
    <motion.div
      className="cursor-pointer py-4 md:py-6"
      onClick={() => {
        if (isOpen) {
          setOpen(null);
        } else {
          setOpen(question);
        }
      }}
    >
      <div className="flex items-start justify-between">
        <div className="pr-8 md:pr-12">
          <h3 className="text-base md:text-lg font-medium text-neutral-200">{question}</h3>
          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                className="overflow-hidden text-sm md:text-base text-neutral-400 mt-2"
              >
                <p>{answer}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="relative mr-2 md:mr-4 mt-1 h-5 w-5 md:h-6 md:w-6 flex-shrink-0">
          <motion.div
            animate={{
              scale: isOpen ? [0, 1] : [1, 0, 1],
              rotate: isOpen ? 90 : 0,
              marginLeft: isOpen ? '1.5rem' : '0rem',
            }}
            initial={{ scale: 0 }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.2 }}
          >
            <IconArrowRight className="absolute inset-0 h-5 w-5 md:h-6 md:w-6 transform text-white" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
