import { z } from 'zod'

export const contactFormSchema = z.object({
    name: z.string()
    .min(2, { error: "Must be at least 2 characters" }),
  
    email: z.string()
      .email({ error: "Must be a valid email format" }),
  
    phone: z.string()
      .regex(
        /^(?:\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/,
        { error: "Invalid UK phone number" }
      )
      .optional()
      .or(z.literal("")),
  
    subject: z.string()
      .min(5, { error: "Must be at least 5 characters" }),
  
    message: z.string()
      .min(10, { error: "Must be at least 10 characters" }),
    
    lastName: z.string().optional()
  });

  export type ContactForm = z.infer<typeof contactFormSchema>