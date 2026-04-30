import { contactSchema, contactSchemaType } from '@/schema/contact.schema'
import { NextRequest } from 'next/server'

import config from '@/config'
import { catch_async } from '../../helpers/catch_async'
import { send_response } from '../../helpers/send_response'
import send_mail from '../../lib/mail'
import { render_template } from '../../lib/nunjucks'
import { validate_params } from '../../validators/validate_params'

// send mail
export const POST = await catch_async(async (request: NextRequest) => {
  const body = (await request.json()) as contactSchemaType

  const validated_data = validate_params(contactSchema, body)

  const template = render_template('contact_email.njk', {
    name: validated_data.name,
    email: validated_data.email,
    priority: validated_data.priority,
    request_type: validated_data.request_type,
    message: validated_data.message,
    date: new Date().toLocaleString(),
  })

  const ack_template = render_template('contact_ack_email.njk', {
    name: validated_data.name,
    email: validated_data.email,
    priority: validated_data.priority,
    request_type: validated_data.request_type,
    message: validated_data.message,
    date: new Date().toLocaleString(),
  })

  // send mail
  // await send_mail({
  //   to: config.MAIL.account,
  //   subject: `New contact request from ${validated_data.email}`,
  //   html: template,
  // })

  // send acknowledgment email
  await send_mail({
    from: validated_data.email as string,
    to: config.MAIL.account,
    subject: `Thank you for your contact request`,
    html: ack_template,
  })

  return send_response({
    status: 'success',
    data: { ...validated_data },
    message: 'Email sent successfully',
  })
})
