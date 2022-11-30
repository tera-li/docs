# Window
::: v-pre
`表示一个包含 DOM 文档的窗口，其 document 属性指向窗口中载入的 DOM 文档。`
:::
```js{1,21}
- 窗口属性
document.defaultView       // 该属性可以获取指定文档所在窗口
window.document            // 返回对 Document 对象的只读引用
window.frames              // 返回窗口中所有命名的框架 (返回window对象集合数组，如iframe) 
window.self                // 返回指向当前window对象的引用，可以保证在多个窗口中的位置
window.parent              // 返回当前窗口的父窗口信息
window.top                 // 返回当前窗口的最顶层浏览器窗口 (子窗口中返回顶级父窗口)
window.length              // 返回或设置窗口中的框架数量
window.name                // 设置或返回窗口的名称

window.innerWidth          // 返回窗口的文档显示区的高度 (文档height) 
window.innerHeight         // 返回窗口的文档显示区的宽度 (文档width) 
window.pageXOffset         // 返回文档在窗口左上角水平滚动像素 (滚动条距离水平像素) 
window.pageYOffset         // 返回文档在窗口左上角垂直滚动像素 (滚动条距离垂直像素) 

window.outerHeight         // 设置或返回窗口的浏览器高度 (文档height+外部工具栏/滚动条) 
window.outerWidth          // 设置或返回窗口的浏览器宽度 (文档width+外部工具栏/滚动条) 
window.screenLeft          // 返回浏览器相对于屏幕的X坐标 (浏览器距离左边的距离的像素数) 
window.screenTop           // 返回浏览器相对于屏幕的Y坐标 (浏览器距离上边的距离的像素数) 

- 窗口方法
window.alert()                      // 带有一段消息，确认按钮的警告框
window.confirm('message')           // 带有一段消息，确认按钮和取消按钮的对话框 (返回true，false) 
window.prompt('title', 'defaultValue')  // 显示一个对话框，对话框中包含一条文字信息，用来提示用户输入文字 (确认返回string，取消返回null)
window.open(url, strWindowName, strWindowFeatures)
    - url(窗口的URL): 'http://www.cnn.com/',
    - strWindowName(窗口的Name): 'CNN_WindowName',
    - strWindowFeatures(窗口的一些特性): 'width=400,height=400'
window.stop()               // 相当于点击了浏览器的停止按钮，能够阻止图片、新窗口、和一些会延迟加载的对象的加载
window.close()              // 关闭浏览器窗口 (只能由 Window.open() 方法打开的窗口的 window)
window.moveBy(100,100)      // 把当前浏览器相对于窗口移动 (移动多少像素，只能由 Window.open() 方法打开的窗口的 window)
window.moveTo(100,100)      // 把窗口的左上角移动到一个指定坐标 (移动到指定像素位置，只能由 Window.open() 方法打开的窗口的 window)

window.scrollBy(0, 100)     // 按照指定像素值来滚动内容 (移动多少像素)
window.scrollTo(0, 100)     // 把内容滚动到指定坐标 (移动到像素)

const encodedData = window.btoa('Hello, world'); // 编码字符串，创建一个base-64编码的字符串
const decodedData = window.atob(encodedData); // 解码字符串，解码一个base-64编码的字符串

window.print()              // 打印当前窗口页面
window.matchMedia('(max-width: 600px)')     // 返回一个新的MediaQueryList，matches返回true或false，表示是否与媒体查询匹配

const ele = document.getElementsByTagName('div')[0]
window.getComputedStyle(ele, null )         // 在应用活动样式表并解析这些值可能包含的任何基本计算后报告元素的所有 CSS 属性的值，该元素的style样式表
```
::: info JavaScript 存储对象
  - **Cookie: 本地存储 (长久存储，可设置数据过期时间)**
