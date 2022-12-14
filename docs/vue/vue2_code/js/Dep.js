// 发布者
export class Dep {
  constructor() {
    // 记录所有的订阅者
    this.subs = [];
  }
  // 添加订阅者
  addSub(sub) {
    this.subs.push(sub);
  }
  // 发布通知
  notify() {
    this.subs.forEach((sub) => {
      sub.update();
    });
  }
}
