import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(3, 'Name must be at least 3 characters long')
    .max(100, 'Name must be less than 100 characters long')
    .nonoptional('Name is required'),
  email: z
    .email({ error: 'Please enter a valid email address' })
    .nonoptional('Email is required'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters long')
    .max(100, 'Message must be less than 100 characters long')
    .nonoptional('Message is required'),
})

export type contactSchemaType = z.infer<typeof contactSchema>
