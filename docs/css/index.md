# CSS

`层叠样式表（Cascading Style Sheets，缩写为 CSS）是一种样式表语言，用来描述 HTML 或 XML（包括如 SVG、MathML 或 XHTML 之类的 XML 分支语言）文档的呈现。CSS 描述了在屏幕、纸质、音频等其他媒体上的元素应该如何被渲染的问题。`

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <!-- 内嵌式 -->
    <style type="text/css">
      p {
         color: red;
      }
    </style>
    <!-- 外部式 link 连接⼀个外部样式表 -->
    <link href="./index.css" type="text/css" rel="stylesheet" media="screen" />
  </head>
  <body>
   <!-- 行内样式 -->
    <p style="color: red">行内样式申明</p>
  </body>
</html>

href="./index.css"：连接外部文件  
rel="stylesheet"：定义链接文件和HTML文档之间的关系为样式表  
type="text/css"：MIME 类型是 "text/css"，它规定样式表  
media="screen"：定义外部加载的样式表在什么设备上使⽤  
  -- screen：计算机屏幕
  -- print：打印机预览 /打印⻚⾯
  -- all：适⽤于所有设备
  -- 和 @media print媒体规则效果等相同
```
## CSS 元素尺⼨
```css
p {
    /*
    width: 定义元素宽度
      win-content: 采用内部元素最小宽度值最大的那个元素的宽度作为最终容器的宽度
      max-content: 采用内部元素最大宽度值的那个元素的宽度作为最终容器的宽度
      fit-content: 元素宽度收缩为内容宽度
      fill-availlabel: 自动填满剩余的空间
    min-width：定义元素最⼩宽度
    max-width：定义元素最⼤宽度
    height: 定义元素高度
    margin：定义元素的外边距 (top，right，bottom，left)
    padding：定义元素内边距 (top，right，bottom，left)
    */
   width: 100px | 100% | 100rem | 100vw | win-content | max-content | fill-availlabel;
   min-width: 100px | 100% | 100rem | 100vw;
   max-width: 100px | 100% | 100rem | 100vw;
   height: 100px | 100% | 100rem | 100vw;
   min-height: 100px | 100% | 100rem | 100vw;
   max-height: 100px | 100% | 100rem | 100vw;
   margin: 1px 1px 1px 1px;
   padding: 1px 1px 1px 1px;
}
```
## CSS 元素布局
```css
p {
    /*
    display: 设置元素如何显示
      none: 隐藏元素，不会占据空间
      inline: 内联元素
      block: 块级元素
      inline-block: 内联块元素
      list-item: 列表项⽬
      inline-table: 内联表格
      flex: 弹性布局
      inline-flex: 内联弹性布局
    visibility: 设置元素如何显示
      visible: 显示元素
      hidden: 隐藏元素，会占据空间
    */
    display: none | inline | block | inline-block | flex | inline-flex;
    visibility: visible;
    /*
    float: 设置元素浮动
      none: 元素不浮动
      left: 元素浮动在左边
      right: 元素浮动在右边
    clear: 设置元素浮动方式
      none: 允许元素两边都有浮动
      both: 不允许元素有浮动
      left: 不允许元素左边有浮动
      right: 不允许元素右边浮动
    */
    float: none | left | right;
    clear: none | both | left | right;
    /*
    overflow: 控制内容溢出元素框时显示的方式
      visible: 内容不会被修剪，会呈现在元素框之外
      hidden: 内容会被修剪，并且其余内容是不可见
      scroll: 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容
      auto: 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容
    overflow-x: 指定控制内容溢出元素X轴的处理方式
    overflow-y: 指定控制内容溢出元素Y轴的处理方式
    */
    overflow: visible | hidden | scroll | auto;
    overflow-x: visible | hidden | scroll | auto;
    overflow-y: visible | hidden | scroll | auto;
    /*
    position: 设置元素定位
      static: 默认，遵循常规流
      relative: 相对定位，相对于⽗元素的位置
      absolute: 绝对定位，参照⽗元素定位
      fixed: 固定定位，以窗⼝为参考进⾏定位，不会随着滚动条滚动
      sticky: 粘性定位，基于用户的滚动位置来定位；在 position:relative 与 position:fixed 定位之间切换；当页面滚动超出元素目标区域则切换为fixed
    z-index: 设置元素的堆叠顺序
    */
    position: static | relative | absolute | fixed | sticky;
    z-index：100;   
}
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/CSS_layout/Introduction  

