**Single Thread**
::: v-pre
`表示一个包含 DOM 文档的窗口，其 document 属性指向窗口中载入的 DOM 文档。`
:::

##
**事件循环: 宏任务和微任务**

**主线程 (JS引擎线程)**

**浏览器存在很多线程 (事件触发线程互相操作)**

**GUI渲染线程 (常驻线程)**

渲染浏览器界面，解析html，css，构建dom树，布局和绘制

该线程与JS线程互斥，当js引擎执行时，该引擎会被挂起，会保存在一个队列中等到JS引擎空闲时立即执行

**JS引擎线程 (常驻线程) (JS内核)**

负责处理JavaScript脚本程序 (例如V8引擎)，解析JavaScript脚本，运行代码

一个页面中只有一个JS线程在运行JS程序

如果JS引擎运行时间过长，会造成阻塞页面加载，影响GUI渲染线程页面加载

当JS引擎修改DOM的时候，如果同时运行GUI引擎，会造成页面数据不一致

因此GUI更新会放到任务队列中，等JS引擎空闲时立即执行

**浏览器事件线程 (onclick) (常驻线程)**

该事件归属于浏览器，用来控制事件循环

当JS引擎遇到事件时 (不是首先同步处理的事件)，Dom Event事件等，会将这些任务添加到该事件线程中

当事件符合触发条件被触发时 (如点击，移动等操作)，该线程会把事件添加到任务队列末尾，等待JS引擎的处理

由于JS时单线程，所以任务队列需要等待JS引擎依次处理

**定时器触发线程 (setTimeout和setInterval)**

定时器不是由JS引擎计数的，因为JS是单线程，如果处于阻塞状态就会影响计时的准确

所以当计时完毕后，会添加到任务队列中，等待JS引擎执行

注意！！！

如果JS引擎处理其他任务超过定时器时间

如定时器5000ms，循环事件用了6000ms，就算定时器线程在5000ms的时候把执行函数放入到事件队列中，也必须等循环结束后才能调用，**这就造成实际是6秒的时候才触发**

**异步http请求线程**

当XMLHttpRequest连接后，浏览器会新开一个线程请求

当检测到状态变更时 (onreadystateChange = function () {})

如果设有回调函数，该异步线程就**产生状态变更事件**，将这个回调函数放入事件队列中，再由JS引擎执行

**Event loop事件轮询处理**

JS引擎先处理同步代码 (宏任务)，微任务和定时器等异步代码放入对应线程中等待触发

当微任务和异步代码符合触发条件，将会把回调函数放入任务队列末尾等待JS引擎执行

当用户操作event事件触发时，事件触发线程会将对应事件函数放入任务队列末尾

宏任务->微任务->GUI渲染引擎线程->定时器线程放入执行函数

 (同步任务->微任务->定时器任务)

事件轮询依次进行

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.009.png)

queueMicrotask: 创建一个**微任务**

promise: **微任务**

MutationObserver: DOM变动管擦器 (**微任务**)

setTimeout: **异步任务**

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.010.png)

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.011.png)

浏览器进程

一个页面相当于一个进程，一个进程有多个线程互相配合

栈

**后进先出，先进后出**

**数据存储只能从顶部逐个存入，取出时也需从顶部逐个取出**

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.012.png)

堆

**无序的key-value (键值对)存储方式**

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.013.png)

队列

**先进先出**

**数据存储从队尾插入，从队头取出**

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.014.png)

宏任务

JS同步任务

微任务

JS微任务

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.015.png)

**事件委托**

**利用事件冒泡，指定一个事件处理程序，管理一系列的所有事件**

 (给父元素定义事件处理程序，子元素的所有相关事件都由父元素来处理)

JavaScript存在事件冒泡，子元素的事件，会依次冒泡到document，其中经过的所有元素 (如果存在触发条件，则会触发)

**普通绑定事件**: 当子元素存在过多，如果给每个元素绑定相同事件，**则会增加dom操作，消耗性能** (如，循环子元素，为每个子元素增加onclick事件)

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.016.png)

**事件委托**: 因为事件始终会冒泡到父元素，而且**父元素会获取到子元素所触发的event相关属性，则只需要对父元素进行相关事件的委托，即可处理触发事件**

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.017.png)

