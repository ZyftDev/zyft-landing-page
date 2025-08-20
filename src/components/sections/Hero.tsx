'use client';

import { FC } from 'react';

import { motion } from 'framer-motion';
import Link from 'next/link';

import { AuroraText } from '@/components/magicui/aurora-text';
import { Button, Spotlight } from '@/components/ui';

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
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-32 pb-20">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(147, 51, 234, 0.12) 0%, rgba(147, 51, 234, 0.08) 50%, rgba(147, 51, 234, 0.04) 80%, rgba(147, 51, 234, 0) 90%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(147, 51, 234, 0.08) 0%, rgba(147, 51, 234, 0.06) 50%, rgba(147, 51, 234, 0.04) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(147, 51, 234, 0.06) 0%, rgba(147, 51, 234, 0.04) 50%, rgba(147, 51, 234, 0.02) 80%, transparent 100%)"
        translateY={-250}
        width={1000}
        height={1200}
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative w-[95%] max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-12 lg:gap-8 items-center"
      >
        <motion.div variants={itemVariants} className="text-center lg:text-left">
          <motion.h1
            variants={itemVariants}
            className="text-landing-hero-heading text-4xl text-[var(--color-text-primary)] sm:text-5xl md:text-6xl lg:text-7xl font-[350] font-clash mb-4 sm:mb-6 lg:mb-8 leading-[1.2]"
          >
            Let <AuroraText>AI Agents</AuroraText> Handle The Work You Hate
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-landing-hero-subheading text-lg sm:text-xl font-[450] font-satoshi text-[var(--color-text-secondary)] mb-8 sm:mb-10 lg:mb-12"
          >
            Stop doing work a robot could handle. Our AI agents crush the repetitive stuff so you
            can focus on building something that matters.
          </motion.p>
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 sm:gap-6"
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
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto font-satoshi px-8 py-6 text-lg rounded-lg border-1 bg-[#7c3aed]/20 border-[#c4b5fd] text-white hover:bg-[#7c3aed]/40 hover:border-[#a78bfa] hover:text-white btn-primary-glow"
              >
                <Link
                  href="#solutions"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#solutions')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Show Me Examples
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Video Side */}
        <motion.div
          variants={itemVariants}
          className="relative aspect-video rounded-xl overflow-hidden shadow-2xl shadow-purple-500/20 w-full h-full min-h-[300px]"
        >
          <iframe
            src="https://www.youtube.com/embed/IHkyFhU6JEY"
            title="Zyft AI Agents Demo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
