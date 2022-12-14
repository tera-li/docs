/**
 * Vue 实例
 *
 */
class Vue {
  constructor(options) {
    // 将Vue实例挂载到el元素上
    this.$el = document.querySelector(options.el);
    // 获取绑定data数据
    this.$data = options.data;
    // 对data所有数据进行递归劫持
    new Observer(this.$data);
    // 在Vue实例对象上挂载data的所有属性
    this._proxyData(this.$data);
    // 传入Vue实例，编译解析模板
    new Compiler(this);
    console.log(this);
  }
  // 在Vue实例对象上挂载data的所有属性
  _proxyData(data) {
    // 遍历data对象的所有属性，进行数据劫持，挂载到Vue实例根上
    Object.keys(data).forEach((key) => {
      Object.defineProperty(this, key, {
        enumerable: true,
        configurable: true,
        get() {
          return data[key];
        },
        set(newValue) {
          if (newValue === data[key]) {
            return;
          }
          data[key] = newValue;
        },
      });
    });
  }
}
