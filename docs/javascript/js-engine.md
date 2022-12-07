# JavaScript Engine
::: v-pre
`一个页面中的所有 JavaScript 脚本，以及呈现布局，回流，和垃圾回收都在一个线程中运行。`  
`本节总结由 JavaScript 引擎所环绕的相关浏览器知识点`
:::

::: info 进程和线程
`进程：CPU 进行资源分配的基本单位`  
`线程：CPU 调度的最小单位，建立在进程的基础上运行的单位，共享进程的内存空间`  
`多进程：多个进程建立运用运行，进程之间互不影响`  
`多线程：多个线程建立工作，可互相通信，共同完成任务`
:::
## 页面常用线程
::: info 1. GUI渲染线程 (Render)
`渲染浏览器界面，解析HTML，CSS，构建dom树，布局和绘制`  
`如当JS引擎添加DOM元素时，会调用渲染引擎，创建一个JS引擎所指定的DOM元素，包括相应的attribute`  
`该线程与JS线程互斥，当JS引擎执行时，该线程会被挂起，会保存在队列中等到JS引擎空闲时立即执行`
:::

::: info 2. JS引擎线程 (JS内核)
`负责处理 JavaScript 脚本程序 (例如V8引擎)，解析 JavaScript 脚本，运行代码`  
`一个页面中只有一个JS线程在运行JS程序`  
`如果JS引擎运行时间过长，会造成阻塞页面加载，影响GUI渲染线程页面加载`  
`当JS引擎修改DOM的时候，如果同时运行GUI引擎，会造成页面数据不一致`  
`因此GUI更新渲染会先记录JS脚本对DOM的操作，把执行任务放到任务队列中，等JS引擎空闲时立即执行`  
`JS引擎是基于事件驱动单线程执行，JS线程一直在等待任务列表中的任务到来`  
`而JS线程与GUI渲染线程是互斥的，当JS线程执行时，渲染线程呈挂起状态，只有当JS线程空闲时渲染线程才会执行。`
:::

::: info 3. 浏览器事件线程 (Event)
`该事件归属于浏览器，用来控制处理事件`
`当JS引擎遇到事件时 (不是首先同步处理的事件)，Dom Event事件等，会将这些任务添加到该事件线程中`
`当事件符合触发条件被触发时 (如点击，移动等操作)，该线程会把事件添加到任务队列末尾，等待JS引擎的处理`
`由于JS时单线程，所以任务队列需要等待JS引擎依次处理`
:::

::: info 4. 定时器触发线程 (setTimeout,setInterval)
`定时器不是由JS引擎计数的，因为JS是单线程，如果处于阻塞状态就会影响计时的准确，所以会在其他线程运行`  
`当计时完毕后，会添加到任务队列中，等待JS引擎执行`  
`注意！！！`  
`如果JS引擎处理其他任务超过定时器时间`  
`如定时器5000ms，循环事件用了10000ms，就算定时器线程在5000ms的时候把执行函数放入到事件队列中，也必须等循环结束后才能调用，这就造成实际是10秒之后才触发`
:::

::: info 5. HTTP异步线程 (Ajax,Fetch)
`当 XMLHttpRequest 创建连接后，浏览器会新开一个线程请求`  
`该异步线程产生状态变更事件时，当检测到状态变更时 (onreadystateChange = function () {})`  
`将这个回调函数放入事件队列中，再由JS引擎执行`
:::
## 内存
::: info 简介
`在 JavaScript 中定义的所有内容，引擎会分配内存并在我们不再需要它时释放它`  
`JavaScript 引擎有两个可以存储数据的地方：栈和堆`  
`栈和堆是引擎用于不同目的而创建的两块内存，不同的数据结构`
:::
## 栈
::: info 简介
`属于静态内存分配`  
`静态数据是引擎在编译时知道大小的数据 (String,Number,Boolean,Undefined,Null)`  
`由于引擎知道大小不会更改，因此它将为每个值分配固定数量的内存`  
`在执行之前分配内存的过程称为静态内存分配`
![栈.png](./assets/stack-memory-explained.png)
:::
## 堆
::: info 简介
`属于动态内存分配`  
`存储Object和Function`  
`由于在编译阶段无法得知固定的内存大小，则不会分配固定数量的内存，相反，将根据需要分配更多空间`  
`栈内存中存储的变量值记录的是堆内存地址，指针通过内存地址找到对应的引用对象`
![堆.png](./assets/stack-heap-pointers.png)
:::
**区别**
|      |  栈  |  堆  |
| ---- |  ----  | ----  |
| 存储内容 | 基础数据和堆内存地址  | 对象和函数 |
| 存储大小 | 大小在编译时已知  | 大小在运行时已知 |
| 内存区别 | 分配固定数量的内存  | 动态内存空间 |

## Event Loop
::: info 简介
`解决JavaScript单线程运行时不会阻塞的一种机制，也就是实现异步的原理`  
`Javascript本身是没有异步这一说法的，是由其宿主环境提供的`  

<video height='400' width='100%' controls autoplay loop src="./assets/event-loop.mp4"></video>

`调用脚本和函数时，都会依次添加到 执行栈 顶部，执行完毕后 解释器 会将其从 执行栈 中删除`  
`在执行栈中当解析为 同步任务 则直接运行，若解析为 异步任务 则将放入 Web APIs 中等到触发时机成熟便将任务推送到 Callback Queue，Callback Queue 再推送给 执行栈 依次执行`  

1. **执行栈 (Call Stack)**  
   `JavaScript 代码被解析和执行时所在环境，具有 LIFO(后进先出) 结构`  
   `在 JavaScript 执行之前，会先编译代码，创建执行上下文，压入执行栈中`