对父元素UL进行绑定事件，当点击子元素时，会将点击的中li中的event的相关属性进行冒泡传递给UL

只有当event.target为li元素时，才会通过对事件相关属性的判断，触发对应li元素事件的innerHTML

另一要点在于，循环子元素从而绑定事件，**重点在于事件绑定之后动态append等添加的元素不会绑定事件**，需要在添加子元素后，**再次循环绑定事件才会有用**

而事件委托，只需要对父元素进行绑定对应事件，**不管之后添加多少元素**，**只要是该元素的子元素**，当父元素中的某个子元素触发事件时，事件冒泡就会将对应的event事件传递给父元素的事件函数中，便可进行之后对应操作，从而极大减少Dom操作

**onmousedown、onmousemove、onmouseup**

实现drag拖拽

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.018.png)

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.019.png)
```
<!DOCTYPE html>

<html>

<head>

<meta charset="utf-8">

<title></title>

<style type="text/css">

body {

padding: 0;

margin: 0;

}

#cail {

width: 100px;

height: 100px;

background-color: aqua;

border-radius: 50%;

display: inline-block;

/\* margin-top: 500px; \*/

}

</style>

</head>

<body>

<div id="cail"></div>

<script type="text/javascript">

let cail = document.querySelector('#cail')

cail.onmousedown = function (event) {

// 通过absolute脱离文档流

cail.style.position = 'absolute'

cail.style.zIndex = 1000

```
getBoundingClientRect返回该元素的大小，以及该元素窗口位置 (边框距离窗口的位置)

当点击时left为0，clientX为100，移动到200pageX，那么就距离left100px、

当点击时top为100，clienty为200，移动到400pagey，那么就距离top300px

```

// 计算点击相对于球的偏移

let shiftX = event.clientX - cail.getBoundingClientRect().left

let shiftY = event.clientY - cail.getBoundingClientRect().top

// 移动时，计算移动到的x坐标 - 元素x距离边距的偏移

// 移动时，计算移动到的y坐标 - 元素y距离边距的偏移

function move(pageX,pageY) {

cail.style.left = pageX - shiftX + 'px'

cail.style.top = pageY - shiftY + 'px'

}

function myMove(e) {

move(e.pageX, e.pageY)

}

move(event.pageX, event.pageY)

document.addEventListener('mousemove',myMove)

cail.onmouseup = function() {

document.removeEventListener('mousemove',myMove)

}

// 取消cail开始拖拽的默认事件

cail.ondragstart = function() {

return false

}

}

</script>

</body>

</html>
```

**坐标事件**

document.elementFromPoint(x,y)

返回指定坐标最顶层的元素

**DOMContentLoaded，load，beforeunload，unload**

![clipboard.png](./assets/Aspose.Words.18b3d0a4-4ec0-4714-a2e6-3aef21065cd3.008.png)

DOMContentLoaded

DOM就绪，可以查找DOM节点，并初始化接口

**async脚本会在domcontentloaded之前或之后运行**

因为domcontentloaded只关注html是否解析完毕，而不关注async脚本加载执行

**async在html解析完之前下载完成，会直接执行**

**async在html解析完之后下载完成，会直接执行**

**defer脚本会在domcontentloaded之前运行**

会在html解析完毕后执行，执行完成触发domcontentloaded

**defer在html解析完之前下载完成，会等待html解析完后执行**

**defer在html解析完之后下载完成，会直接执行**

load

外部资源已完成，样式已被应用，图片大小也已知

beforeunload

用户正在离开，可以检测用户是否保存了更改，并询问他是否确定是否要离开

![clipboard.png](./assets/Aspose.Words.18b3d0a4-4ec0-4714-a2e6-3aef21065cd3.009.png)

![clipboard.png](./assets/Aspose.Words.18b3d0a4-4ec0-4714-a2e6-3aef21065cd3.010.png)

unload

用户几乎离开，但仍然可以启动一些操作，例如发送统计数据

readyState (文档状态)

loading-----文档正在被加载

interactive-----文档全部被读取

complete-----文档全部被读取，所有资源 (图片)都已加载完成
