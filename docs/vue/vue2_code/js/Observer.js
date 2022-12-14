/**
 * Observer 数据劫持
 *
 */
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
