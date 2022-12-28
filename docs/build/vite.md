# Vite
## Vite 基本原理

Webpack 会找到 entry 指定的入口文件作为打包入口  
Webpack 只能理解 JavaScript 和 JSON 文件  
- 根据入口文件代码中的 import 或 require 的语句解析，推断出来模块依赖，并解析每个模块的资源依赖，形成依赖树
- 递归依赖树，找到每个节点对应的资源文件，然后根据每个模块的 rules 匹配文件并执行对应的loaders，将进行资源加载转换，把最后的转换结果进行打包


## Loader
Loader: 用于资源加载并处理各种语言的转换/编译（例如：将不同语言转换为 JavaScript）
- 解析原始文件 -> 匹配rule,loader 编译,代码转换 -> loader 将处理完成后的结果, 交给 webpack进行打包 -> 输出最终文件 bundle.js

:::info 自定义loader
```js
```
:::

## Plugin
Plugin: 用于资源加载以外的其他打包/压缩/文件处理等功能
- plugin通过 webpack 底层的特性来处理相应的钩子，在钩子回调中处理相关任务
- apply 方法有一个参数 compiler，通过 compiler 可以给 webpack 编译打包过程中添加钩子


:::info 自定义plugin
```js
```
:::
## Directory
:::info directory
```js
├─ dist                 # 打包dist
├─ public               # 静态公共资源
│  ├─ index.html        # HTML
├─ loaders              # 自定义loader
│  ├─ custom-loader.js  # custom-loader.js
├─ plugins              # 自定义plugin
│  ├─ custom-plugin.js  # custom-plugin.js
├─ src                  # 源文件
│  ├─ custom.custom     # 未知文件，通过自定义loader进行解析
│  ├─ index.js          # index.js     入口
│  ├─ two-entry.js      # two-entry.js 入口
│  ├─ vue_main.js       # vue_main.js  入口
├─ webpack.config.js    # webpack config
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