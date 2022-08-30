**DOM事件**

**DOM事件允许JavaScript在HTML文档中注册不同事件处理程序**

**事件通常与函数结合使用**

**事件捕获：由外到内进行事件传播（父元素传到子元素）**

**事件冒泡：由内到外进行事件传播（子元素传到父元素），直到根节点**

**DOM（event）事件**

**一、鼠标事件**

onclick：鼠标点击单击触发（单击）

oncontextmenu：鼠标右键打开菜单时触发（右击）

ondblclick：鼠标双击触发（双击）

onmousemove：鼠标移动时触发（移动就会触发）

onmousedown：鼠标被按下（点击按下）

onmouseup：鼠标被松开（点击松开）

onmouseenter：鼠标移动到元素上时触发（鼠标移入）

onmouseleave：鼠标移出元素时触发（鼠标移出）

**onmouseover**：鼠标移动到元素上时触发

（鼠标移入，当有子元素覆盖时，当从父元素移入子元素，会冒泡触发它的父元素事件）

**onmouseout**：鼠标移出某元素（鼠标移出，子元素移入父元素时，会触发事件冒泡）

**二、键盘事件**

onkeydown：键盘按键被按下时

onkeypress：键盘按键被按下并松开

onkeyup：键盘按键被松开

**三、框架/对象（Frame/Object）事件**

onbeforeunload：在即将离开页面（刷新或关闭）时触发

onload：在页面或图像完成加载时触发（页面第一次加载时触发）

onunload：用户退出页面时

onpageshow：在用户浏览网页时触发（页面每次加载都会触发）

onpagehide：在用户离开浏览器时触发（返回上一页或下一页）

onerror：在加载文档或图像出错时触发

onhashchange：当URL锚发生修改时触发（location.hash或href修改锚触发）

onresize：当窗口或框架被重新调整大小时触发（可以应用到移动端）

onscroll：当页面滚动时触发

**四、表单事件**

onblur：当元素失去焦点

onfocus：当元素获取焦点

onfocusin：当元素即将获取焦点时

onfocusout：当元素即将失去焦点时

onchange：当表单元素发生改变时

oninput：当用户输入时触发

onsearch：当用户对文本框进行搜索时（type="search"；enter/回车键）

onselect：当用户选取文本时（双击选中value时触发）

onreset：表单重置时触发（type=“reset”；表单重置触发）

onsubmit：表单提交时触发（type=“submit”；表单提交触发）

**五、剪贴板事件**

oncopy：用户拷贝元素内容时

oncut：用户前剪切元素内容时

onpaste：用户粘贴元素内容时

**六、打印事件**

onafterprint：页面已经开始打印，或者打印窗口已经关闭时触发

onbeforeprint：页面即将打印时触发

**七、拖动事件**

ondragstart：元素开始拖动时（1）

ondrag：元素正在拖动时（2）

ondragend：元素完成拖动时（3）

ondragenter：拖动元素进入放置目标时（进入区域时）（1）

ondragover：拖动元素在放置目标时（在区域时）（2）

ondragleave：拖动元素离开放置目标时（离开区域时）（3）

ondrop：拖动元素放置在目标时（放下元素时）（4）

属性：draggable="false"（元素不可拖动）

**八、多媒体（Media）事件（视屏音频）**

onemptied：播放列表为空时（warn）

onerror：加载期间发生错误时（error）

onabort：视频数据终止加载时（error）

onsuspend：浏览器读取媒体数据终止时（error）

onstalled：浏览器获取媒体数据，但媒体数据不可用时（error）

onloadstart：浏览器开始寻找指定视频时（1）

ondurationchange：视屏时长发生变化时（2）

onloadedmetadata：视频的元数据加载后触发（3）

onloadeddata：浏览器加载视频当前帧时触发（4）

onprogress：在浏览器下载指定的视频时（5）

oncanplay：视频可以开始播放时（6）

oncanplaythrough：视频可以正常播放且无需停顿和缓冲时（7）

onplay：视频开始播放时（1）

onpause：视频暂停时触发（3）

onplaying：视频暂停播放或缓冲后准备重新开始播放时触发（4）

onratechange：视频播放速度发生改变时（3）

onseeking：用户重新定位视频位置时触发（3）

onseeked：用户重新定位视频位置后触发（4）

ontimeupdate：当前播放位置发生改变时（2）

onwaiting：视频播放下一帧需要缓冲时触发（2）

onvolumechange：音量发生改变时（3）

onended：播放结束时（3）

**九、动画事件（animation属性触发的事件）**

animationstart：CSS动画开始播放时

