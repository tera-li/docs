# JavaScript Web Components
## Custom Elements
:::info 简介
自定义元素  
允许您定义 custom elements 及其行为，然后可以在您的用户界面中按照需要使用它们  
自定义标签完成之后，可以正常在HTML中使用
:::
- Autonomous custom elements (自定义元素)

```html
<my-element>myElement!</my-element>
```

```js{1,2}
// Custom Elements 继承自 HTMLElement 抽象类
// 创建 自定义元素 可在元素生命周期中执行相关操作
class MyElement extends HTMLElement {
    constructor() {
        super()
        this.style.color = "red";
    }
    // 自定义元素第一次被连接到文档 DOM 时被调用
    connectedCallback() { console.log('元素已被添加到文档') }

    // 自定义元素与文档 DOM 断开连接时被调用，如元素被删除 ele.remove()
    disconnectedCallback() { console.log('元素从文档移除') }

    // 自定义元素的所监听的属性被增加、移除或更改时被调用，如 ele.setAttribute('first', 'value')
    attributeChangedCallback(name, oldValue, newValue) {}

    // 返回元素的属性名数组，这些属性变化会被监视
    static get observedAttributes() {
        return ['first']
    }
    // 自定义元素被移动到新文档时被调用
    adoptedCallback() { console.log('当元素被移动到新文档的时') }
}
// 定义和注册自定义元素(其中必须要有短横线)，用来显示在HTML文档上
customElements.define('my-element', MyElement)
// 返回以前定义自定义元素的构造函数
customElements.get('my-element');
// 当元素被定义时，接口返回一个成功的promise
customElements.whenDefined('my-element');
```
- Customized built-in elements (自定义内置元素)

```html
<button is="my-button">click!</button>
<p is="my-p">This is p!</p>
```

```js
// 继承自 HTMLButtonElement，并扩展该元素
class MyButton extends HTMLButtonElement {
    constructor() {
        super()
        // this.disabled = true
        this.addEventListener('click', (event) => console.log("Hello!"))
    }
}
// 继承 button 元素，拥有 button 元素所有属性
customElements.define('my-button', MyButton, { extends: 'button' })

// 继承自 HTMLParagraphElement，并扩展该元素
class MyP extends HTMLParagraphElement {
    constructor() {
        super()
        this.style.color = 'red'
    }
}
// 继承 p 元素，拥有 p 元素所有属性
customElements.define('my-p', MyP, { extends: 'p' })
```
## Shadow DOM
:::info 简介
影子 DOM  
可封装的 `影子DOM树` 附加到元素（与主文档 DOM 分开呈现）并可控制其关联的功能  
可保持元素的功能私有，能被脚本化和样式化，而不用担心与文档的其他部分发生冲突
:::
## Templates and Slots
:::info 简介
HTML 模板  
`<template />` 和 `<slot />` 元素使您可以编写不在呈现页面中显示的标记模板
:::
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/Web_Components  





**Shadow DOM**

shadow dom为封装而生，它可以让一个组件拥有自己的shadow dom树

该dom树不能再主文档中被任意访问，可以拥有自己的局部样式和其他特性

**shadow host**：一个常规DOM节点，shadow DOM会被附加到这个节点上

**shadow tree**：shadow DOM内部的DOM树

**shadow boundary**：shadow DOM结束的地方，也是常规DOM开始的地方

**shadow root**：shadow tree的根节点

**shadow tree**

**eleRef**.**attachShadow**(shadowRootInit)

eleRef：必须是能容纳shadow tree的元素

shadowRootInit：一个shadowRootInit字典（创建一个shadow tree）

{mode: open}：shadow rout元素可以从js外部访问根节点

可以通过**elem.shadowRoot(相当于document节点)**访问shadow tree

{mode: closed}：拒绝从js外部访问关闭的shadow root节点

不可以通过**elem.shadowRoot**访问shadow tree，永远是null


自定义的my-ele元素会将它的内部DOM隐藏在影子中，不会显示

不会被**document**文档所找到

只会在ele.**shadowRoout**节点中找到

shadow中的DOM元素将会插入到my-ele元素中

elem.shadowRoot.host === elem（true）

表示attachShadow({mode：‘open’})；否则为false

**slot**

slot插槽，使元素更加灵活

**具名插槽**


通过shadow DOM的shadowRoot中使用slot

shadow DOM中提供了两个slot插槽，并且定义name=“mytext”的插槽点名称

元素使用slot=“mytext”属性与属性值对应定义的插槽，匹配成功将会把该元素渲染到对应插槽中

**默认插槽**


shadow DOM中slot不定义name名字，则是不具名的插槽

将会把元素中所有没有slot属性的元素渲染到插槽中


创建template，将模板作为shadow Dom的内容

**将自定义元素中的内容都渲染到插槽点中**，点击指定元素，实现动态添加删除样式

**shadow样式**

:host选择器允许选择shadow宿主（包含shadow树的元素）


:host：作用在**整个shadow宿主节点**

:host([centered])：作用在与**shadow宿主属性相匹配时**才应用样式

:host-context(.dark)：只有在**shadow宿主**或**它外部祖先元素**有**对应的样式**才会生效

**插槽样式**

对slot本身元素进行样式化，并影响子元素


使用::slotted(ele)，只能对插槽插入的对应元素进行渲染（不能用于更深层次的节点）


使用自定义css属性进行样式穿透（外部元素声明的样式，会用于内部插槽的样式）


**shadow事件**

shadow dom具有冒泡事件、事件委托等

如果是自定义事件，需要定义自定义事件的bubbles和composed


只有composed为true，才会允许事件可以从shadow DOM传递到一般的DOM

**template**

是一种用于**保存客户端内容机制**，该内容在加载页面**不会呈现**

将模板视为一个**可存储在文档中**以便**后续使用的内容片段**

template不会在文档中显示，除非被插入使用

template的content属性可看作DocumentFragment相当于一个DOM包装器片段

可以随时插入node节点（如append()、insertBefore()）


template中的元素也会被添加到shadow DOM中，并且生效

开发复杂软件的原则：不要让软件复杂

当某个部分复杂了，就将其拆分为简单的部分，再以简单的方式组合起来

**只有让复杂的事情简单化的架构才是好架构**