## CSS 背景与边框
```css
p {
    /*
    border: 设置元素边框
    border-radius: 定义元素圆⻆
    border-image: 定义边框图像
    */
    border: 1px solid black;
    border-radius: 5px;
    border-image: url("./xxx.png");
    /*
    box-shadow: 设置元素阴影
      inset: 从外层的阴影（开始时）改变阴影内侧阴影
      x-shadow: 必需的。水平阴影的位置。允许负值
      y-shadow: 必需的。垂直阴影的位置。允许负值
      blur: 模糊距离
      spread: 阴影的大小
      color: 阴影的颜色
    */
    box-shadow: inset 1px 1px 1px 1px rebeccapurple;
    background: #7f8497 | url("./xxx.png");
    /* 缩放背景图片以完全装入背景区，可能背景区部分空白 */
    background-size: contain;
    /* 缩放背景图片以完全覆盖背景区，可能背景图片部分看不见 */
    background-size: cover;
    /* 背景图像的位置是在视口内固定 */
    background-attachment: fixed;
    /* 线性渐变，创建一个表示两种或多种颜色线性渐变的图片 */
    background: linear-gradient(to left, #333 50%, green 75%, red 75%);
    /* 径向渐变，创建从原点辐射的两种或多种颜色之间的渐进过渡组成 */
    background: radial-gradient(circle at 100%, #333, #333 50%, #eee 75%, #333 75%);
}
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders  

## CSS 字体与颜⾊
```css
p {
    /*
    color: 
      red: 设置字体颜色
    opacity: 
      0~1: 设置不透明级别
    font-style:
      italic: 设置字体样式斜体
    font-weight:
      100~900: 设置字体粗细
    font-size: 设置字体大小
    font-family: 设置元素字体
    text-align: 设置文本的对齐方式
    line-height: 设置文本行高
    letter-spacing: 设置 字与字 的距离
    word-spacing: 设置 单词段字之间 的距离
    word-break: 设置单词内断行方式 (break-all 任意字符间断行 | break-word 单词间换行)
    white-space: 设置如何处理元素中的空白
    text-indent: 设置首行缩进长度
    text-decoration: 设置文本的修饰
    text-decoration-color: 设置文本修饰线的颜色
    text-decoration-style: 设置文本的修饰形状
    direction: 文本的方向
    */
    color: red | #333333;
    opacity: 0 | 1;
    font-style: normal | italic | oblique;
    font-weight: 100 | 900 | bold;
    font-size: 10px;
    font-family: Georgia, serif;
    text-align: center | left | right | justify;
    line-height: 10px | 2.5;
    letter-spacing: 2px;
    word-spacing: 4px;
    word-break: break-all | break-word;
    text-indent: 2px;
    text-decoration: overline | line-through | underline ;
    text-decoration-color: red;
    text-decoration-style: solid | double | dotted | wavy;
    direction: ltr | rtl;
}
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Styling_text/Fundamentals  

