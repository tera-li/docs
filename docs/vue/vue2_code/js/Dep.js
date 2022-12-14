/**
 * Dep 发布者
 *
 */
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
