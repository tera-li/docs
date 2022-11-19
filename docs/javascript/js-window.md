**Window**
::: v-pre
`表示一个包含 DOM 文档的窗口，其 document 属性指向窗口中载入的 DOM 文档。`
:::
**Node**
::: v-pre
`表示一个接口，各种类型的 DOM API 对象会从这个接口继承`  
`作为 DOM 的最小组成单位，一个文档的树形结构就是由各种不同类型的节点组成`  
`Text、Comment、Element、Document都是节点`
:::
## Document
::: v-pre
`表示一个网页，并作为网页内容的入口，也就是 DOM 树，可以通过 Document 对象访问设置 HTML 元素。`
:::
```js{1,10,24,46,60,67}
- 匹配元素
document.getElementById('id')                // 匹配ID元素，返回匹配到的第一个元素
document.getElementsByClassName('container') // 匹配Class元素，返回HTMLCollection
document.getElementsByTagName('p')           // 匹配标签名称，返回HTMLCollection
document.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "p")   // 匹配指定命名空间和指定标签名称，返回HTMLCollection
document.getElementsByName("up")             // 匹配元素的name属性值，返回NodeList
document.querySelector('#nav-access')        // 匹配CSS选择器，返回匹配到的第一个元素
document.querySelectorAll('.nav-access')     // 匹配CSS选择器，返回NodeList

- 操作元素
document.createElement('div')         // 创建一个由标签名称 tagName 指定的 HTML 元素 <div></div>
document.createAttribute('name')      // 创建并返回一个新的属性节点
document.createTextNode('div')        // 创建一个新的文本节点
document.createComment('div')         // 创建并返回一个注释节点
element.setAttributeNode(attribute)   // 设置指定的 Element 添加属性节点，attribute由createAttribute创建，并设置value为属性值
element.setAttribute('name', 'value') // 设置指定元素上的某个属性值
element.getAttribute('name')          // 匹配元素上指定的属性值
element.removeAttribute('name')       // 删除元素上指定的属性
element.remove()                      // 删除元素，从 DOM 树中删除
element.before(element)               // 在 Element的节点前插入一组 Node 对象或 DOMString 对象
element.append(element)               // 在 Element的最后一个子节点之后插入一组 Node 对象或 DOMString 对象
element.after(element)                // 在 Element的节点后插入一组 Node 对象或 DOMString 对象

- 读取操作
document.activeElement                // 返回当前在 DOM 或者 shadow DOM 树中处于聚焦状态的Element
document.baseURI                      // 返回 HTML 文档的基础URI
document.cookie                       // 返回、设置与当前文档相关联的 cookie
document.doctype                      // 返回文档声明内容 html
document.documentElement              // 返回文档对象 document 的根元素
document.forms                        // 返回当前文档中的 <form>元素的一个集合，返回HTMLCollection
document.images                       // 返回当前文档中的 <image>元素的一个集合，返回HTMLCollection
document.links                        // 返回一个文档中所有具有 href 属性值的 <area> 元素与 <a> 元素的集合
document.scripts                      // 返回文档中所有的<script>元素的集合，返回HTMLCollection
document.title                        // 返回、设置当前文档的标题 title
document.head                         // 返回当前文档中的 <head> 元素
document.readyState                   // 描述了document 的加载状态
    1. loading          // 加载中，document还在加载
    2. interactive      // 已加载，document已被解析，子资源如图像，样式表，框架等还在加载
    3. complete         // 完成，document和子资源已完成加载，load状态事件即将被触发
/* 若在一个已关闭 (例如，已完成加载)的文档上调用 document.write，就会自动调用 document.open，这将清空该文档的内容 */
document.write                        // 将一个文本字符串写入一个由 document.open() 打开的文档流 ( document.close() )
document.writeln                      // 同上，每次写入会紧跟着一个换行符
document.characterSet                 // 返回当前文档的字符编码 UTF-8/UTF-16
document.designMode                   // 控制整个文档是否可编辑，on可编辑 || off不可编辑

- 方法
window.addEventListener / document.addEventListener / element.addEventListener
// 将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行
addEventListener('click', (event) => { console.log(event) }, true) // useCapture默认为false，true为事件捕获时触发listener
addEventListener('click', (event) => { console.log(event) }, {
    capture: true,                  // true表示事件捕获时触发listener
    once: true,                     // true表示只调用一次listener
    passive: true,                  // true表示listener永远不会调用preventDefault()，浏览器会执行默认操作
    signal: new AbortController(),  // AbortController.abort()方法被调用时，监听器会被移除
})
removeEventListener('click', (event) => { console.log(event) }, true) // 删除使用的addEventListener方法添加的事件
document.open('text/html','replace')// 打开一个流，接收document.write()，输出流展示内容
document.close()                    // 关闭一个打开的流，并显示数据

- HTML Collection(HTML元素的集合，类似于数组列表)
document.getElementsByTagName("p").length               // 返回子元素的数目
document.getElementsByTagName("p").item(12)             // 返回元素集合指定索引的元素
document.getElementsByTagName("p").namedItem('license') // 返回元素集合指定ID的元素
for...in    // 可以迭代获取元素，需要通过hasOwnProperty区分是否是自身的属性
for...of    // 可以迭代获取元素

- NodeList(节点集合，类似于元素的节点集合)
/* Node.childNodes、document.querySelectorAll 返回的节点集合 */
document.getElementsByName("up").length                 // 返回节点数量
document.getElementsByName("up").item(12)               // 返回节点集合指定索引的元素
document.getElementsByName("up").entries()
document.getElementsByName("up").forEach()
document.getElementsByName("up").keys()
document.getElementsByName("up").values()
```
参考链接 1⃣️: https://developer.mozilla.org/zh-CN/docs/Web/API/Document  
参考链接 2⃣️: https://developer.mozilla.org/zh-CN/docs/Web/API/Element