animationend：CSS动画结束播放时

animationiteration：CSS动画重复播放时触发

**十、过渡事件**

transitionend：CSS完成过渡后触发（transtion属性）

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.001.png)

**十一、其他**
```
onmessage：从对象（websocket，webworker等）接收消息时触发

ononline：浏览器开始在线工作时

onoffline：浏览器开始离线工作时

onpopstate：窗口的浏览历史（history对象）发生改变时

onhashchange：监听页面**锚部分发生的变化**

onshow：当<menu>元素在上下文菜单显示时（只有firefox）

onstorage：在web storage（HTML 5 Web存储）更新时

ontoggle：用户打开或关闭<details>元素时（<summary>元素为details标题）

onwheel：鼠标滚轮在元素上下滚动时（滚动滚轮时触发）
```
**十二、事件对象**

**属性**

bubbles：返回事件是否是起泡事件类型（Boolean）

cancelable：返回事件是否可以取消默认动作（Boolean）

currentTarget：返回事件监听器触发该事件的元素（element）

target：返回触发此事件的元素（事件目标节点）

timeStamp：返回事件生成的日期和时间（时间戳）

type：返回当前Event对象表示的事件名称（事件）

**方法**

initEvent：初始化新创建的Event对象的属性

(事件类型（名称），是否冒泡，是否可用preventDefault取消事件)

preventDefault：通知浏览器不要执行与事件关联的默认动作

**stopPropagation**：不再派发事件（阻止分派到其他document节点上）

阻止事件冒泡

**十三、目标事件对象**

addEventListener：目标事件注册监听事件（IE8 = attachEvent()）

removeEventListener：目标事件移除监听事件（IE8 = detachEvent）

dispatchEvent：允许发送事件到监听器上（IE8 = fireEvent）

可以触发event对象事件

**十四、事件监听对象**

handleEvent（event）：**把任意对象注册为事件处理程序**

addeventlistener（‘click’, this, false）:**this可以是个object，里面可以定义handleEvent**

**事件会自动在传入的object对象寻找handleEvent方法**

该事件还会执行一些不能操作的event

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.002.png)

**十五、文档事件对象**

createEvent：创建Event事件

**document.createEvent('Event').initEvent(''build“，true,true)**

创建事件，初始化定义事件名为“build”

**十六、鼠标/键盘事件对象（event）**

**属性**

altKey：事件触发时，alt键是否按下

button：那个鼠标按钮被点击

0：鼠标左键

1：鼠标中键

2：鼠标右键

clientX：鼠标指针的水平坐标（相对于当前窗口）

clientY：鼠标指针的垂直坐标（相对于当前窗口）

screenX：鼠标指针的水平坐标（相对于屏幕）

screenY：鼠标指针的垂直坐标（相对于屏幕）

ctrlKey：Ctrl键是否按下

shiftKey：shift键是否按下

metaKey：meta键是否按下

relatedTarget：返回与事件的目标节点相关的节点

Location：返回按键在键盘上的位置

charCode：返回按键触发的Unicode字母代码

keyCode：返回按键的触发的Unicode字母代码

which：返回按键的触发的Unicode字母代码

key：返回按键返回的标识符（按键名称）

**方法**

initMouseEvent：初始化鼠标事件对象的值

initKeyboardEvent：初始化键盘事件对象的值

**addEventListener**

添加事件监听

和removeEventListener配合，防止内容泄露

addEventListener(event，listener，options)

event

事件类型，如click，mousemove

listener

监听事件触发时，会接收一个事件通知（实现event接口对象）

必须是一个实现eventlistener

options

有关listener属性的可选参数对象

capture：boolean

默认false，使用事件冒泡，true为事件捕获

once：Boolean

默认为false，是否只调用这一次，true只调用这一次，之后自动销毁listener

passive：Boolean

默认为true，意味永远不会调用preventDefault

（或者说我不会调用preventDefault，调用了也没用）

为false会阻止页面滚动

**自定义事件**

**new Event**

new Event('click', {bubbles: true/false, cancalable: true/false})

type；该事件是否冒泡；该事件默认行为是否阻止

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.003.png)

创建事件后，在对象元素上使用**dispatchEvent**触发该事件

当代码运行到此处时，会**自动触发绑定元素的对应事件**

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.004.png)

允许冒泡后，文档会捕获相同事件

**new MouseEvent，keyboardEvent，FocusEvent**

这些事件派生自UIEvent ->> Event

允许自定义UI事件

可以设置event事件中的属性值，screenX、screenY、ctrlkey

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.005.png)

**new CustomEvent**

