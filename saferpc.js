import { resolve } from 'node:path'
import process from 'node:process'
import glob from 'tiny-glob'

const dirname = process.cwd()

/**
 * 下载：
 *
 * mac: https://test-less.oss-cn-hangzhou.aliyuncs.com/bin/saferpc-mac
 * mac-arm: https://test-less.oss-cn-hangzhou.aliyuncs.com/bin/saferpc-mac-arm64
 * win: https://test-less.oss-cn-hangzhou.aliyuncs.com/bin/saferpc.exe
 * linux: https://test-less.oss-cn-hangzhou.aliyuncs.com/bin/saferpc
 *
 * 请将下载的文件添加至环境变量中，如果是 linux or mac 请记得 chmod +x
 *
 * 使用:
 *
 * 只需要在有 saferpc.js 的目录下运行 二进制文件 即可
 *
 * 当前支持的框架有 hono、itty、nest
 */
// noinspection JSUnusedGlobalSymbols
export default async () => {
  /**
   * 因为 nest js controller 并不在同一个文件，所以使用 glob 来收集要分析的文件
   */
  const nestControllers = await glob('packages/nest-demo/**/*controller.ts', {
    absolute: true,
  })
  return {
    /**
     * 当前本地只支持 axios 模式
     */
    requiredType: 'axios',
    /**
     * required 是声明项目依赖的配置，理论来说应该是在 前端 使用。
     *
     * key 是依赖项目名称，value 是要将依赖生成的文件生成到指定位置
     */
    required: {
      'hono-demo': resolve(dirname, 'generated/hono'),
      'itty-demo': resolve(dirname, 'generated/itty'),
      'nest-demo': resolve(dirname, 'generated/nest'),
    },
    /**
     * roots 是声明项目的上级项目的
     * 1. 分析入口文件
     * 2. 共享文件
     */
    roots: [
      {
        /**
         * 项目名称，在之后用在 required 中
         */
        name: 'hono-demo',
        /**
         * 所需要分析的入口文件
         */
        entrys: [
          resolve(dirname, 'packages/hono-demo/src/route.ts'),
        ],
        /**
         * 共享文件，key 是重命名文件名称，value 是当前项目要被分享的文件路径
         */
        shares: {
          'zod-shard.ts': resolve(dirname, 'packages/hono-demo/src/zod-share.ts'),
        },
        /**
         * 框架名称，目前支持 hono、itty、nest
         */
        framework: 'hono',
      },
      {
        name: 'itty-demo',
        entrys: [
          resolve(dirname, 'packages/itty-demo/src/route.ts'),
        ],
        framework: 'itty',
      },
      {
        name: 'nest-demo',
        entrys: nestControllers,
        framework: 'nest',
      },
    ],
  }
}
