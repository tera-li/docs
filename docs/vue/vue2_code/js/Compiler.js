/**
 * Compiler 编译器
 *
 */

class Compiler {
  constructor(vm) {
    // 获取vm
    this.vm = vm;
    // 获取el
    this.el = vm.$el;
    // 编译模板 渲染视图
    this.compile(this.el);
  }
  // 编译模板渲染视图
  compile(el) {
    // 无el则结束
    if (!el) return;
    // 获取子节点
    const nodes = el.childNodes;
    nodes.forEach((node) => {
      // 判断是否为文本节点
      // 这里只对文本进行判断，需判断其它节点可在此进行扩展
      if (this.isTextNode(node)) {
        this.compileText(node);
      }
    });
  }
  // 编译文本节点
  compileText(node) {
    // 表示任意单个字符，不包含换行符、+ 表示匹配前面多个相同的字符、？表示非贪婪模式，尽可能早的结束查找
    const reg = /\{\{(.+?)\}\}/;
    // 获取节点的文本内容
    var param = node.textContent;
    // 判断是否有 {{}}
    if (reg.test(param)) {
      // 匹配内容，去除前后空格
      const key = reg.exec(param)[1].trim();
      // value赋值给node文本内容
      node.textContent = param.replace(reg, this.vm[key]);
      // 编译模板的时，会创建一个watcher实例，并在内部挂载到Dep上
      // Watcher内部会进行访问存储，并添加到Dep中用来后续通知数据更新
      new Watcher(this.vm, key, (newValue) => {
        // 通过回调函数，更新视图
        node.textContent = newValue;
      });
    }
  }
  // 判断是否是文本节点
  isTextNode(node) {
    return node && node.nodeType === 3;
  }
  // 判断是否是元素节点
  isElementNode(node) {
    return node && node.nodeType === 1;
  }
}
