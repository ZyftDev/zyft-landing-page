'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { AuroraText } from '@/components/magicui/aurora-text';
import { Button } from '@/components/ui';

export const Hero: FC = () => {
  const containerVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.98,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const buttonVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: 'easeInOut',
      },
    },
    tap: {
      scale: 0.98,
      transition: {
        duration: 0.1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center w-full max-w-[90%] sm:max-w-[85%] lg:max-w-[75%] xl:max-w-[65%] mx-auto"
      >
        <motion.h1
          variants={itemVariants}
          className="text-landing-hero-heading text-4xl text-[var(--color-text-primary)] sm:text-5xl md:text-6xl lg:text-7xl font-[350] font-clash mb-4 sm:mb-6 lg:mb-8 leading-[1.2]"
        >
          Let <AuroraText>AI Agents</AuroraText> Handle The Work You Hate
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-landing-hero-subheading text-lg sm:text-xl font-[450] font-satoshi max-w-2xl mx-auto text-[var(--color-text-secondary)] mb-8 sm:mb-10 lg:mb-12"
        >
          Stop doing work a robot could handle. Our AI agents crush the repetitive stuff so you can
          focus on building something that matters.
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full sm:w-auto"
          >
            <Button
              asChild
              className="w-full sm:w-auto bg-gradient-to-r from-[var(--color-gradient-start)] via-[var(--color-gradient-middle)] to-[var(--color-gradient-end)] text-white font-satoshi px-8 py-6 text-lg rounded-lg btn-primary-glow"
            >
              <Link href="https://calendly.com/zyft-info/30min" target="_blank">
                Book an Appointment
              </Link>
            </Button>
          </motion.div>
          <motion.div
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="w-full sm:w-auto"
          >
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto font-satoshi px-8 py-6 text-lg rounded-lg border-1 bg-[#7c3aed]/20 border-[#c4b5fd] text-white hover:bg-[#7c3aed]/40 hover:border-[#a78bfa] hover:text-white btn-primary-glow"
            >
              Show Me Examples
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};
