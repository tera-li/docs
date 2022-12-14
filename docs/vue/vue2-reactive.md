# Vue2 Reactive
![vue2_reactive_pattern.png](./assets/vue2_reactive_pattern.png)

:::info 简介
**Vue2 响应式基本流程：**  
1. Vue实例创建 -> Observer 对实例中 Data 遍历使用 Object.defineProperty 进行数据劫持，并使用 getter 和 setter 获取监听
2. Vue Template or Render 进行编译 -> 编译中遇到 Model变量 的引用 -> 创建 Watcher观察者 -> 并通过 Object.defineProperty 中的 getter 向 Dep发布者 添加观察者 -> 最后编译完成，创建 View层  
3. View层 or Model层 的数据变化 -> 会被 Object.defineProperty 监听到变化 -> 此时 Dep 进行遍历 Watcher 进行通知 -> Watcher 内部通过 newValue和oldValue 的比较来更新 View层
:::
## Dep
## Observer
## Watcher
## Compiler
## Vue