## Element
::: v-pre
`表示一个元素，所有 Document 对象下的对象都继承自它，可以通过 Element 对象操作 HTML 元素的相关属性。`
:::
```js{1,36,61}
- 元素属性
element.id                          // 设置或返回元素的id
element.tagName                     // 返回元素的标签名 BUTTON
element.accesskey = "g"             // alt+g 可以将焦点跳转到这个元素上
element.attributes                  // 返回返回元素属性的集合 NamedNodeMap
element.childNodes                  // 返回元素的子节点的集合 NodeList
element.children                    // 返回元素的子元素集合 HTMLCollection
element.className                   // 设置或返回元素的class属性名 'class1 class2'
element.classList                   // 返回一个元素 class 属性的动态 DOMTokenList 集合。这可以用于操作 class 集合。
    1. add('class')                 // 添加class属性类名
    2. contains('class')            // 判断指定类名是否存在
    3. remove('class')              // 移除class属性类名
    4. toggle('class')              // 在元素中切换添加类名 add和remove

element.firstChild                  // 返回元素的第一个子节点，无则返回 null
element.firstElementChild           // 返回元素的第一个子元素，无则返回 null
element.lastChild                   // 返回元素的最后一个子节点，无则返回 null
element.lastElementChild            // 返回元素的最后一个子元素，无则返回 null
element.nextSibling                 // 返回其父节点的 childNodes 列表中紧跟在其后面的节点 (包括元素、文本节点，注释节点)
element.nextElementSibling          // 返回当前元素在其父元素的子元素节点中的后一个元素节点 (包括元素)
element.previousSibling             // 返回其父节点的 childNodes 列表中前一个兄弟节点 (包括元素、文本节点，注释节点)
element.previousElementSibling      // 返回当前元素在其父元素的子元素节点中的前一个元素节点 (包括元素)
element.parentNode                  // 返回指定的节点在 DOM 树中的父节点
element.parentElement               // 返回指定的节点在 DOM 树中的父元素节点

element.contentEditable             // 设置或返回元素是否可被用户编辑
element.innerHTML                   // 设置或返回 HTML 语法表示的元素的后代 (可以解析标签)
element.innerText                   // 设置或返回元素的内部的文本
element.title                       // 设置或返回元素的title
element.style                       // 设置或返回元素的css样式声明

element.nodeName                    // 返回当前节点的节点名称 DIV
element.nodeType                    // 返回当前节点的节点类型 1 (1: 元素节点、2: 属性节点、3: 文本节点、8: 注释节点)
element.nodeValue                   // 返回或设置当前节点的值

- 元素方法
element.appendChild(node)           // 在 Node 节点的最后一个子节点插入 Node 对象
element.append(...node)             // 在 Element 的最后一个子节点之后插入一组 Node 对象或 DOMString 对象
    1. Element.append() 允许追加 DOMString 对象，而 Node.appendChild() 只接受 Node 对象。
    2. Element.append() 没有返回值，而 Node.appendChild() 返回追加的 Node 对象。
    3. Element.append() 可以追加多个节点和字符串，而 Node.appendChild() 只能追加一个节点。
parentElement.insertBefore(newNode, referenceChildNode)    // 在参考节点之前插入一个拥有指定父节点的子节点
element.removeChild(node)           // 从 DOM 中删除一个子节点。返回删除的节点
parentElement.replaceChild(newChild, oldChild)  // 将指定的节点替换当前节点的一个子节点
element.cloneNode(false || true)    // 返回克隆节点的一个副本，可选择是否采用深度克隆
element.isEqualNode(element)        // 判断两个节点是否相等

element.getAttribute('id')          // 返回元素指定的属性值 'title'
element.getAttributeNode('id')      // 返回元素指定的属性节点 id=title
element.setAttribute('id', 'value') // 设置指定元素上的某个属性值
element.setAttributeNode()          // 设置指定元素上的某个属性节点，需要显示克隆后使用
    1. element.setAttributeNode(element.getAttributeNode('id').cloneNode())
element.hasAttribute('id')          // 返回元素是否包含有指定的属性 true
element.hasAttributes()             // 返回当前元素节点是否有至少一个的属性 true
element.hasChildNodes()             // 返回当前节点是否包含有子节点 true

element.focus()                     // 设置焦点
element.blur()                      // 设置失去焦点
element.hasFocus()                  // 设置失去焦点

- 元素容器参数
element.clientHeight                // 返回元素内容的viewport可视height (包括padding，不包括border、margin及滚动条)
element.clientWidth                 // 返回元素内容的viewport可视width (包括padding，不包括border、margin及滚动条)

element.scrollHeight                // 返回元素的height (包括滚动条以及隐蔽的地方)
element.scrollWidth                 // 返回元素的width (包括滚动条以及隐蔽的地方)
element.scrollTop                   // 设置或返回元素的滚动条到元素顶部的距离 (滚动距离元素顶部的像素值)
element.scrollLeft                  // 设置或返回元素的滚动条到元素左边的距离 (滚动距离元素左边的像素值)

element.offsetHeight                // 返回元素的height (包括padding，border、不包括margin)
element.offsetWidth                 // 返回元素的width (包括padding，border、不包括margin)
element.offsetTop                   // 返回当前元素相对于其 offsetParent 元素的顶部的距离
element.offsetLeft                  // 返回当前元素相对于其 offsetParent 元素的左边届的距离
element.offsetParent                // 返回指向最近的包含该元素的定位元素 (position) 或者最近的 table, td, th, body 元素
element.getBoundingClientRect()     // 返回元素的大小及其相对于视口(viewport)的位置
    width                           // 返回元素的height (包括padding，border、不包括margin)
    height                          // 返回元素的width (包括padding，border、不包括margin)
    top / y                         // 返回元素上边距viewport上边的距离
    left / x                        // 返回元素左边距viewport左边的距离
    right                           // 返回元素右边距viewport左边的距离
    bottom                          // 返回元素下边距viewport上边的距离
```

