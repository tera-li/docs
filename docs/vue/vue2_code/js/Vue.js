class Vue {
  constructor(options) {
    // 获取传入Vue实例的对象，默认为空对象
    this.$options = options || {};
    // 获取html元素
    this.$el = document.querySelector(options.el);
    // 获取data数据
    this.$data = options.data;
    // 进行数据劫持
    new Observer(this.$data);
    this._proxyData(this.$data);
    // 传入Vue实例，编译
    new Compiler(this);
  }
  // 把data中的属性注册到Vue
  _proxyData(data) {
    // 遍历data对象的所有属性 进行数据劫持
    Object.keys(data).forEach((key) => {
      // 把data中的属性，转换成vm的getter/setter
      Object.defineProperty(this, key, {
        // 可枚举（可遍历）
        enumerable: true,
        // 可配置（可以使用delete删除，可以通过defineProperty重新定义）
        configurable: true,
        // 获取值的时候执行
        get() {
          return data[key];
        },
        // 设置值的时候执行
        set(newValue) {
          // 若新值等于旧值则返回
          if (newValue === data[key]) {
            return;
          }
          // 如新值不等于旧值则赋值
          data[key] = newValue;
        },
      });
    });
  }
}
