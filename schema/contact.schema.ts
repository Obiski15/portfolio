import { z } from 'zod'

export const contactSchema = z.object({
  email: z
    .email({ error: 'Please enter a valid email address' })
    .nonoptional('Email is required'),
  request_type: z
    .enum(['support', 'feedback', 'partnership'])
    .nonoptional('Request type is required'),
  priority: z
    .enum(['low', 'medium', 'high'])
    .nonoptional('Priority is required'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(100, 'Message must be less than 100 characters long')
    .nonoptional('Message is required'),
})
