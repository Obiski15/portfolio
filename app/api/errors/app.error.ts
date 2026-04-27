export class AppError extends Error {
  is_operational: boolean
  status_code: number

  constructor(message: string, status_code: number) {
    super(message)
    this.status_code = status_code
    this.is_operational = true

    Error.captureStackTrace(this, this.constructor)
  }
}
