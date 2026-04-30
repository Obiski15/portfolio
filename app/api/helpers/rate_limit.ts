import { NextRequest } from 'next/server'
import { AppError } from '../errors/app.error'

const LIMIT = 10
const INTERVAL = 60 * 1000
const requests = new Map()

export const rate_limit = (request: NextRequest) => {
  const ip = request.headers.get('x-forwarded-for')

  if (!requests.has(ip)) {
    requests.set(ip, { count: 0, firstRequest: Date.now() })
  }

  const data = requests.get(ip)
  if (Date.now() - data.firstRequest > INTERVAL) {
    // Reset the count every interval
    data.count = 0
    data.firstRequest = Date.now()
  }

  data.count += 1
  if (data.count > LIMIT)
    throw new AppError('Too many requests, please try again later.', 429)

  requests.set(ip, data)
}
