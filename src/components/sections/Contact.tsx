import { FC } from 'react';

import { Button } from '@/components/ui';

export const Contact: FC = () => {
  return (
    <section className="py-32 bg-black/5" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-clash mb-6">Let&apos;s Talk About Your Business</h2>
            <p className="text-xl text-gray-300 font-satoshi mb-8">
              Ready to transform how your business handles repetitive tasks? Our team is here to
              show you how Zyft can work for you.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-[#E94B87] to-[#F9A23F] rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-clash">Email Us</h3>
                  <p className="text-gray-300">hello@zyft.ai</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-gradient-to-r from-[#E94B87] to-[#F9A23F] rounded-full p-3">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-clash">Call Us</h3>
                  <p className="text-gray-300">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-black/10 backdrop-blur-sm rounded-lg p-8 border border-[#E94B87]/10">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 bg-black/20 rounded-md border border-[#E94B87]/20 focus:border-[#E94B87] focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-black/20 rounded-md border border-[#E94B87]/20 focus:border-[#E94B87] focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-black/20 rounded-md border border-[#E94B87]/20 focus:border-[#E94B87] focus:outline-none transition-colors"
                  placeholder="Tell us about your needs..."
                />
              </div>
              <Button
                size="lg"
                className="w-full bg-gradient-to-r from-[#E94B87] to-[#F9A23F] hover:opacity-90 text-white font-satoshi"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
