import type { IRequest } from 'itty-router'
import { AutoRouter, withContent, withParams } from 'itty-router'
import { ACC } from './enum'

export const router = AutoRouter({})

const True = true as const
const False = false as const

router
  .get<IRequest & {
    params: { bar: string }
    query: { baz: string }
  }>('/get/:name', withParams, ({ query, params }) => {
    return {
      message: `Hello, ${query.baz} ${params.bar}!`,
    }
  })
  .post<IRequest & {
    content: { foo: string }
    params: { name: string }
  }>('/post/:name', withContent, ({ content, params }) => {
    if (content.foo === 'error') {
      return {
        success: False,
        code: {
          nest: ACC.C2,
        },
      }
    }
    return {
      success: True,
      message: `Hello, ${content.foo} ${params.name}!`,
    }
  })
