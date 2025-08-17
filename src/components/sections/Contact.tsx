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
    <section className="py-32 text-[var(--color-text-primary)]" id="contact">
      <div className="w-[95%] max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-6xl font-clash mb-6 bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] inline-block text-transparent bg-clip-text">
            Let&apos;s Talk About Your Business
          </h2>
          <p className="text-xl text-gray-300 font-satoshi max-w-2xl mx-auto">
            Ready to transform how your business handles repetitive tasks? Our team is here to show
            you how Zyft can work for you.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <div className="w-full max-w-2xl">
            <div className="bg-white/10 backdrop-blur-2xl rounded-2xl p-10 border border-white/30 shadow-xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-[#6B46C1]/20 via-[#E94B87]/10 to-[#F9A23F]/20 pointer-events-none opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-tr from-white/20 via-transparent to-white/20 pointer-events-none blur-3xl" />
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      {...register('name')}
                      className={`w-full px-4 py-3 bg-black/30 rounded-lg border ${
                        errors.name ? 'border-red-500' : 'border-[#6B46C1]/30'
                      } focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 text-base`}
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
                      className={`w-full px-4 py-3 bg-black/30 rounded-lg border ${
                        errors.email ? 'border-red-500' : 'border-[#6B46C1]/30'
                      } focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 text-base`}
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
                      className={`w-full px-4 py-3 bg-black/30 rounded-lg border ${
                        errors.company ? 'border-red-500' : 'border-[#6B46C1]/30'
                      } focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 text-base`}
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
                      className={`w-full px-4 py-3 bg-black/30 rounded-lg border ${
                        errors.role ? 'border-red-500' : 'border-[#6B46C1]/30'
                      } focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 text-base`}
                      placeholder="Your Role"
                    />
                    {errors.role && (
                      <p className="mt-1 text-xs text-red-500">{errors.role.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="painPoint"
                      className="block text-sm font-medium mb-2 text-gray-200"
                    >
                      What&apos;s your biggest challenge right now?
                    </label>
                    <textarea
                      id="painPoint"
                      {...register('painPoint')}
                      rows={3}
                      className={`w-full px-4 py-3 bg-black/30 rounded-lg border ${
                        errors.painPoint ? 'border-red-500' : 'border-[#6B46C1]/30'
                      } focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 text-base resize-none`}
                      placeholder="Describe your current pain points..."
                    />
                    {errors.painPoint && (
                      <p className="mt-1 text-xs text-red-500">{errors.painPoint.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="vision"
                      className="block text-sm font-medium mb-2 text-gray-200"
                    >
                      Where do you see your business in 2 years?
                    </label>
                    <textarea
                      id="vision"
                      {...register('vision')}
                      rows={3}
                      className={`w-full px-4 py-3 bg-black/30 rounded-lg border ${
                        errors.vision ? 'border-red-500' : 'border-[#6B46C1]/30'
                      } focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 text-base resize-none`}
                      placeholder="Share your vision..."
                    />
                    {errors.vision && (
                      <p className="mt-1 text-xs text-red-500">{errors.vision.message}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="additionalInfo"
                      className="block text-sm font-medium mb-2 text-gray-200"
                    >
                      Anything else we should know?
                    </label>
                    <textarea
                      id="additionalInfo"
                      {...register('additionalInfo')}
                      rows={3}
                      className={`w-full px-4 py-3 bg-black/30 rounded-lg border ${
                        errors.additionalInfo ? 'border-red-500' : 'border-[#6B46C1]/30'
                      } focus:border-[#6B46C1] focus:ring-2 focus:ring-[#6B46C1]/50 focus:outline-none transition-all placeholder:text-gray-400 text-base resize-none`}
                      placeholder="Share any additional information..."
                    />
                    {errors.additionalInfo && (
                      <p className="mt-1 text-xs text-red-500">{errors.additionalInfo.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-4">
                  {submitSuccess && (
                    <div
                      className="bg-green-500/10 border border-green-500/30 rounded-lg p-4"
                      role="status"
                    >
                      <p className="text-sm text-green-400 text-center font-medium">
                        Thank you for your message! We&apos;ll get back to you soon.
                      </p>
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#6B46C1] via-[#E94B87] to-[#F9A23F] hover:opacity-90 text-white font-satoshi text-lg font-medium py-4 disabled:opacity-50 shadow-lg shadow-[#6B46C1]/20 hover:shadow-xl hover:shadow-[#6B46C1]/30 transition-all duration-300 rounded-lg"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
