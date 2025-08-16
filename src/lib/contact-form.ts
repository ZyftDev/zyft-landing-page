import { z } from 'zod';

export const contactFormSchema = z
  .object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().min(1, 'Email is required').email('Invalid email format'),
    company: z.string().optional(),
    role: z.string().optional(),
    painPoint: z.string().optional(),
    vision: z.string().optional(),
    additionalInfo: z.string().optional(),
  })
  .refine(
    (data) => {
      // At least one of painPoint, vision, or additionalInfo must be filled
      return data.painPoint || data.vision || data.additionalInfo;
    },
    {
      message:
        'Please fill in at least one of: Current Pain Point, Future Vision, or Additional Information',
      path: ['form'], // This will be used to show the error at the form level
    }
  );

export type ContactFormData = z.infer<typeof contactFormSchema>;
