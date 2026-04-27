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
      return error_handler(error as AppError)
    }
  }
}
