'use client';

import { FC, useState } from 'react';

import Image from 'next/image';

export const Footer: FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch('/api/waitlist', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });

        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.error || 'Failed to subscribe');
        }

        setIsSubmitted(true);
        setEmail('');

        setTimeout(() => {
          setIsSubmitted(false);
        }, 3000);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to subscribe');
        setTimeout(() => {
          setError('');
        }, 3000);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <footer className="relative border-t border-[#6B46C1]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Brand section */}
          <div>
            <div className="flex items-center mb-4">
              <Image
                src="/logos/logo-no-bg.png"
                alt="Zyft Logo"
                width={32}
                height={32}
                className="w-12 h-12"
              />
              <span className="text-2xl font-clash text-white">Zyft</span>
            </div>
            <p className="text-sm sm:text-base text-landing-hero-subheading mb-6 max-w-sm ml-4">
              AI agents that handle your repetitive tasks. You focus on what actually grows your
              business.
            </p>
          </div>

          {/* Waitlist signup */}
          <div className="bg-gradient-to-br from-[#6B46C1]/5 via-[#E94B87]/3 to-[#F9A23F]/5 backdrop-blur-xl border border-[#6B46C1]/20 rounded-2xl p-6 sm:p-8">
            <div className="relative">
              <div className="flex flex-col space-y-4">
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">Get in Touch</h3>
                  <p className="text-sm sm:text-base text-landing-hero-subheading">
                    Let us help you automate your business tasks. Drop your email and we&apos;ll
                    reach out to discuss your needs.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="flex items-center space-x-2 text-green-400">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Thanks! We&apos;ll be in touch soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full sm:w-64 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#6B46C1] focus:ring-1 focus:ring-[#6B46C1]/50 transition-all duration-300"
                      disabled={isLoading}
                      required
                    />
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] text-white font-medium rounded-lg hover:shadow-lg hover:opacity-90 transition-all duration-300 whitespace-nowrap flex items-center justify-center"
                    >
                      {isLoading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <span className="flex items-center space-x-2">
                          <span>Contact Us</span>
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                          </svg>
                        </span>
                      )}
                    </button>
                  </form>
                )}
                {error && <div className="text-sm text-red-400">{error}</div>}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#6B46C1]/20">
          <p className="text-sm text-landing-hero-subheading text-center">
            © {new Date().getFullYear()} Zyft. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
