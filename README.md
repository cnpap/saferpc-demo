## saferpc 用例

这个项目用于展示如何使用 saferpc。

### 安装

首先是下载并安装本项目。

```shell
git clone https://github.com/cnpap/saferpc-demo.git
cd saferpc-demo
pnpm install
```

二进制下载地址

| 平台            | 下载地址                                                       |
|---------------|------------------------------------------------------------|
| Windows       | [saferpc.exe](https://airco.cc/bin/win/saferpc-0.0.13.exe) |
| Linux         | [saferpc](https://airco.cc/bin/linux/saferpc-0.0.13)                                         |
| Linux - arm64 | [saferpc](https://airco.cc/bin/linux-arm64/saferpc-0.0.13)                                                |
| MacOS         | [saferpc](https://airco.cc/bin/mac/saferpc-0.0.13)                                                |
| MacOS - arm64 | [saferpc](https://airco.cc/bin/mac-arm64/saferpc-0.0.13)                                                |
|--|--|

下载二进制文件并重命名为 `saferpc`，然后将其放到系统环境变量。

### 使用

1. 获取 typerpc 的 ts 类型文件

```shell
saferpc gen-type
```

2. 分析代码 或者 生成代码

```shell
saferpc
```
![exec.gif](public%2Fexec.gif)

> 需要注意的是，配置文件中所需提供的路径都为绝对路径。
> 云端版本正在开发，当前版本为本地版本。 文档可以关注 [类型文件](./saferpc.js) 和 [配置用例](./saferpc.js)。

---

### 本地版本为免费试用阶段，如果想要使用云端版本，请联系我们。

云端版本将会提供更多功能，包括但不限于

#### 配置管理

可以配置 开发、生产、测试 等多个环境，可以在不同环境中发布不同的配置。

#### 跨终端

本地版本只有单机试用，云端版本可以跨终端甚至团队协同使用。

#### openapi 支持

基于 openapi 可以将 saferpc 生成出来的路由信息同步到 apifox、postman、其他语言调用等。

#### 更多功能

包括但不限于，功能依赖视图，自动化测试，自动化部署等，将会逐步迭代。

### 联系我

![img.png](public%2Fimg.png)
