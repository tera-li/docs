**Window**
::: v-pre
`表示一个包含 DOM 文档的窗口，其 document 属性指向窗口中载入的 DOM 文档。`
:::
**Document**
::: v-pre
`表示一个网页，并作为网页内容的入口，也就是 DOM 树，可以通过 Document 对象访问设置 HTML 元素。`
:::
**Node**
::: v-pre
`表示一个接口，各种类型的 DOM API 对象会从这个接口继承`  
`作为 DOM 的最小组成单位，一个文档的树形结构就是由各种不同类型的节点组成`  
`Text、Comment、Element、Document都是节点`
:::
**Element**
::: v-pre
`表示一个元素，所有 Document 对象下的对象都继承自它，可以通过 Element 对象操作 HTML 元素的相关属性。`
:::
## Document
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
/* 若在一个已关闭（例如，已完成加载）的文档上调用 document.write，就会自动调用 document.open，这将清空该文档的内容 */
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
参考链接 1⃣️：https://developer.mozilla.org/zh-CN/docs/Web/API/Document  
参考链接 2⃣️：https://developer.mozilla.org/zh-CN/docs/Web/API/Element

## Element
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

readyState（文档状态）

loading-----文档正在被加载

interactive-----文档全部被读取

complete-----文档全部被读取，所有资源（图片）都已加载完成

**DOM 变动观察器（mutation observer）**

观察DOM元素，在其发生更改时触发回调

**let observer = new MutationObserver(callback)**

observer.observe(node, config)

config对象配置（该**Boolean**表示“**将对哪些更改做出反应**”）

childList：Boolean（node的直接子节点的更改做出反应）

subtree：Boolean（node的所有后代的更改做出反应）

attributes：Boolean（node的特性的更改做出反应）

attributeFilter：Boolean（特性名称数组，只观察选定的特性）

characterData：Boolean（是否观察node.data（文本内容的更改））

characterDataOldValue：Boolean（将旧的数据传递给回调：oldValue）

observer.disconnect()

停止观察

observer.takeRecords()

获取尚未处理的变动记录列表，记录已经发生，但是observe回调暂未处理的变动

![clipboard.png](./assets/Aspose.Words.18b3d0a4-4ec0-4714-a2e6-3aef21065cd3.011.png)