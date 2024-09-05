/// <reference path="./src/saferpc.d.ts" />
import { resolve } from 'node:path'
import process from 'node:process'
import glob from 'tiny-glob'

const dirname = process.cwd()

// eslint-disable-next-line jsdoc/require-returns-description
/** @returns {import('./saferpc-type.ts').SafeRpcConfig} */
// noinspection JSUnusedGlobalSymbols
export default async () => {
  /**
   * 因为 nest js controller 并不在同一个文件，所以使用 glob 来收集要分析的文件
   */
  const nestControllers = await glob('packages/nest-demo/**/*controller.ts', {
    absolute: true,
  })

  return {
    required: {
      'hono-demo': resolve(dirname, 'generated/hono'),
      'itty-demo': resolve(dirname, 'generated/itty'),
      'nest-demo': resolve(dirname, 'generated/nest'),
    },
    roots: [
      {
        name: 'hono-demo',
        entries: [
          resolve(dirname, 'packages/hono-demo/src/route.ts'),
        ],
        shares: {
          'zod-shard.ts': resolve(dirname, 'packages/hono-demo/src/zod-share.ts'),
        },
        framework: 'hono',
      },
      {
        name: 'itty-demo',
        entries: [
          resolve(dirname, 'packages/itty-demo/src/route.ts'),
        ],
        framework: 'itty',
      },
      {
        name: 'nest-demo',
        entries: nestControllers,
        framework: 'nest',
      },
    ],
  }
}