## Event
::: v-pre
`Event 接口表示在 DOM 中出现的事件。`  
`由系统自动触发或者用户操作触发`
:::
```js{1,6,19,26,39,51,56,60,71,95,100,105,115}
- DOM事件允许JavaScript在HTML文档中注册不同事件处理程序，事件通常与函数结合使用

事件捕获(event capture): 先检查html元素是否注册相同事件，如果是则运行，然后向内继续检测下一层元素，直到到达实际点击元素
事件冒泡(event bubble): 先检测点击元素是否注册相同事件，如果是则运行，然后向外继续检测下一层元素，直到到达html元素

- 鼠标事件
onclick: 鼠标点击单击触发 (单击)
oncontextmenu: 鼠标右键打开菜单时触发 (右击)
ondblclick: 鼠标双击触发 (双击)

onmousemove: 鼠标移动时触发 (移动时触发)
onmousedown: 鼠标被按下 (点击按下)
onmouseup: 鼠标被松开 (点击松开)
onmouseenter: 鼠标移动到元素上时触发 (鼠标移入)
onmouseleave: 鼠标移出元素时触发 (鼠标移出)
onmouseover: 鼠标移动到元素上时触发 (鼠标移入，当有子元素覆盖时，当从父元素移入子元素，会冒泡触发它的父元素事件)
onmouseout: 鼠标移出某元素 (鼠标移出，子元素移入父元素时，会触发事件冒泡)

- 键盘事件
onkeydown: 键盘按键被按下时
onkeypress: 键盘按键被按下并松开
onkeyup: 键盘按键被松开
altKey: 表示事件触发时 alt 键 (OS X 系统上的 Option 或 ⌥ 键) 是 (true) 否 (false) 被按下
ctrlKey: 表示事件触发时 control 键是 (true) 否 (false) 按下

- 框架事件
onDOMContentLoaded: 页面已经完全加载了HTML，DOM树已经构建完毕，不需要等待 <img> 和样式表等外部资源的加载
onload: 在页面或图像完成加载时触发 (页面第一次加载时触发)
onbeforeunload: 在即将离开页面 (刷新或关闭)时触发
onunload: 用户退出页面时，当文档或一个子资源正在被卸载时

onpageshow: 在用户进入网页时触发 (页面每次加载都会触发)
onpagehide: 在用户离开网页时触发 (返回上一页或下一页)
onerror: 在加载文档或图像出错时触发
onhashchange: 当URL锚发生修改时触发 (location.hash或href修改锚触发)
onresize: 当窗口或框架被重新调整大小时触发(可以应用到移动端)
onscroll: 当页面滚动时触发

- 表单事件
onblur: 当元素失去焦点
onfocus: 当元素获取焦点
onfocusin: 当元素即将获取焦点时
onfocusout: 当元素即将失去焦点时
onchange: 当表单元素发生改变时
oninput: 当用户输入时触发
onsearch: 当用户对文本框进行搜索时 (type="search": enter/回车键)
onselect: 当用户选取文本时 (双击选中value时触发)
onreset: 表单重置时触发 (type=“reset”: 表单重置触发)
onsubmit: 表单提交时触发 (type=“submit”: 表单提交触发)

- 剪贴板事件
oncopy: 用户拷贝元素内容时
oncut: 用户前剪切元素内容时
onpaste: 用户粘贴元素内容时

- 打印事件
onbeforeprint: 页面即将打印时触发
onafterprint: 页面已经开始打印，或者打印窗口已经关闭时触发

- 拖拽事件
ondragstart: 元素开始拖动时 (1)
ondrag: 元素正在拖动时      (2)
ondragend: 元素完成拖动时   (3)

ondragenter: 拖动元素进入放置目标时 (进入区域时) (1)
ondragover: 拖动元素在放置目标时 (在区域时)      (2)
ondragleave: 拖动元素离开放置目标时 (离开区域时) (3)
ondrop: 拖动元素放置在目标时 (放下元素时)        (4)
属性: draggable="false" (元素不可拖动)

- 多媒体(Media)事件(video/audio)
onemptied: 播放列表为空时 (warn)
onerror: 加载期间发生错误时 (error)
onabort: 视频数据终止加载时 (error)
onsuspend: 浏览器读取媒体数据终止时 (error)
onstalled: 浏览器获取媒体数据，但媒体数据不可用时 (error)
onloadstart: 浏览器开始寻找指定视频时 (1)
ondurationchange: 视屏时长发生变化时 (2)
onloadedmetadata: 视频的元数据加载后触发 (3)
onloadeddata: 浏览器加载视频当前帧时触发 (4)
onprogress: 在浏览器下载指定的视频时 (5)
oncanplay: 视频可以开始播放时 (6)
oncanplaythrough: 视频可以正常播放且无需停顿和缓冲时 (7)
onplay: 视频开始播放时 (1)
onpause: 视频暂停时触发 (3)
onplaying: 视频暂停播放或缓冲后准备重新开始播放时触发 (4)
onratechange: 视频播放速度发生改变时 (3)
onseeking: 用户重新定位视频位置时触发 (3)
onseeked: 用户重新定位视频位置后触发 (4)
ontimeupdate: 当前播放位置发生改变时 (2)
onwaiting: 视频播放下一帧需要缓冲时触发 (2)
onvolumechange: 音量发生改变时 (3)
onended: 播放结束时 (3)

- 动画事件 (animation属性触发的事件)
animationstart: CSS动画开始播放时
animationend: CSS动画结束播放时
animationiteration: CSS动画重复播放时触发

- 过渡事件 (transtion属性触发的事件)
transitionrun: transition在创建时触发
transitionstart: transition动画实际开始时触发
transitionend: transition动画完成时触发

- 其他事件
onmessage: 从 (websocket、worker) 接收消息时触发
ononline: 浏览器开始在线工作时
onoffline: 浏览器开始离线工作时
onpopstate: 窗口的浏览历史 (history对象) 发生改变时
onhashchange: 监听页面 (锚部分发生的变化)
onstorage: 在web storage (HTML 5 Web存储) 更新时
ontoggle: 用户打开或关闭<details>元素时 (<summary/>元素为details标题)
onwheel: 鼠标滚轮在元素上下滚动时 (滚动滚轮时触发)

- 事件对象
event.bubbles: 返回事件是否是起泡事件类型 (Boolean)
event.cancelable: 返回事件是否可以取消默认动作 (Boolean)
event.currentTarget: 返回事件监听器触发该事件的元素 (element)
event.target: 返回触发此事件的元素 (事件目标节点)
event.timeStamp: 返回事件生成的日期和时间 (时间戳)
event.type: 返回当前Event对象表示的事件名称 (事件)

event.preventDefault(): 通知浏览器不要执行与事件关联的默认动作
event.stopPropagation(): 阻止捕获和冒泡阶段中当前事件的进一步传播

addEventListener: 目标事件注册监听事件 (IE8 = attachEvent)
removeEventListener: 目标事件移除监听事件 (IE8 = detachEvent)
dispatchEvent: 允许发送事件到监听器上 (IE8 = fireEvent)

// 监听自定义事件
window.addEventListener('customEvent', function (event) {  
    console.log(event.name+'，'+event.message);
});
// 创建自定义Event事件
var event = document.createEvent("HTMLEvents");
// 初始化事件
event.initEvent("customEvent", true, true);
// 派发触发事件
window.dispatchEvent(event);

// addEventListener指定对象，每当事件发生时，都会调用此方法handleEvent
/*  1. this指向obj
    2. 可动态改变handleEvent，不需要先remove再add
    3. 不同事件可绑定同一对象，实现复用 
*/
var obj = {
    name: 'foo',
    handleEvent: function() {
       alert('click name='+ this.name);
    }
};
document.body.addEventListener('click', obj, false);
```
**十六、鼠标/键盘事件对象 (event)**