## CSS 选择器与媒体查询
```css
* { /*通配选择器*/ }
h1 { /*标签选择器*/ }
.box { /*类选择器*/ }
#unique { /*ID 选择器*/ }
a[title] { /*标签属性选择器*/ }
p:first-child { /*伪类选择器*/ }
p::before { /*伪元素选择器*/ }
article p { /*后代选择器*/ }
article > p { /*子代选择器*/ }
h1 + p { /*相邻兄弟选择器*/ }
h1 ~ p { /*通用兄弟选择器*/ }

/*
选择器权重对比:
1. !important
2. 内联样式     1000
3. ID 选择器    100
4. 类选择器     10
5. 标签选择器    1
*/

/*
  指定一个媒体查询和一个 CSS 块
  仅当该媒体查询与正在使用其内容的设备匹配时，该 CSS 块才能应用于该文档
*/
@media screen and (min-width: 900px) {
  p {
    font-size: 10px;
  }
}
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors  

## CSS 取值与单位
```css
p {
    /* 长度单位
      em: 是当前元素相对于父元素字体的大小
      rem: 是当前元素相对于根元素(html)元素的大小
      vw: 相对于视⼝的宽度
      vh: 相对于视⼝的⾼度
      cm: 厘米
      nm: 毫米
      in: 英⼨
      pt: 点(1pt = 1/72in)
      pc: 点(1pt = 1/12in)
      px: 像素(1pt = 1/96in)
    */
    font-size: 1em;
    /* 角度单位
      deg: 度数(⼀个圆360deg)
      grad: 梯度(⼀个圆400grad)
      turn: 圆(一个圆1turn)
      rad: 弧度(1rad)
      90deg = 100grad = 0.25turn ≈ 1.570796326794897rad
    */
    transform: rotate(45deg);
    /* 颜色单位
      red: ⽤颜⾊关键词来指定颜⾊
      HEX: ⼗六进制(#808080)
      RGB: rgb(1,255,123)
      RGBA: rgba(1,255,123,0.1)
      HSL: hsl(0~360，50%，50%)
    */
    color: red;
}
```
## CSS 变形
<img src="./assets/transform.png#pic_center" style="margin: 0 auto"/>

```css
.box {
  /* transform 属性允许你旋转，缩放，倾斜或平移给定元素。这是通过修改 CSS 视觉格式化模型的坐标空间来实现的 */
  /* Function values */
  transform: matrix(1, 2, 3, 4, 5, 6);
  transform: translate(12px, 50%);
  transform: translateX(2em);
  transform: translateY(3in);
  transform: scale(2, 0.5);
  transform: scaleX(2);
  transform: scaleY(0.5);
  transform: rotate(0.5turn);
  transform: skew(30deg, 20deg);
  transform: skewX(30deg);
  transform: skewY(1.07rad);
  transform: matrix3d(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
  transform: translate3d(12px, 50%, 3em);
  transform: translateZ(2px);
  transform: scale3d(2.5, 1.2, 0.3);
  transform: scaleZ(0.3);
  transform: rotate3d(1, 2, 3, 10deg);
  transform: rotateX(10deg);
  transform: rotateY(10deg);
  transform: rotateZ(10deg);
  transform: perspective(17px);

  /* Multiple function values */
  transform: translateX(10px) rotate(10deg) translateY(5px);

  /* 更改一个元素变形的原点 */
  transform-origin: center;
  /* x-offset | y-offset */
  transform-origin: 3cm 2px;
  /* x-offset-keyword | y-offset-keyword | z-offset */
  transform-origin: right bottom 2cm;
}
.box_parent {
  /* 设置元素的子元素位于该元素的平面中 */
  transform-style: flat;
  /* 指示元素的子元素应位于 3D 空间中 */
  transform-style: preserve-3d;

  /* 观察者与 z=0 平面的距离 */
  perspective: none;
  /* 数字越小，距离越近，呈现的图形越大 */
  /* 数字越大，距离越远，呈现的图形越小 */
  perspective: 200px;
  /* 观察者的位置，用作 perspective 属性的消失点 */
  perspective-origin: center;
}
```
## CSS 动画
```css
/* 过渡 */
/* transition: property duration timing-function delay; */
/* transition-property	指定CSS属性的name，transition效果
   transition-duration	transition效果需要指定多少秒或毫秒才能完成
   transition-timing-function	指定transition效果的转速曲线
   transition-delay	定义transition效果开始的时候
   */
.box  {
  /* property	定义应用过渡效果的 CSS 属性名称列表，列表以逗号分隔。 */
  transition-property: none | all | property;
  transition-duration: 10s, 30s, 230ms;
  transition-timing-function: ease | ease-in | ease-out | ease-in-out | linear;
  transition-delay: 2s, 4ms;
}

/* 动画 */
/* 关键帧选择器中添加一个动画 */
@keyframes mymove
{
  from { top:0px; }
  to { top:200px; }
}
@keyframes mymove
{
  0%   { top:0px; }
  25%  { top:200px; }
  50%  { top:100px; }
  75%  { top:200px; }
  100% { top:0px; }
}

.box {
  /* animation-name	指定要绑定到选择器的关键帧的名称
     animation-duration	动画指定需要多少秒或毫秒完成
     animation-timing-function	设置动画将如何完成一个周期
     animation-delay	设置动画在启动前的延迟间隔。
     animation-iteration-count	定义动画的播放次数。
     animation-direction	指定是否应该轮流反向播放动画。
     animation-fill-mode	规定当动画不播放时（当动画完成时，或当动画有一个延迟未开始播放时），要应用到元素的样式。
     animation-play-state	指定动画是否正在运行或已暂停。 
     */
  /* animation: name duration timing-function delay iteration-count direction fill-mode play-state; */
  animation: mymove 1s linear 1s infinite reverse forwards running;
}
```
## CSS Hack
```html
针对不同浏览器的⽀持css能⼒进⾏判断

一、条件Hack

1. 只会在ie浏览器中显示
<!--[if IE]><p>请问</p><![endif]-->

2. 只会在⼤于ie 5 浏览器中显示
<!--[if gt IE 5]><p>请问</p><![endif]-->

3. 只会在⼤于等于ie 5 浏览器中显示
<!--[if gte IE 5]><p>请问</p><![endif]-->

4. 只会在⼩于ie 5 浏览器中显示
<!--[if lt IE 5]><p>请问</p><![endif]-->

5. 只会在⼩于等于ie 5 浏览器中显示
<!--[if lte IE 5]><p>请问</p><![endif]-->

6. 只会在⾮ie 5 浏览器中显示
<!--[if ! IE 5]><p>请问</p><![endif]-->

二、属性级Hack

1. _: IE6
2. \0: IE8/IE9/IE10
3. \9: IE6/IE7/IE8/IE9/IE10

<style>
p {
  _background-color:#CDCDCD;/*ie6*/
}
</style>

三、选择符级Hack
1. *: IE6
2. *+: IE7
```
## CSS 特殊样式
```css
p {
  /*
  pointer-events: 指定在什么情况下 (如果有) 某个特定的图形元素可以成为鼠标事件的 target
  */
  pointer-events: none | auto;
}
.overflow-line {
    display: -webkit-box;         /*流体布局*/
    -webkit-box-orient: vertical; /*子元素的排列方式*/
    -webkit-line-clamp: 2;        /*指定内容将被裁剪后的行数*/
    overflow: hidden;
    text-overflow: ellipsis;
}
```
## CSS Flex布局
```css
1. 可以简便、完整、响应式地实现各种页面布局
2. 弹性布局，为盒状模型提供最大的灵活性
.box {
  display: flex;
  /* 决定主轴的方向 (默认主轴为row水平方向) */
  flex-direction: row | row-reverse | column | column-reverse;
  /* 主轴 (横轴上的对齐方式) */
  justify-content: center | flex-start | flex-end | space-between | space-around | space-evenly;
  /* space-between:首个元素放置于起点，末尾元素放置于终点，弹性盒子之间间距相同 */
  /* space-around: 每个元素周围分配相同的空间 */
  /* space-evenly: 每个元素之间的间隔相等 */

  /* 子项是否都排在一条主轴上 (默认nowrap不换行) */
  flex-wrap: nowrap | wrap | wrap-reverse;
  /* 集合flex-direction和flex-wrap属性值的简写 */
  flex-flow: flex-direction flex-wrap;
  /* 子项相对于主轴的垂直交叉轴如何对齐，主轴为横轴，交叉轴则为垂直交叉 */
  align-items: flex-start | center | flex-end | stretch | baseline;
  /* 定义多根交叉轴线的对齐方式 */
  align-content: flex-start | center | flex-end | stretch | baseline;
}
.box-items {
  /* flex-grow | flex-shrink | flex-basis的简写 */
  flex: 1;
  /* 定义项目的放大比例，0为不放大 */
  flex-grow: <number>; /* default 0 */
  /* 定义项目的缩小比例，1为不缩小 */
  flex-shrink: <number>; /* default 1 */
  /* 定义了在分配多余空间之前，项目占据的主轴空间，初始化元素大小，如设置为固定值，则该项目占据固定空间 */
  flex-basis: <length> | auto; /* default auto */
}
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox  
## CSS 函数
```css
/* 匹配文档树的根元素，声明全局 CSS 变量 */
:root {
  --main-bg-color: coral;
}
.box {
  /* calc(): 动态计算高度，高度为100% - 10px */
  height: calc(100% - 10px);
  /* max(): 设置宽度为最大值，取 50% 或 300px */
  width: max(50%, 300px);
  /* min(): 设置宽度为最小值，取 50% 或 300px */
  width: min(50%, 300px);
  /* var(): 函数用于插入自定义的属性值，如果一个属性值在多处被使用，该方法就很有用。 */
  background-color: var(--main-bg-color);
}
a:after{
  /* attr(): 获取a标签href的属性值，并作为内容添加到a标签后面 */
  content: "attr(href)"
}

```
## CSS BFC
区块格式化上下文（Block Formatting Context，BFC）是 Web 页面的可视 CSS 渲染的一部分，是块级盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域  

BFC决定了元素对其内容定位，以及当前元素与其他元素之间的关系和相互作用。<b>其目的就是形成一个独立的空间，让空间中的子元素不会影响到这个独立空间之外的布局</b>

```css
/* 创建无副作用的 BFC。在父级块中使用 display: flow-root 可以创建新的 BFC */
.parent {
  display: flow-root;
  overflow: hidden;
}
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context