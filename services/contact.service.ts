import { contactSchema } from '@/schema/contact.schema'
import * as z from 'zod'

export const contact_me = async (
  contactData: z.infer<typeof contactSchema>,
) => {
  const response = await fetch('/api/v1/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: contactData.email,
      priority: contactData.priority,
      request_type: contactData.request_type,
      message: contactData.message,
    }),
  })

  const data = await response.json()

  return data
}
