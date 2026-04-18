import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Name must be at least 2 characters' })
    .max(100, { message: 'Name must be less than 100 characters' })
    .regex(/^[a-zA-Z\s\-']+$/, { message: 'Name can only contain letters, spaces, hyphens, and apostrophes' }),
  
  company: z
    .string()
    .min(2, { message: 'Company name must be at least 2 characters' })
    .max(200, { message: 'Company name must be less than 200 characters' }),
  
  serviceType: z
    .string()
    .min(1, { message: 'Please select a service type' }),
  
  phone: z
    .string()
    .regex(/^[6-9]\d{9}$/, { message: 'Please enter a valid 10-digit Indian mobile number' }),
  
  email: z
    .string()
    .email({ message: 'Please enter a valid email address' })
    .min(5, { message: 'Email must be at least 5 characters' })
    .max(100, { message: 'Email must be less than 100 characters' }),
  
  message: z
    .string()
    .min(10, { message: 'Message must be at least 10 characters' })
    .max(1000, { message: 'Message must be less than 1000 characters' })
    .optional(),
})