自定义事件，像全新的事件，可以使用new CustomEvent

与new Event的差别是，该事件有一个detail参数作为描述相关的值

使用**dispatchEvent**触发该事件

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.006.png)

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.007.png)

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.008.png)

**复合事件**

DOM3级事件，用于处理input等输出序列处理

针对input的event事件

input.addEventListener('compositionstart', ()=>{})

当用户正在进行编辑文本，开始输入汉字时触发

input.addEventListener('compositionupdate', ()=>{})

当用户正在插入新的字符时，正在插入字符时触发

input.addEventListener('compositionend', ()=>{})

当用户插入所有字符结束时调用，插入字符完成结束

**事件循环：宏任务和微任务**

**主线程（JS引擎线程）**

**浏览器存在很多线程（事件触发线程互相操作）**

**GUI渲染线程（常驻线程）**

渲染浏览器界面，解析html，css，构建dom树，布局和绘制

该线程与JS线程互斥，当js引擎执行时，该引擎会被挂起，会保存在一个队列中等到JS引擎空闲时立即执行

**JS引擎线程（常驻线程）（JS内核）**

负责处理JavaScript脚本程序（例如V8引擎），解析JavaScript脚本，运行代码

一个页面中只有一个JS线程在运行JS程序

如果JS引擎运行时间过长，会造成阻塞页面加载，影响GUI渲染线程页面加载

当JS引擎修改DOM的时候，如果同时运行GUI引擎，会造成页面数据不一致

因此GUI更新会放到任务队列中，等JS引擎空闲时立即执行

**浏览器事件线程（onclick）（常驻线程）**

该事件归属于浏览器，用来控制事件循环

当JS引擎遇到事件时（不是首先同步处理的事件），Dom Event事件等，会将这些任务添加到该事件线程中

当事件符合触发条件被触发时（如点击，移动等操作），该线程会把事件添加到任务队列末尾，等待JS引擎的处理

由于JS时单线程，所以任务队列需要等待JS引擎依次处理

**定时器触发线程（setTimeout和setInterval）**

定时器不是由JS引擎计数的，因为JS是单线程，如果处于阻塞状态就会影响计时的准确

所以当计时完毕后，会添加到任务队列中，等待JS引擎执行

注意！！！

如果JS引擎处理其他任务超过定时器时间

如定时器5000ms，循环事件用了6000ms，就算定时器线程在5000ms的时候把执行函数放入到事件队列中，也必须等循环结束后才能调用，**这就造成实际是6秒的时候才触发**

**异步http请求线程**

当XMLHttpRequest连接后，浏览器会新开一个线程请求

当检测到状态变更时（onreadystateChange = function () {}）

如果设有回调函数，该异步线程就**产生状态变更事件**，将这个回调函数放入事件队列中，再由JS引擎执行

**Event loop事件轮询处理**

JS引擎先处理同步代码（宏任务），微任务和定时器等异步代码放入对应线程中等待触发

当微任务和异步代码符合触发条件，将会把回调函数放入任务队列末尾等待JS引擎执行

当用户操作event事件触发时，事件触发线程会将对应事件函数放入任务队列末尾

宏任务->微任务->GUI渲染引擎线程->定时器线程放入执行函数

（同步任务->微任务->定时器任务）

事件轮询依次进行

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.009.png)

queueMicrotask：创建一个**微任务**

promise：**微任务**

MutationObserver：DOM变动管擦器（**微任务**）

setTimeout：**异步任务**

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.010.png)

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.011.png)

浏览器进程

一个页面相当于一个进程，一个进程有多个线程互相配合

栈

**后进先出，先进后出**

**数据存储只能从顶部逐个存入，取出时也需从顶部逐个取出**

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.012.png)

堆

**无序的key-value（键值对）存储方式**

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

（给父元素定义事件处理程序，子元素的所有相关事件都由父元素来处理）

JavaScript存在事件冒泡，子元素的事件，会依次冒泡到document，其中经过的所有元素（如果存在触发条件，则会触发）

**普通绑定事件**：当子元素存在过多，如果给每个元素绑定相同事件，**则会增加dom操作，消耗性能**（如，循环子元素，为每个子元素增加onclick事件）

![clipboard.png](./assets/Aspose.Words.6d1ffee9-7ccd-4aac-9510-8f567fa2cdb7.016.png)

**事件委托**：因为事件始终会冒泡到父元素，而且**父元素会获取到子元素所触发的event相关属性，则只需要对父元素进行相关事件的委托，即可处理触发事件**

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
getBoundingClientRect返回该元素的大小，以及该元素窗口位置（边框距离窗口的位置）

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
