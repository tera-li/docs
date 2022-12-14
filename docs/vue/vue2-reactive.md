# Vue2 Reactive
:::info 简介
1. Vue Template or Render 进行编译 -> 编译中遇到 Model变量 的引用 -> 创建 Watcher观察者 -> 并向 Dep发布者 添加观察者 -> 最后编译完成，创建View  
2. Vue实例创建 -> Observer 对实例中 Data 遍历使用 Object.defineProperty 进行数据劫持，并使用 getter 和 setter 获取监听 -> Observer 对 Data中每个
属性 都创建一个 订阅者 放入 Dep发布者 中存储 -> Dep 监听到
:::
## new Vue 
## Observer
## Dep
## Watcher
## Compile
![vue2_reactive_pattern.png](./assets/vue2_reactive_pattern.png)