```js
document.cookie       // result 'someCookieName1=true; someCookieName2=true'
document.cookie = 'username=John Doe; domain= ;expires=Thu, 18 Dec 2043 12:00:00 GMT; max-age=300; path=/; secure=true;';
    - name/value: 名称/值
    - domain: 域名 (默认当前文档的域名)
    - path: 网页路径 (基于domain)
    - expires: 有效期时间 (chrome 最大为400天，删除cookie就设置当前时间之前的时间)
    - max-age: 存活最大seconds时间 (max-age优先级比expires高，删除cookie就设置0)
    - secure: cookie 只通过 https 协议传输
```
  - **localStorage: 本地存储 (长久存储，需要手动删除数据)**
```js
localStorage.setItem('myCat', 'Tom');   // 设置本地存储key/value
localStorage.getItem('myCat');          // 获取本地存储key的value
localStorage.removeItem('myCat');       // 删除本地存储对应key数据
localStorage.clear();                   // 清空本地存储所有数据
```
  - **sessionStorage: 会话存储 (临时存储，关闭窗口自动删除数据)**
  - **IndexedDB: 在客户端存储大量的结构化数据 (存储大量数据)**
:::
::: info JavaScript 页面记录
  - **History:**
  - **Location:**
  - **Navigator:**
:::

## Node
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
document.elementFromPoint(2,2)      // 方法返回给定坐标点下最上层的 element 元素

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
- **DOM 变动观察器**
```js
监视对 DOM 树所做更改的能力；观察DOM元素，在其发生更改时触发回调

// 选择需要观察变动的节点
const targetNode = document.getElementById('some-id');
/*
    观察器的配置 (需要观察什么变动) 
    childList: Boolean (node的直接子节点的更改做出反应)
    subtree: Boolean (node的所有后代的更改做出反应)
    attributes: Boolean (node的特性的更改做出反应)
    attributeFilter: Boolean (特性名称数组，只观察选定的特性)
    characterData: Boolean (是否观察node.data (文本内容的更改))
    characterDataOldValue: Boolean (将旧的数据传递给回调: oldValue)
*/
const config = { attributes: true, childList: true, subtree: true };
// 当观察到变动时执行的回调函数
const callback = (mutationsList, observer) => {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};
// 创建一个观察器实例并传入回调函数
const observer = new MutationObserver(callback);
// 以上述配置开始观察目标节点
observer.observe(targetNode, config);
// 之后，可停止观察
observer.disconnect();
```

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
```js{1,6,19,26,39,51,56,60,71,95,100,105,115,126}
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

- 复合事件
// DOM3级事件，用于处理input等输出序列处理，针对input的event事件

// 当用户正在进行编辑文本，开始输入汉字时触发
input.addEventListener('compositionstart', ()=>{})
// 当用户正在插入新的字符时，正在插入字符时触发
input.addEventListener('compositionupdate', ()=>{})
// 当用户插入所有字符结束时调用，插入字符完成结束
input.addEventListener('compositionend', ()=>{})
```
- **自定义事件**
```js
addEventListener: 目标事件注册监听事件 (IE8 = attachEvent)
removeEventListener: 目标事件移除监听事件 (IE8 = detachEvent)
dispatchEvent: 允许发送事件到监听器上 (IE8 = fireEvent)

// 监听自定义事件
window.addEventListener('customEvent', function (event) {  
    console.log(event.name+'，'+event.message);
});
// 创建自定义Event事件
var event = document.createEvent("customEvent");
// 初始化事件
event.initEvent("customEvent", true, true);
/*  推荐以下写法
var event = new CustomEvent("customEvent", {
    detail: {
        detailEvent: true
    },
    bubbles: true
});
*/
// 派发触发事件
event.name = "join"
event.message = "hello"
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
参考链接 1⃣️: https://developer.mozilla.org/zh-CN/docs/Web/API/Document  
参考链接 2⃣️: https://developer.mozilla.org/zh-CN/docs/Web/API/Element  
参考链接 3⃣️: https://developer.mozilla.org/zh-CN/docs/Web/API/Event  