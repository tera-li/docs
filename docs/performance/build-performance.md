# Build Performance Optimization

## Cache
:::info 简介
缓存生成的 webpack 模块和 chunk，来改善构建速度。cache 会在开发 模式被设置成 type: 'memory' 而且在 生产 模式 中被禁用
```js
module.exports = {
    cache: true
}
```
:::

## Optimization
:::info 简介
对 build 时的 chunks 做出优化，优化可以手动配置
```js
module.exports = {
  chunkIds: "size",
  // 分包的最小单位是module
  optimization: {
    splitChunks: {
      chunks: "all", // 默认为async，可选all或者initial
      maxSize: 3 * 1024, // 控制包的最大字节数
      automaticNameDelimiter: ".", // 新chunk名称的分隔符，默认为～
      minChunks: 1, // 一个模块被多少个chunk使用时才会进行分包，默认为1
      minSize: 3 * 1024, // 生成 chunk 的最小体积（以 bytes 为单位），默认为 20000
    },
  },
}
```
:::

## Rules
:::info 简介
通过 include 和 exclude 匹配和排除某些目录，减少搜索时间  
该 loader 将 css 分离出去
```js
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /src/, //应用于src目录下
        exclude: /node_modules/, //排除某些文件或目录
        // 从后向前处理，处理完成后交由 webpack打包合并到 bundle.js中
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ]
  },
  plugins: [
    // 分离css
    new MiniCssExtractPlugin({
      filename: "css/[name].css",
    }),
  ]
}
```
:::

## Gzip
:::info 简介
将 build 出来的文件进行 gzip 算法压缩，以在响应时有更小的文件响应
```js
// 定义压缩文件类型
const productionGzipExtensions = ["js", "css"];

// gzip
module.exports = {
  plugins: [
    new CompressionWebpackPlugin({
      filename: "[path][base].gz", // [file] 会被替换成原始资源。[path] 会被替换成原始资源的路径， [query] 会被替换成查询字符串
      algorithm: "gzip", // 压缩成gzip
      // 所有匹配该正则的资源都会被处理。默认值是全部资源。
      test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
      threshold: 1024, //只有大小大于该值的资源会被处理。单位是 bytes。默认值是 0。
      minRatio: 0.8, //只有压缩率小于这个值的资源才会被处理。默认值是 0.8。
    })
  ]
}
```
### nginx
```nginx
gzip_static on;
```
:::

## Externals
:::info 简介
从输出的 bundle 中排除依赖，减少打包时间，还可以引入更小的 CDN min package
```js
module.exports = {
  externals: process.env.NODE_ENV === "development" ? {} : { vue: "Vue" },
}
```
:::

## Prefetch/Preload

:::info 简介
1. prefetch(预获取)：将来某些导航下可能需要的资源
   1. 浏览器会在空闲状态取得这些资源，在取得资源之后搁在HTTP缓存以便于实现将来的请求
2. preload(预加载)：当前导航下可能需要资源

```js
import(/* webpackPrefetch: true */ "./assets/customJs.js");

// output
<link rel="prefetch" as="script" href="login-modal-chunk.js">
```
:::