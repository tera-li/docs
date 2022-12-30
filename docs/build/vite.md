# Vite

在大型项目中 冷启动开发服务器 和 热更新文件修改时的这些编译问题造成的等候时间过长  
Vite 针对这些问题，利用生态系统中的新进展解决上述问题：原生支持 ES 模块

## 冷启动更快
Webpack 等基于打包器的方式启动必须优先抓取文件,解析依赖,编译文件,最后输出构建你的整个应用，然后才能提供开发服务  

Vite首先会区分 **依赖** 和 **源码**，来缩短冷启动时间  
- **依赖** 大多为在开发时不会变动的纯 JavaScript。一些较大的依赖（例如有上百个模块的组件库）处理的代价也很高。依赖也通常会存在多种模块化格式（例如 ESM 或者 CommonJS）。Vite 将会使用 esbuild 预构建依赖，将依赖项转换为 ESM。esbuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍
- **源码** 通常包含一些并非直接是 JavaScript 的文件，需要转换（例如 JSX，CSS 或者 Vue/Svelte 组件），时常会被编辑。Vite 以 原生 ESM 方式请求提供源码

## 热更新更快
- 基于打包器启动时，重建整个包的效率很低。虽然支持 HMR，但是源码需要在内存重新中解析,转换,编译,再打包替换更新部分
- Vite HMR 是在原生 ESM 上执行的。与基于打包器有明显区别，因为通过精确找到更改的模块进行请求更新即可

## esbuild
:::info 预构建
- 将非 ESM 规范的代码转换为符合 ESM 规范的代码
- 将第三方依赖内部的多个文件合并为一个，减少 http 请求数量  
- 上面说到的区分 **依赖** 和 **源码**，来提高冷启动时间就是使用 esbuild 完成的  

```js
// 区分 'vue' 是第三方依赖，'./App.vue' 源码
import react from 'vue';
import App from './App.vue';
```

- 解析区分后，则调用 esbuild 合并、转换第三方依赖
- 构建完成后，会将第三方依赖在 /node_modules/.vite/deps 进行强缓存
:::

:::info 内容转换
**源码转换**是在 dev server 启动以后在**首屏渲染**期间执行的，这将导致**首屏渲染**过慢  
在首屏期间请求比如 .vue, .less文件后，vite会对文件解析,加载,转换源码并二次构建输出文件  
对比第三方依赖会进行**强缓存**，而对于源码文件会进行**协商缓存**  

```js
// 如果 node_modules 中存在对应依赖，而在源码文件中未解析到的引入，可以开启强制构建依赖
{
    // 依赖构建优化
    optimizeDeps: {
        include: ["vue"],
    }
}
```
:::

## rollup
- vite 使用 rollup 进行打包，通过build.rollupOptions 配置入口及相关打包配置  
- rollup 以 ESM 标准为目标的构建工具  
- rollup 具有 tree-shaking，对所用的代码进行静态分析，并将未实际用到的代码剔除  
- Vite plugin 基于 rollup 插件

```js
{
    // 配置自定义底层的 Rollup 打包配置
    rollupOptions: {
      // 打包时跳过指定modules，引入的外部 externals
      external: ["vue"],
      // build 入口配置
      input: {
        //可以配置多个，表示多入口
        index: path.resolve(__dirname, "index.html"),
        project: path.resolve(__dirname, "custom.html"),
      },
      output: {
        // chunkFileNames:'[name]-[hash].js',
        // entryFileNames:"[name]-[hash].js",
      },
    },
}
```

## Directory
:::info directory
```js
├─ dist                 # 打包dist
├─ public               # 静态公共资源
│  ├─ vite.svg          # HTML
├─ plugins              # 自定义plugin
│  ├─ custom-plugin.js  # custom-plugin.js
├─ src                  # 源文件
│  ├─ custom.custom     # 未知文件，通过自定义plugin进行解析
│  ├─ main.ts           # main.ts
│  ├─ custom-main.ts    # custom-main.ts
├─ index.html           # index    入口
├─ custom.html          # custom   入口
├─ vite.config.ts       # vite config
```
:::
## Package.json
:::info package.json
```json
```
:::
## Vite.config.ts
:::info vite.config.ts
```js
```
:::
参考链接1⃣️：https://cn.vitejs.dev  
参考链接2⃣️：https://github.com/hljinjiang/vite-config  