import { ZodType } from 'zod'
import { AppError } from '../errors/app.error'

export const validate_params = (
  schema: ZodType,
  value: Record<string, unknown>,
): Record<string, unknown> => {
  const data = schema.safeParse(value)

  if (data.error) {
    const message = data.error.issues.map(issue => issue.message).join(', ')
    throw new AppError(message, 400)
  }

  return data.data as Record<string, unknown>
}
