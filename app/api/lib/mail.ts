import nodemailer, { SendMailOptions, Transporter } from 'nodemailer'

import config from '@/config'
import { AppError } from '../errors/app.error'

let transporter: Transporter

function createTransporter(): Transporter {
  if (config.nodeEnv === 'development') {
    return nodemailer.createTransport({
      host: 'sandbox.smtp.mailtrap.io',
      port: 2525,
      auth: {
        user: config.MAIL.mailtrap.user,
        pass: config.MAIL.mailtrap.pass,
      },
    })
  }
  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: 'me@gmail.com',
    },
  })
}

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = createTransporter()
  }
  return transporter
}

async function send_mail({ to, html, subject, ...rest }: SendMailOptions) {
  try {
    const result = await getTransporter().sendMail({
      from: config.MAIL.account,
      to,
      subject,
      html,
      ...rest,
    })
    return result
  } catch (error) {
    throw new AppError('Something went wrong', 500)
  }
}

export default send_mail
