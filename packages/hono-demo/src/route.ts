import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'
import { honoQueryZodValidator } from './zod'

export const app = new Hono()

app
  .get(
    '/get/:name',
    zValidator(
      'param',
      z.object({
        name: z.string(),
      }),
    ),
    honoQueryZodValidator,
    (c) => {
      const { name } = c.req.valid('param')
      const { p1, nest } = c.req.valid('query')
      return c.json(
        {
          success: true as const,
          params: { name },
          query: { p1, nest },
        },
        200,
      )
    },
  )
  .post(
    '/post/:name',
    zValidator(
      'param',
      z.object({
        name: z.string(),
      }),
    ),
    zValidator(
      'form',
      z.object({
        foo: z.string(),
        bar: z.string(),
        baz: z.string(),
      }),
    ),
    honoQueryZodValidator,
    (c) => {
      const { name } = c.req.valid('param')
      const { foo, bar, baz } = c.req.valid('form')
      const { p1, nest } = c.req.valid('query')
      if (p1 === 'error') {
        return c.json({
          success: false as const,
          message: '',
        })
      }
      return c.json({
        success: true as const,
        params: { name },
        form: { foo, bar, baz },
        query: { p1, nest },
      })
    },
  )
