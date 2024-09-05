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

2. 需要注意的是，配置文件中所需提供的路径都为绝对路径。

云端版本正在开发，当前版本为本地版本。
文档可以关注 [类型文件](./saferpc.js) 和 [配置用例](./saferpc.js)。
