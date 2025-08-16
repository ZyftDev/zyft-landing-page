import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().min(1, 'Email is required').email('Invalid email format'),
  company: z.string().optional(),
  role: z.string().optional(),
  painPoint: z.string().min(1, 'Please tell us your biggest challenge'),
  vision: z.string().optional(),
  additionalInfo: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
