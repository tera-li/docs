/**
 * - 生成观察者更新视图
 * - 将观察者实例挂载到Dep类中
 * - 数据发生变化的时候，调用回调函数更新视图
 *
 * 属性
 * - vm: vue实例
 * - key: 观察的键
 * - cb: 回调函数
 *
 * 方法：
 * - update()
 *
 */

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
    // 触发数据劫持中对应属性的get，存储watcher实例，并缓存旧值
    this.oldValue = vm[key];
    // get值之后，清除Dep中的实例
    Dep.target = null;
  }
  // 观察者中的方法 用来更新视图
  update() {
    // 调用update的时候，获取新值
    let newValue = this.vm[this.key];
    // 新值和旧值相同则不更新
    if (newValue === this.oldValue) return;
    // 调用具体的更新方法
    this.cb(newValue);
  }
}
