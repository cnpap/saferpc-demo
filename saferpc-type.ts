/**
 * 被分析的文件，一般是路由文件，如果是 nestjs 则是控制器文件
 */
export interface Entry {
  /**
   * 项目路由前缀
   */
  baseUrl: string
  /**
   * 文件路径
   */
  entry: string
}

/**
 * 一个 git 仓库可能同时有多组服务，每个 SafeRpcRoot 对应一组服务
 */
export interface SafeRpcRoot {
  /**
   * 服务名称，例如 admin、order，如果有另外一个项目依赖本仓库的其中一组服务，则会将该名称设定为 required
   */
  name?: string
  /**
   * 这一组服务中，有哪些入口文件
   */
  entries: (string | Entry)[]
  /**
   * 这一组服务，有哪些要用于共享的代码，例如我们可能有一些验证规则与前端通用
   */
  shares: Record<string, string>
  /**
   * 🥶 暂时未启用
   */
  tsconfig?: string
  /**
   * 这组服务，所使用的是哪个框架
   *
   * nestjs 属于实验性支持，关于 koa、express 等，包括 nestjs 的完整支持将于 2024年9月9号 前完成
   */
  framework: 'hono' | 'itty' | 'nest'
}

/**
 * 完整的配置类型
 */
export interface SafeRpcConfig {
  /**
   * 分析入口，一个仓库中的多组服务，一般项目中只有一组服务
   */
  roots: SafeRpcRoot[]
  /**
   * tsconfig 指定在分析代码时以哪个 tsconfig 为准，默认为根目录下的 tsconfig.json
   */
  tsconfig: string
  /**
   * 设置依赖后应该生成什么类型的文件，当前本地版本只能生成 axios 调用。
   *
   * 在未来将会支持 openapi、多语言之间的调用 等。
   */
  requiredType: 'axios'
  /**
   * 设置依赖，是将某组服务相关的调用代码生成到指定位置
   *
   * key 为服务名称，value 为文件路径
   */
  required?: Record<string, string>
}
