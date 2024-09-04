import { zValidator } from '@hono/zod-validator'
import { honoZod } from './zod-share'

export const honoQueryZodValidator = zValidator(
  'query',
  honoZod,
)
