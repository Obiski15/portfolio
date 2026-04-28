import config from '@/config'
import { NextRequest, NextResponse } from 'next/server'
import { AppError } from '../errors/app.error'
import { error_handler } from './error_handler'

export const catch_async = async (
  fn: (request: NextRequest) => Promise<NextResponse>,
) => {
  return async (request: NextRequest) => {
    try {
      return await fn(request)
    } catch (error) {
      config.nodeEnv === 'development' &&
        console.error('Error in catch_async:', error)
      return error_handler(error as AppError)
    }
  }
}
