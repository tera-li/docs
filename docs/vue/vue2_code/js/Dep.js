// 发布者
class Dep {
  constructor() {
    // 存储所有观察者
    this.subs = [];
  }
  // 添加观察者
  addSub(sub) {
    this.subs.push(sub);
  }
  // 对每个观察者发布通知
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
