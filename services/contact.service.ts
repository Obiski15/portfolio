import { contactSchemaType } from '@/schema/contact.schema'

export const contact_me = async (contactData: contactSchemaType) => {
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

  if (!response.ok) {
    throw data
  }

  return data
}
