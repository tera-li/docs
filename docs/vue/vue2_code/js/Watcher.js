/**
 * Watcher 观察者
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
    // 调用具体的更新方法
    this.cb(newValue);
  }
}
