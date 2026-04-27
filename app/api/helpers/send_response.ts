import { NextResponse } from 'next/server'

export const send_response = ({
  data,
  error,
  status_code = 200,
  status = 'success',
  message,
}: {
  message: string
  status: 'success' | 'error'
  status_code?: number
  data?: Record<string, unknown>
  error?: unknown
}) => {
  return NextResponse.json(
    {
      message,
      status,
      data,
      error,
    },
    {
      status: status_code,
    },
  )
}