**属性**

altKey: 事件触发时，alt键是否按下

button: 那个鼠标按钮被点击

0: 鼠标左键

1: 鼠标中键

2: 鼠标右键

clientX: 鼠标指针的水平坐标 (相对于当前窗口)

clientY: 鼠标指针的垂直坐标 (相对于当前窗口)

screenX: 鼠标指针的水平坐标 (相对于屏幕)

screenY: 鼠标指针的垂直坐标 (相对于屏幕)

ctrlKey: Ctrl键是否按下

shiftKey: shift键是否按下

metaKey: meta键是否按下

relatedTarget: 返回与事件的目标节点相关的节点

Location: 返回按键在键盘上的位置

charCode: 返回按键触发的Unicode字母代码

keyCode: 返回按键的触发的Unicode字母代码

which: 返回按键的触发的Unicode字母代码

key: 返回按键返回的标识符 (按键名称)

**方法**

initMouseEvent: 初始化鼠标事件对象的值

initKeyboardEvent: 初始化键盘事件对象的值

**addEventListener**

添加事件监听

和removeEventListener配合，防止内容泄露

addEventListener(event，listener，options)

event

事件类型，如click，mousemove

listener

监听事件触发时，会接收一个事件通知 (实现event接口对象)

必须是一个实现eventlistener

options

有关listener属性的可选参数对象

capture: boolean

默认false，使用事件冒泡，true为事件捕获

once: Boolean

默认为false，是否只调用这一次，true只调用这一次，之后自动销毁listener

passive: Boolean

默认为true，意味永远不会调用preventDefault

 (或者说我不会调用preventDefault，调用了也没用)

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

**DOM 变动观察器 (mutation observer)**

观察DOM元素，在其发生更改时触发回调

**let observer = new MutationObserver(callback)**

observer.observe(node, config)

config对象配置 (该**Boolean**表示“**将对哪些更改做出反应**”)

childList: Boolean (node的直接子节点的更改做出反应)

subtree: Boolean (node的所有后代的更改做出反应)

attributes: Boolean (node的特性的更改做出反应)

attributeFilter: Boolean (特性名称数组，只观察选定的特性)

characterData: Boolean (是否观察node.data (文本内容的更改))

characterDataOldValue: Boolean (将旧的数据传递给回调: oldValue)

observer.disconnect()

停止观察

observer.takeRecords()

获取尚未处理的变动记录列表，记录已经发生，但是observe回调暂未处理的变动

![clipboard.png](./assets/Aspose.Words.18b3d0a4-4ec0-4714-a2e6-3aef21065cd3.011.png)