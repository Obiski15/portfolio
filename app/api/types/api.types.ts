import { contactSchema } from '@/schema/contact.schema'
import * as z from 'zod'

export type IContact = z.infer<typeof contactSchema>
