# CSS

**是什么？** 层叠样式表

**作⽤？** 用来描述 HTML 文档的呈现，定义如何显示HTML元素

**如何使⽤？** 
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
  justify-content: center | flex-start | flex-end | space-between | space-around;
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