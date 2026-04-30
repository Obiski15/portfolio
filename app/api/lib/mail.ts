import nodemailer, { SendMailOptions, Transporter } from 'nodemailer'

import config from '@/config'

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
      user: config.MAIL.gmail.user,
      pass: config.MAIL.gmail.pass,
    },
  })
}

function getTransporter(): Transporter {
  if (!transporter) {
    transporter = createTransporter()
  }
  return transporter
}

async function send_mail({
  from = config.MAIL.account,
  to,
  html,
  subject,
  ...rest
}: SendMailOptions) {
  const result = await getTransporter().sendMail({
    from,
    to,
    subject,
    html,
    ...rest,
  })
  return result
}

export default send_mail
