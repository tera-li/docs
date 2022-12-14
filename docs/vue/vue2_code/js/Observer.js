import { Dep } from "./Dep.js";
/**
 * - 把data中的属性，进行数据劫持，转换成响应式数据
 * - 如果data中的某个属性也是对象，把该属性转换成响应式数据
 * - 数据变化的时候，发送通知
 *
 * 方法：
 * - walk(data)    - 遍历data属性，调用defineReactive将数据转换成getter/setter
 * - defineReactive(data, key, value)    - 将数据转换成getter/setter
 *
 */
export class Observer {
  constructor(data) {
    this.walk(data);
  }
  // 遍历data转为响应式
  walk(data) {
    if (typeof data === "object") {
      // 遍历data转为响应式
      Object.keys(data).forEach((key) => {
        this.defineReactive(data, key, data[key]);
      });
    }
  }
  // 将data中的属性转为getter/setter
  defineReactive(data, key, value) {
    // 检测属性值是否是对象，是对象的话，继续将对象转换为响应式的
    this.walk(value);
    // 创建Dep对象 给每个data添加一个观察者
    let dep = new Dep();
    const that = this;
    Object.defineProperty(data, key, {
      enumerable: true,
      configurable: true,
      get() {
        console.log(Dep.target);
        // 在这里添加观察者对象Dep.target表示观察者
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
        // 赋值以后检查属性是否是对象，是对象则将属性转换为响应式的
        that.walk(newValue);
        // 数据变化后通过Dep发送通知，触发watcher的update方法
        dep.notify();
      },
    });
  }
}
