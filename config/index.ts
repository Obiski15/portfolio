export default {
  nodeEnv: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || 3000,
  MAIL: {
    account: process.env.MAIL_ACCOUNT || '',
    gmail: {
      user: process.env.GMAIL_USER || '',
      pass: process.env.GMAIL_PASS || '',
    },
    mailtrap: {
      user: process.env.MAILTRAP_USER || '',
      pass: process.env.MAILTRAP_PASS || '',
    },
  },
}
