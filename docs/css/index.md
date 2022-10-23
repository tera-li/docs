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
      static：默认，遵循常规流
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
## CSS选择器
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

选择器权重对比:
1. !important
2. 内联样式     1000
3. ID 选择器    100
4. 类选择器     10
5. 标签选择器    1

```
参考链接：https://developer.mozilla.org/zh-CN/docs/Learn/CSS/Building_blocks/Selectors

**13、⽤户界⾯**
**⼆、选择器**

**1、元素选符器：**

（1）\*：通配选择符 （2）h1，p：标签选择符，元素选择符，类型选择符 （3）#id，p#id：ID选择符

（4）.class：类选择符

**2、关系选择符：**

（1）ul li：包含选择符（li）ul下的li元素

（2）div > p：⼦选择符（p）div内有p的元素 （3）div + p：相邻选择符（p）div后紧跟的p元素 （4）div ~ p：兄弟选择符（p）div后所有的p元素

**3、属性选择符**

（1）a[class]：a标签具有class属性的元素 （2）a[class="demo"]：a标签具有class属性且属性值等于value的元素 （3）a[class~="demo"]：a标签具有class属性且属性值为⼀空格分隔的字词，

只要其中⼀个等于value的元素 （4）a[class^="d"]：a标签具有class属性，属性值以d开头的字符串的元素 （5）a[class$="d"]：a标签具有class属性，属性值以d结尾的字符串的元素 （6）a[class\*=“d”]：a标签具有class属性，属性值为包含d的字符串的元素 （7）a[class|=“demo”]：a标签具有class属性，

属性值以demo开头并⽤连接符“-”分隔的字符串的元素

如果仅为demo，也会选中

**4、伪类选择符**

:link：在a标签没被访问前的样式

:visited：在a标签已被访问过时的样式

:hover：在⿏标悬停在元素上的样式

:active：在⽤户点击与释放之间触发的样式 :focus：在对象成为输⼊焦点时的样式

:lang(en)：匹配lang等于指定语⾔的元素 :not(.demo)：匹配class不等于demo的元素 html:root：匹配元素在⽂档的根元素，根元素永远是html :first-child：匹配该元素的⽗元素的第⼀个⼦元素 :last-child：匹配该元素的⽗元素的最后⼀个⼦元素 :only-child：匹配该元素的⽗元素中仅有⼀个⼦元素E E:only-of-child：匹配该元素的⽗元素中所有⼦元素中那个元素E :nth-child（n）：匹配⽗元素的第n个⼦元素

:nth-child(2n+3)：左数第三个开始，向右匹配2n的元素

:nth-child(-2n+3)：左数第三个开始，向左匹配2n的元素

:nth-child(odd)：1、3、5，奇数的元素

:nth-child(even)：2、4、6，偶数的元素 :nth-last-child（n）：匹配⽗元素的倒数的第n个⼦元素 E:first-of-type：匹配⽗元素下第⼀个类型为E的⼦元素 E:last-of-type：匹配⽗元素下倒数第⼀个类型为E的⼦元素 E:nth-of-type(n)：匹配⽗元素的第n个⼦元素E E:nth-last-of-type(n)：匹配⽗元素的倒数第n个⼦元素E E:empty：匹配没有任何⼦元素的元素E

input:checked：匹配被选择的元素

E:enabled：匹配处于可⽤状态的元素E

E:disabled：匹配处于不可⽤状态的元素E E:target：匹配相关URL指向的元素E（列⼊锚点链接指向的元素） @page:first：⽤于打印⻚⾯第⼀⻚使⽤的样式 @page:left：⽤于⻚⾯容器位于装订线左边的所有⻚⾯使⽤的样式 @page:right：⽤于⻚⾯容器位于装订线右边的所有⻚⾯使⽤的样式 **5、伪对象选择符** E:fitst-letter/E::first-letter：设置对象内第一个字符的样式 E:first-line/E::first-line：设置对象内第一行的样式 E:before/E::before：与content属性一起使用，设置在对象前发生的内容 E:after/E::after：与content属性一起使用，设置在对象后发生的内容 input::placeholder： 设置对象文字占位符样式

1、 input::-webkit-input-placeholder E::selection：设置对象被选中时的样式

1、p::selection

**6、其他**

<!-- 1. :root { --customCss: 'red' }
   1. ⾃定义 css属性，必须由（ --）开头，该属性存储了 red属性值
1. .title { color: var ( --customCss ) }
   1. 使⽤⾃定义 css使⽤ var()属性值包括⾃定义 css属性
1. .title { height: calc( 100vh - 100px ) }
   1. 属性值计算函数， + - \* / 都可以计算
1. filter（滤镜）属性 -->

a. filter: opacity (10%) blur(2px) sepia(35% | 0.35)

1. opacity(10%)：元素透明度
1. sepia(.35)：为元素添加褐⾊滤镜

**三、语法规则**

!important：提升指定样式的规则应用优先权 /\*\*/：css注释

@import：导入外部样式表或媒体

1、url（）

2、指定媒体类型和查询条件

screen and (max-width:500px) @charset：指定该样式表使用的字符编码 @media：该样式表规则指定媒体类型和查询条件

1、@media all and (max-width:500px) @font-face：设置嵌入HTML文档的字体

1、identifier：字体名称

2、src: url：字体存放路径

3、string：自定义字体格式类型

4、font：定义字体相关样式

1、font-family: ''、font-weight: normal；              5、针对普通、粗体、斜体的不同文本设置不同字体样式配置：

\1. font-style: normal、 font-weight： bold、 font-style： italic

@page:first：设置页面容器的版式、方向、边空

1、@page:first{margin:300px} @keyframes：指定动画名称和动画效果

1、identifier：定义动画名称

2、定义动画每个阶段的样式，帧动画

0%~100%，from~to      @supports：检测是否支持某css特性

1、指定一条具体的css规则，必须用括号包裹

2、operator：使用or|and|not等操作符指定多条规则

**四、取值与单位**

1、⻓度

（1）em：相对于当前对象内⽂本的字体尺⼨（1em === 14px） （2）ex：相对于“x”的⾼度，通常为字体⾼度的⼀半 （3）ch：数字“0”的宽度 （4）rem：相对于html元素font-size计算值的倍数 （5）视⼝相对⻓度单位

（1）vw：相对于视⼝的宽度

（2）vh：相对于视⼝的⾼度

（3）vmax：相对于视⼝的宽度或⾼度，总是相对于⼤的那个

（4）vmin：相对于视⼝的宽度和⾼度，总是相对于⼩的那个 （6）绝对⻓度单位

（1）cm：厘⽶

（2）nm：毫⽶

（3）q：1/4毫⽶（1q = 0.25mm）

（4）in：英⼨（1in = 2.54cm）

（5）pt：点（1pt = 1/72in）

（6）pc：派卡（1pc = 12pt）

（7）px：像素（1px = 1/96in）

2、⻆度

（1）deg：度数（⼀个圆360°） （2）grad：梯度（⼀个圆共400梯度） （3）turn：圆（⼀个圆1圈）

（4）rad：弧度（⼀个圆共2n弧度）

90deg = 100grad = 0.25turn ≈ 1.570796326794897rad

3、时间

（1）s：秒

（2）ms：毫秒

4、频率

（1）Hz：频率单位（低⾳或者⾼⾳）

（2）kHz：频率单位（1000Hz = 1kHz） 5、分辨率

（1）dpi：每英⼨包含点的数量 （2）dpcm：每厘⽶包含点的数量 （3）dppx：每像素包含的数量

1dppx = 96dpi；1dpi ≈ 0.39dpcm；1dpcm ≈ 2.54dpi

6、颜⾊

（1）Color Name：⽤颜⾊关键词来指定颜⾊（red，green） （2）HEX：⼗六进制（#808080） （3）RGB：RGB记法（rgb（1,255,123）） （4）RGB：RGBA记法（rgba（1,255,123，0.1））（红，绿，蓝，透明度） （5）HSL：HSL记法（hsl（0~360，50%，50%））

（⾊调：0=红⾊，120=绿⾊，240=蓝⾊；饱和度，亮度） （6）HSLA：HSLA记法（hsl（0~360，50%，50%，0.5））（透明度） （7）transparent：指定全透明⾊彩（透明度：0） （8）currentColor：属性值（使⽤该元素的color属性值或者是最近⽗元素的颜⾊值）

（color会继承⽗元素的颜⾊值）

7、⽂本

（1）inherit：该值使得属性能够继承祖先设置（position：inherit） （2）initial：属性初始值（list-style：initial） （3）unset：擦除属性申明（unset == initial）

8、函数

（1）calc：动态计算⻓度值（width: calc(100% - 50px)）可以使⽤加减乘除

（2）toggle：允许⼦孙元素使⽤取值序列中的值循环替换继承⽽来的值 9、⽣成图像

（1）counter()：插⼊计数器

（2）counters()：重复插⼊计数器

（3）attr()：插⼊元素的属性值（content: "("arrt(title)")"）

（1）title：属性值的内容赋值给content

10、图像

（1）image()：指定输出图像或者图像替代（url，black） （2）image-set()：可以根据⽤户设备的分辨率匹配合适的图像

<!-- （1）<url()> | <string> （3）gradient：允许使⽤简单的语法实现颜⾊渐变 -->

（1）linear：线性渐变（直线），radial：径向渐变（圆形） repeating-linear-gradient：重复线性渐变（直线） repeating-radial-gradient：重复径向渐变（圆形）

（2）⽅向或⻆度，color length或百分⽐(颜⾊起⽌位置)，color， （3）linear-gradient

1. to right：线性渐变从左到右渐变
1. 0 deg是横向的，顺时针旋转，

（4）radial-gradient

\1. to top right：径向渐变的中⼼点在右上⻆

<!-- ![](./assets/Aspose.Words.51080e53-b624-496e-a2bf-85f790ccec0c.005.png) -->

1 background: linear-gradient( 2    135deg,  // 旋转135°开始渐变 3    transparent 0,

4    transparent 15%,

5    #ed8c8c 15%,

6    #ed8c8c 40%,

7    #eee 40%,

8    #eee 60%,

9    #9acbef 60%,

10    #9acbef 85%,

11    transparent 85%,

12    transparent 100%

13 );

14 background-size: 100rpx 16rpx;

11、数字

（1）number：属性值需要在约束范围内 （2）integer：整数 （3）percentage：百分⽐

**五、CSS Hack**

针对不同浏览器的⽀持css能⼒进⾏判断 **1、条件Hack**

（1）只会在ie浏览器中显示

<!--[if IE]><p>请问</p><![endif]--> （2）只会在⼤于ie 5 浏览器中显示

<!--[if gt IE 5]><p>请问</p><![endif]--> （3）只会在⼤于等于ie 5 浏览器中显示

<!--[if gte IE 5]><p>请问</p><![endif]--> （4）只会在⼩于ie 5 浏览器中显示

<!--[if lt IE 5]><p>请问</p><![endif]-->

（5）只会在⼩于等于ie 5 浏览器中显示

<!--[if lte IE 5]><p>请问</p><![endif]--> （6）只会在⾮ie 5 浏览器中显示

<!--[if ! IE 5]><p>请问</p><![endif]--> **2、属性级Hack**

选择不同浏览器及版本

（1）\_：选择IE6及以下

（2）\*：选择IE7及以下

（3）\9：选择IE8+ （4）\0：选择IE8+和Opera15以下的浏览器

color: #090\9; /\* For IE8+ \*/

\*color: #f00; /\* For IE7 and earlier \*/ \_color: #ff0; /\* For IE6 and earlier \*/

**3、选择符级Hack**

选择不同浏览器及版本 （1）\*：选择IE6及以下 （2）\* + ：选择IE7
