# NodeJs

:::info 简介
读取《Node 深入浅出》后的总结  
NodeJs 是一个基于Chrome V8引擎的JavaScript运行环境
1. 非阻塞异步I/O
2. 事件驱动/回调函数
3. 单线程
4. 跨平台
:::

## 模块机制
### commonJS模块化
```js
// math.js
exports.add = function () {
  console.log("hello");
};

// or

module.exports = {
  add: function () {
    console.log("hello");
  },
};

// index.js
var math = require("./math");
math.add();
```
### 模块的实现
1. **路径分析**
   1. 通过文件路径或名字获取模块的引用
   2. 优先从缓存加载（之前 require 的模块会被缓存，再次引入优先加载缓存模块）
   3. **Node核心模块**: `require('http')`，此为 Node 内置模块
   4. **node_modules模块**: `require('build-zip')`，Node将试图去当前目录的node_modules文件夹里搜索
   5. **文件模块**: `require('/home/base/my_mod')` or `require('./my_mod')`
      1. require导入文件时，如果不添加后缀名，则会按照.js，.json，.node等的顺序添加
   6. **文件目录模块**: `require('./folder')`
      1. 如果folder目录里没有包含package.json文件
      2. Node会假设默认主文件为index.js，即会加载index.js，如果index.js也不存在， 那么加载将失败
   7. **自动缓存已载入模块**: 对于已加载的模块Node会缓存下来
```js
// math.js
console.log("init");    // 只执行一次
module.exports = {
  add: function () {
    console.log("hello");
  },
};

// index.js
var math = require("./math");
var math1 = require("./math");
math.add();
math1.add();
```
![o.png](./assets/node_module_cache.png)


2. **文件定位**
   1. **文件路径分析**
      1. 文件二次引入不需要路径分析，读取缓存
      2. 文件名不包含扩展名的情况下，Node会按照`.js`、`.json`、`.node`的次序补充扩展名，依次尝试
      3. 在尝试的过程中，还会调用fs模块同步阻塞地判断文件是否存在，Node是单线程的，所以这里会引起性能问题，因此对`.node`和`.json`等文件，需要在require时加上`扩展名`
   2. **目录分析和包**
      1. 在require()通过分析文件定位分析，可能没有对应文件，确定位到一个目录，此时Node会将目录当做一个包来处理
      2. 首先，Node会在该目录查找package.json通过JSON.parse()即系包描述对象，从中取出main属性指定的文件名进行定位，如果文件名缺少扩展名，又会进行补充扩展名分析步骤
      3. 如果main属性指定错误，或者根本没有pakeage.json文件，Node会默认将index当做模块文件名，然后依次查找index.js、.json、.node
3. **模块编译**
   1. 每个文件模块都是一个对象
      1. `.js`: 通过fs模块同步读取文件后编译执行。
      2. `.node`: 这是C/C++编写的扩展文件，通过dlopen()方法加载最后编译生成的文件
      3. `.json`: 同过fs模块同步读取文件后，用JSON.pares()解析返回结果
      4. `其他扩展名文件`: ，都当作.js文件载入
   2. 每个编译成功的模块都会将文件路径作为索引缓存在Module._cahce对象上，以提高二次引入的性能
    3. Node对每个模块文件包装了一层函数，进行作用域隔离，因此模块中会有`以下参数存在`
    ```js
    (function (exports, require, module, __filename, __dirname) {
       var math = require(‘math‘);
       exports.area = function(radius) {
          return Math.PI * radius * radius;
       }
    })
    ```
## 非阻塞I/O
1. **阻塞I/O**
   1. 一定会等到系统内核层面完成所有操作后，调用才结束
   2. 以读取磁盘上的一段文件为例，系统内核在完成磁盘寻道、读取数据、复制数据到内存中之后，这个调用才结束
   3. 阻塞I/O造成CPU等待I/O，浪费等待时间，CPU的处理能力不能得到充分利用

2. **非阻塞I/O**
   1. 内核在进行 I/O 读写函数后，立即返回
   2. 非阻塞I/O返回之后，CPU的时间片可以用来处理其他事务，此时性能提升是明显的
   3. 由于完整的I/O并没有完成，立即返回的只是当前调用的状态，并不是业务层期望的数据
   4. 要获取完整的数据，应用程序需要重复调用I/O操作来确认是否完成
   5. 这种重复调用判断操作是否完成的技术叫轮询
   6. 等待完成后，将立即执行返回的回调函数
    ![o.png](./assets/continue_io.png)

`非阻塞I/O`只返回状态，需要通过重复请求轮询操作判断数据是否返回完成
## 异步I/O
![o.png](./assets/async.png)

事件循环、观察者、请求对象、I/O线程池这四者共同构成了Node异步I/O模型的基本要素

## 非I/O的异步API
- setTimeout

![o.png](./assets/settime.png)

- setInterval
  - 循环的调用定时器
  - 定时器性能消耗较大，使用的是红黑树

- process.nextTick()
  - 主线程事件循环进行一次完整的行程时，称为一个滴答
  - 将回调函数传入后，会在下一个事件循环之前调用该函数

- setImmediate
  - 功能和process.nextTick()相同作用
  - 差别
    - setImmediate: 属于check观察者
    - process.nexTick: 属于idle观察者
    - 在每一个轮循环检查中，idle观察者 先于 I/O观察者，I/O观察者 先于 check观察者
## 事件驱动
- 通过主循环 + 事件触发的方式来运行程序

![o.png](./assets/event_loop.png)
