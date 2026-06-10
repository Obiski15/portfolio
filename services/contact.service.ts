import { contactSchemaType } from '@/schema/contact.schema'

export const contact_me = async (contactData: contactSchemaType) => {
  const response = await fetch('/api/v1/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: contactData.name,
      email: contactData.email,
      message: contactData.message,
    }),
  })

  const data = await response.json()

  if (!response.ok) {
    throw data
  }

  return data
}
