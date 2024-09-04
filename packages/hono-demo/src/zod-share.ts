import { z } from 'zod'

export const honoZod = z.object({
  p1: z.string(),
  nest: z.object({
    p2: z.string(),
  }),
})
