'use client';

import { zodResolver } from '@hookform/resolvers/zod';

import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui';
import { ContactFormData, contactFormSchema } from '@/lib/contact-form';

type ExtendedContactFormData = ContactFormData & {
  form?: { message: string };
};

export const Contact: FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ExtendedContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onChange',
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsSubmitting(true);

      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      setSubmitSuccess(true);
      reset();
    } catch (error) {
      console.error('Failed to send message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="py-32 text-[var(--color-text-secondary)]" id="contact">
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
                <div className="bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] rounded-full p-3">
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
                <div className="bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] rounded-full p-3">
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
          <div className="bg-white/10 backdrop-blur-2xl rounded-xl p-6 border border-white/30 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1]/10 via-[#E94B87]/5 to-[#F9A23F]/10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/20 pointer-events-none blur-3xl" />
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    {...register('name')}
                    className={`w-full px-3 py-1.5 bg-black/30 rounded-md border ${
                      errors.name ? 'border-red-500' : 'border-[#6B46C1]/30'
                    } focus:border-[#6B46C1] focus:ring-1 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 peer`}
                    {...(errors.name ? { 'aria-invalid': 'true' } : {})}
                    aria-describedby="name-error name-requirements"
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p id="name-error" className="mt-1 text-xs text-red-500">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email')}
                    className={`w-full px-3 py-1.5 bg-black/30 rounded-md border ${
                      errors.email ? 'border-red-500' : 'border-[#6B46C1]/30'
                    } focus:border-[#6B46C1] focus:ring-1 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 peer`}
                    {...(errors.email ? { 'aria-invalid': 'true' } : {})}
                    aria-describedby="email-error email-requirements"
                    placeholder="john@company.com"
                  />
                  {errors.email && (
                    <p id="email-error" className="mt-1 text-xs text-red-500">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-1">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    {...register('company')}
                    className={`w-full px-3 py-1.5 bg-black/30 rounded-md border ${
                      errors.company ? 'border-red-500' : 'border-[#6B46C1]/30'
                    } focus:border-[#6B46C1] focus:ring-1 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400`}
                    placeholder="Company Name"
                  />
                  {errors.company && (
                    <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium mb-1">
                    Role
                  </label>
                  <input
                    type="text"
                    id="role"
                    {...register('role')}
                    className={`w-full px-3 py-1.5 bg-black/30 rounded-md border ${
                      errors.role ? 'border-red-500' : 'border-[#6B46C1]/30'
                    } focus:border-[#6B46C1] focus:ring-1 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400`}
                    placeholder="Your Role"
                  />
                  {errors.role && (
                    <p className="mt-1 text-xs text-red-500">{errors.role.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label htmlFor="painPoint" className="block text-sm font-medium mb-1">
                    What&apos;s your biggest challenge right now?
                  </label>
                  <textarea
                    id="painPoint"
                    {...register('painPoint')}
                    rows={2}
                    className={`w-full px-3 py-1.5 bg-black/30 rounded-md border ${
                      errors.painPoint ? 'border-red-500' : 'border-[#6B46C1]/30'
                    } focus:border-[#6B46C1] focus:ring-1 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 resize-none`}
                    placeholder="Describe your current pain points..."
                  />
                  {errors.painPoint && (
                    <p className="mt-1 text-xs text-red-500">{errors.painPoint.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="vision" className="block text-sm font-medium mb-1">
                    Where do you see your business in 2 years?
                  </label>
                  <textarea
                    id="vision"
                    {...register('vision')}
                    rows={2}
                    className={`w-full px-3 py-1.5 bg-black/30 rounded-md border ${
                      errors.vision ? 'border-red-500' : 'border-[#6B46C1]/30'
                    } focus:border-[#6B46C1] focus:ring-1 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 resize-none`}
                    placeholder="Share your vision..."
                  />
                  {errors.vision && (
                    <p className="mt-1 text-xs text-red-500">{errors.vision.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="additionalInfo" className="block text-sm font-medium mb-1">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="additionalInfo"
                    {...register('additionalInfo')}
                    rows={2}
                    className={`w-full px-3 py-1.5 bg-black/30 rounded-md border ${
                      errors.additionalInfo ? 'border-red-500' : 'border-[#6B46C1]/30'
                    } focus:border-[#6B46C1] focus:ring-1 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 resize-none`}
                    placeholder="Share any additional information..."
                  />
                  {errors.additionalInfo && (
                    <p className="mt-1 text-xs text-red-500">{errors.additionalInfo.message}</p>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                {submitSuccess && (
                  <p className="text-sm text-green-500 text-center" role="status">
                    Thank you for your message! We&apos;ll get back to you soon.
                  </p>
                )}
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] hover:opacity-90 text-white font-satoshi disabled:opacity-50 shadow-lg shadow-[#6B46C1]/20 hover:shadow-xl hover:shadow-[#6B46C1]/30 transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
