# Vue2 Reactive
![vue2_reactive_pattern.png](./assets/vue2_reactive_pattern.png)

:::info 简介
**Vue2 响应式基本流程：**  
1. Vue实例创建 -> Observer 对实例中 Data 遍历使用 Object.defineProperty 进行数据劫持，并使用 getter 和 setter 获取监听
2. Vue Template or Render 进行编译 -> 编译中遇到 Model变量 的引用 -> 创建 Watcher观察者 -> 并通过 Object.defineProperty 中的 getter 向 Dep发布者 添加观察者 -> 最后编译完成，创建 View层  
3. View层 or Model层 的数据变化 -> 会被 Object.defineProperty 监听到变化 -> 此时 Dep 进行遍历 Watcher 进行通知 -> Watcher 内部通过 newValue和oldValue 的比较来更新 View层
:::
## Dep
:::info 发布者
用于存储 Watcher观察者，以及通知 Watcher观察者 数据已变化
```js
class Dep {
    constructor() {
        // 存储所有Watcher
        this.subs = [];
    }
    // 添加Watcher
    addSub(sub) {
        this.subs.push(sub);
    }
    // 对每个Watcher发布通知
    notify() {
        this.subs.forEach((sub) => {
            sub.update();
        });
    }
}
```
:::
## Observer
:::info 观察者
观察者用于对 data对象 中的数据进行数据劫持  
并在 Compiler编译时，添加 Watcher观察者，以便后续数据变化进行通知
```js
class Observer {
  constructor(data) {
    // 触发数据劫持
    this.transitionData(data);
  }
  // 遍历data进行数据劫持
  transitionData(data) {
    // 检测属性值是否是对象，如果是则继续将对象转换为响应式的
    if (typeof data === "object" && !Array.isArray(data)) {
      Object.keys(data).forEach((key) => {
        this.defineReactive(data, key, data[key]);
      });
    }
  }
  // 将data中的属性注册为响应式
  defineReactive(data, key, value) {
    // 递归注册属性
    this.transitionData(value);
    // 创建Dep对象 给每个data添加一个观察者
    let dep = new Dep();
    const that = this;
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        // 当Watcher创建时，会对Dep.target赋值为Watcher实例，并访问Data对应属性
        // 这将触发该get，并往Dep添加Watcher观察者，最后清空Dep.target，返回value
        Dep.target && dep.addSub(Dep.target);
        return value;
      },
      set(newValue) {
        // 若新值等于旧值则返回
        if (newValue == value) {
          return;
        }
        // 向该作用域中value进行更新赋值
        value = newValue;
        // 赋值以后检查属性是否是对象，如果是则继续将对象转换为响应式的
        that.transitionData(newValue);
        // 数据变化后通过Dep发送通知
        // 这将循环Watcher对比vm[key] !== oldValue，如果成立则触发update方法
        dep.notify();
      },
    });
  }
}
```
:::
## Watcher
:::info 发布者
用于存储 vue实例、响应属性、回调函数，以及缓存响应属性值，并将自身实例对象存储到 Dep发布者中
update函数 比较新旧值，并调用 回调函数 传入新值
```js
class Watcher {
  constructor(vm, key, cb) {
    // 获取vm
    this.vm = vm;
    // 获取data中的属性
    this.key = key;
    // 回调函数（更新视图的具体方法）
    this.cb = cb;
    // 将watcher对象挂载到Dep.target
    Dep.target = this;
    // 访问缓存旧值，同时触发数据劫持中对应属性的get，在Dep中存储Watcher实例，用来后续通知数据更新
    this.oldValue = vm[key];
    // get值之后，清除Dep中的实例
    Dep.target = null;
  }
  // 通过Dep通知调用，更新视图
  update() {
    // 调用update的时候，获取新值
    let newValue = this.vm[this.key];
    // 新值和旧值相同则不更新
    if (newValue === this.oldValue) return;
    this.oldValue = newValue;
    // 调用具体的更新方法
    this.cb(newValue);
  }
}
```
:::
## Compiler
:::info 发布者
用于存储 Watcher观察者，以及通知 Watcher观察者 数据已变化
:::
## Vue
:::info 发布者
用于存储 Watcher观察者，以及通知 Watcher观察者 数据已变化
:::
