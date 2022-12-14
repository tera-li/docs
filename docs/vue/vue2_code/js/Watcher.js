// 观察者（订阅者）
class Watcher {
  constructor() {
    Dep.target = this;
  }
  update() {
    console.log("update");
  }
}
