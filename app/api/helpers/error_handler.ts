import config from '@/config'
import { AppError } from '../errors/app.error'
import { send_response } from './send_response'

export const error_handler = (error: AppError) => {
  config.nodeEnv === 'development' &&
    console.error('Error in catch_async:', error)

  const options: { message: string; status_code: number } = {
    message: 'Something went wrong',
    status_code: 500,
  }

  if (error?.is_operational) {
    options.message = error.message
    options.status_code = error.status_code
  }

  return send_response({
    message: options.message,
    status_code: options.status_code,
    status: 'error',
  })
}