2. **Web平台接口 (Web Apis)**  
   `Web 环境所拥有的接口，当执行AjAx、Fetch、setTimeout、DOM、UserHandle操作 等调用时，它们往往不是同步进行的，而是通知 其他线程 进行操作`  
   `当这些外部接口调用 符合一定条件 时，会将对应的 回调函数 或 事件消息 推送到 任务队列 末尾，等待依次放入 执行栈 执行`
   
3. **回调队列 (Callback Queue)**  
   `回调队列 也称为 事件队列，具有 FIFO(先进先出) 结构`  
   `当 Web APIs 有事件触发时，会向 回调队列末尾 推入对应的 脚本 或 函数，回调队列 再依次推入 执行栈 执行`
4. **同步任务和异步任务**
```js
console.log(1)
setTimeout(() => { console.log('setTImeout') }, 0)
console.log(2)

输出: 1 2 setTImeout
```
`以上代码在执行时`  
`同步任务是 1 2 ，在 执行栈 中会依次执行`  
`异步任务是 setTImeout，在 执行栈 解析到后会让 宿主环境(Web接口)进行对应的接口操作，在接口符合条件的情况下再推入 回调队列 末尾`

5. **宏任务和微任务**
```js
console.log(1)
setTimeout(() => { console.log('setTImeout') }, 0)
queueMicrotask(() => { console.log('queueMicrotask') })
console.log(2)

输出: 1 2 queueMicrotask setTImeout
```
`以上代码在执行时`  
`同步任务是 1 2 ，在 执行栈 中会依次执行`  
`异步任务在这里进行了划分 宏任务 和 微任务`  
- 宏任务
  - setTimeout、setInterval、AjAx、Fetch、UserHandle
  - 这些 宏任务 会放入 回调队列 中执行
- 微任务
  - queueMicrotask、Promise.then、MutationObserver
  - 这些 微任务 会放入 微任务队列 中执行

`在 宏任务 执行前，都会先检查 微任务队列，看是否有待执行的 微任务，必先执行 微任务 再执行 宏任务`
:::

## 垃圾回收
::: info 简介
`当我们申明变量、引用对象时，使用结束后应当 释放内存 `  
`就像内存分配一样，JavaScript 引擎也为我们处理这一步，垃圾回收器会处理这个问题`  
`一旦 JavaScript 引擎识别出不再需要给定的变量或函数，它就会释放它占用的内存`  
`这样做的主要问题是，是否仍然需要一些内存是一个无法确定的问题，这意味着不可能有一种算法能够在它过时的那一刻收集所有不再需要的内存`

1. **引用计数**

`当对象的引用计数为0时，垃圾回收就发生了`  
`它实际上是通过在对象头中分配一个空间来保存该对象被引用的次数。如果该对象被其它对象引用，则它的引用计数加一`  
`如果删除对该对象的引用，那么它的引用计数就减一，当该对象的引用计数为0时，那么该对象就会被回收`  
<video height='400' width='100%' controls autoplay loop src="./assets/stack-heap-gc-animation.mp4"></video>

`此算法的问题在于它不考虑循环引用。当一个或多个对象相互引用，但无法再通过代码访问它们时，就会发生这种情况。`
![garbage.png](./assets/reference-cycle.png)
```js
let son = { name: 'John' };
let dad = { name: 'Johnson' }
// 由于两个对象相互引用，因此算法不会释放分配的内存
son.dad = dad;
dad.son = son;
// 手动标记清空以释放内存
son = null;
dad = null;
```

2. **标记清除**

`扫描全局对象，递归查找引用的对象，如果能访问到，就表示活跃，不会被释放`  
`该算法将无法访问的对象标记为垃圾，然后扫描（收集）它们`
![garbage.png](./assets/garbage-collectoion-algorithm.png)
```js
// 函数结束后发现两个对象都无法从根访问，则标记为垃圾清除
function garbage() {
    let son = { name: 'John' };
    let dad = { name: 'Johnson' }

    son.dad = dad;
    dad.son = son;
}
garbage()
```

3. **内存泄漏**
   - **全局变量**  
`变量的不当使用，创建意外的全局变量，导致函数执行完毕后无法销毁。可在使用 "use strict" 开启严格模式避免`
```js
function foo(){
    name = '前端曰'
}
// 其实是把name变量挂载在window对象上
function foo(){
    window.name = '前端曰'
}
// 又或者
function foo(){
    // 其实这里的this就是指向的window对象
    this.name = '前端曰'
}
foo()
```
   - **定时器**  
`定时器的不当使用，定时器中的引用不会被标记清除，因为他仍在使用，在SPA页面中就算离开该页面，定时器也会继续执行`
```js
const object = {};
const intervalId = setInterval(function() {
  doSomething(object);
}, 2000);
```
   - **监听器**  
`监听器使用过后，不再使用应当移除掉`
```js
const element = document.getElementById('button');
const onClick = () => alert('hi');

element.addEventListener('click', onClick);

element.removeEventListener('click', onClick);
element.parentNode.removeChild(element);
```
   - **闭包**  
`内部匿名函数可以访问父级作用域的变量，减少重复调用函数时所造成开辟的内存开销`  
`当closure函数执行完毕后，垃圾回收机制是应当清空函数的所占用的内存的`  
`但是内部return的匿名函数还引用着父级作用域中的变量，则导致无法标记垃圾回收`  
```js
function closure(){
    var min = 10;
    return function(max){
        console.log(min * max);
    }
}
let clo = closure()
clo(10)
clo(100)
clo(1000)
```
- **JavaScript 内存管理 (生命周期)**  
1. 分配需要的内存
2. 使用分配的内存
3. 不需要时，释放内存
:::
