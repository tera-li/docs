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
visibility: visible | hidden;
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
```

## CSS 背景与边框
```css
boder：定义边框样式（宽度，样式，颜⾊）

box-shadow：定义元素阴影

（x轴⽔平偏移，y轴垂直偏移，阴影模糊半径，阴影⼤⼩，阴影颜⾊） （正值：阴影在右侧，底部，模糊+，向四周扩散，颜⾊） （负值：阴影在左侧，顶部，最⼩为0，向⾥收缩，颜⾊）

border-radius：定义元素圆⻆

（x/y，⽔平半轴，垂直半轴）

（border-top-left-radius，border-top-right-radius）

（border-bottom-left-radius，border-bottom-right-radius） border-image：定义边框图像

（source，slice，width，outset，repeat） （1、图像路径：url()或渐变。2、分割（上右下左，百分⽐）。3、图像厚度（number）） （4、向外偏移的距离（number）。5、定义分割图像怎样填充边框图像区域） repeat：stretch：使⽤拉伸⽅式填充边框图像区域

repeat：重复平铺来填充边框图像，超出边框截断图像

round：和repeat相似，不能以整数平铺，会根据情况伸缩 space：与repeat相似，不能以整数平铺，会⽤空⽩间隙填充在图像周围

background：定义背景图像 （image，position，size，repeat，attachment，origin，clip，color） 1、image 背景图像：url（）或渐变。

<!-- ![](./assets/Aspose.Words.51080e53-b624-496e-a2bf-85f790ccec0c.001.png) -->

2、repeat 背景图像如何填充

（repeat-x，repeat-y，repeat，no-repeat，round，space） （横向平铺，纵向平铺，横向和纵向，不平铺(只显示⼀张) round：不能以整数平铺，会根据情况伸缩 space：不能以整数平铺，会⽤空⽩间隙填充在图像周围）

3、attachment 定义滚动时背景图像相对于谁固定

（fixed：相对于视⼝viewport固定。scroll，local）

4、position 背景图⽚在元素中出现的位置（top，right，bottom，left，px或百分⽐） 5、origin 指定的背景图像计算‘background-position’ 时参考原点（位置）

border-box：从border区域开始显示，

padding-box：从padding区域开始显示， content-box：从content区域开始显示背景图像

6、size 背景图像的尺⼨（px或百分⽐）

auto：原本⼤⼩ cover：等⽐完全覆盖容器，有可能超出容器**，⾼度过⻓，会超出容器并裁剪** contain：等⽐缩放⾼度和宽度与容器相等，始终在容器内**，会留⽩**

7、clip 背景图像向外裁剪的区域（除指定区域的内容绘制，以外的内容不绘制背景区域） border-box：从border区域开始向外裁剪， padding-box：从padding区域开始向外裁剪， content-box：从content区域开始向外裁剪图像 text：按照前景内容或⽂字作为裁剪区域，向外裁剪

**clip-path**：裁剪元素，创建元素可显示区域，区域内显示，区域外隐藏

1. circle(50%)：裁剪为原型，值为半径
1. ellipse(x,y at x%,y%)：
1. 裁剪为指定 x轴， y轴的半径
1. x%， y%指定原型中⼼点位置
3. polygon(50% 0%,100% 50%,50% 100%,0% 50%)：
1. 定义多边形每个⻆的 position
1. 填充规则，如何填充多边形
```


## CSS 字体与颜⾊
```css
**5、**

color：定义元素或对象的颜⾊

opacity：定义元素不透明度（0~1）⼦元素拥有相同透明度
**6、** font：定义⽂本特性（style，variant，weight，size，family，stretch，size-adjust）

1、style：⽂本样式

normal：正常字体

italic：斜体

oblique：倾斜的斜体 2、variant：定义字体为⼩型的⼤写字⺟（small-caps） 3、weight：定义字体粗细（normal，bold（700），number（100~900））

（bolder：定义⽐继承值更重的值。lighter：定义⽐继承更轻的值） 4、family：字体名称

5、streth：元素⽂字是否横向拉伸变形

6、size-adjust：定义元素的 aspect 值，⽤以保持⾸选字体的 x-height **7、⽂本** text-transform：⽂本如何转换⼤⼩写（none，capitalize，uppercase，lowercase）

1、none：⽆转换

2、capitalize：每个单词第⼀个字⺟转换为⼤写 3、uppercase：每个单词转换为⼤写

4、lowercase：每个单词转换为⼩写                  white-space：元素是否保留⽂本空格、换⾏、是否⾃动换⾏

1、normal：默认

2、pre：原封不动保留输⼊的状态

3、nowrap：强制⽂本在同⼀⾏内显示

4、pre-warp：与pre⼀致，超出边界会⾃动换⾏

5、pre-line：与normal⼀致，会保留⽂本输⼊时的换⾏ tab-size：定义内容制表符的⻓度（number）2等于⼀个字符

\1. 必须在 pre元素中使⽤才会使 tab的⻓度等于规定的⻓度

word-break：内容⽂本的换⾏⾏为

1、normal：默认规则换⾏⾏为

2、kepp-all：对中⽂，韩⽂，⽇⽂不允许换⾏

3、break-all：允许任意字符换⾏ 4、break-word：允许换⾏，保持单词为整体单位，当⼀⾏放不下时，换⾏到第⼆⾏

overflow-warp：break-word效果与之相同 word-wrap：允许⻓单词或者⻓URL换⾏到下⼀⾏

1、normal：允许的断字段换⾏（默认）

2、break-word：⻓单词或URL地址内部进⾏换⾏ text-align：内容⽔平对⻬⽅式

1、left、center、right

2、justify：内容两端对⻬

3、start：内容对⻬开始边界

4、end：内容对⻬结束边界

5、match-parent：会继承start或end，表现为left或right

6、justify-all：与justify相同，不同的是最后⼀⾏也会两端对⻬ text-align-last：块⽂本内容的最后⼀⾏（与text-align相同） text-justify：⽤什么⽅式实现⽂本内容两端对⻬ word-spacing：单词之间的额外间隙（单词空格的宽度）

1、px或百分⽐间隔

letter-spacing：字符之间的额外间隙

1、px

text-indent：块内⽂本内容的缩进

1、px或百分⽐

vertical-align：⾏内元素在框内的对⻬⽅式

1、baseline：当前盒的基线与⽗级盒基线对⻬ 2、sub：降低到⽗级盒的下标位置

3、super：提升到⽗级盒的上标位置 4、text-top：当前盒top和⽗级内容区的top对⻬ 5、text-bottom：当前盒的bottom盒⽗级内容区的bottom对⻬ 6、middle：当前盒的垂直中⼼和⽗级盒的基线加上⽗级的半x-height对⻬ 7、top：当前盒的top与⾏盒的top对⻬ 8、bottom：当前盒的bottom与⾏盒的bottom对⻬

9、px，0 === baseline，把当前盒提升或降低 line-height：元素中⾏框的最⼩⾼度

1、normal：允许内容丁凯或溢出指定的容器边界

2、px，不允许负值

3、百分⽐，基于⽂本font-size进⾏换算

4、number，⽤乘积因⼦指定⾏⾼                      text-size-adjust：定义移动端⻚⾯中元素⽂本⼤⼩如何调整

1、auto：根据设备尺⼨进⾏调整

2、none：不会根据设备进⾏调整

3、百分⽐
```
**8、⽂本装饰**

text-decoration：元素⽂本装饰

1、none：⽆装饰

2、underline：下划线

3、overline：上划线

4、line-through：贯穿线

5、blink：闪烁

text-decoration-line：元素⽂本装饰线条（同上）

text-decoration-color：装饰条颜⾊

text-decoration-style：装饰条的形状

1、solid：实线

2、double：双线

3、dotted：虚线

4、dashed：虚线

5、wavy：波浪线

text-decoration-skip：元素装饰线跳过的内容

1、none：不跳过

2、objects：跳过原⼦内联级盒（如图⽚或内联块）

3、spaces：跳过空⽩

4、ink：跳过字符绘制处

5、edges：⽤户代理应当将装饰线的起始、结束为⽌在⽂本内容边缘更靠内的为⽌，使得两个 紧密相邻的元素的下划线不会显示为⼀条下划线（对于中⽂，下划线是标点符号） text-underline-position：元素装饰线的位置

text-shadow：⽂字是否有阴影

（x轴⽔平偏移，y轴垂直偏移，阴影模糊度，颜⾊）

（px，px，px，color）

**9、书写模式**

direction：⽂本流的⽅向

1、ltr：从左到右

2、rtl：从右到左

unicode-bidi：同⼀个⻚⾯存在从不同⽅向读进的⽂本显示

1、normal：对象不打开附加的嵌⼊层，对于内联元素，隐式重排跨对象边界进⾏⼯作

2、embed：对象打开附加的嵌⼊层，direction指定嵌⼊层

3、bidi-override：严格按照direction属性的值重排序 writing-mode：对象的内容块固有的书写⽅向

1、lr-tb：⽅向是--左右，上下

2、tb-rl：⽅向是--上下，右左 3、horizontal-tb：⽔平⽅向⾃上⽽下 4、vertical-rl：垂直⽅向⾃右⽽左 5、vertical-lr：垂直⽅向⾃左⽽右

**10、列表**

list-style：列表样式

1、list-style-image：列表项标记图像 2、list-style-position：列表项⽬标记的位置

（1）outset：列表项⽬标记放置在⽂本外

（2）inside：列表项⽬标记放置在⽂本内 3、list-style-type：列表项⽬标记的预设标记

（1）disc：实⼼圆

（2）circle：空⼼圆

**11、表格**

table-layout：表格的布局算法 1、auto：默认⾃动算法，基于单元格的内容

2、fixed：固定布局算法，基于table的宽度 **1、单元格不会被图⽚等撑开**

border-collapse：⾏和单元格的边是合并还是独⽴的

1、separate：边框独⽴

2、collapse：相邻边合并 border-spacing：⾏和单元格在横向和纵向上的间距

1、number，（两个arguments时，左右，上下） caption-side：表格的caption对象实在表格的那⼀边

1、top：指定caption在表格上边

2、bottom：指定caption在表格下边

firefox⽀持left and right empty-cells：表格单元格⽆内容时，是否显示该单元格的边框

1、hide：隐藏边框

2、shwo：显示边框

**12、内容** content：使⽤:after和:before伪元素⼀起使⽤，在对象前或后显示内容

1、normal和none，默认值，不现实任何值 2、attr（）插⼊标签属性

3、url（）插⼊图⽚

4、string：字符串 5、counter(name)：使⽤已命名的计数器

6、counter(name，list-style-type)：同上，遵从指定list-style-type属性 content-increment：定义⼀个selector发⽣时计数器增加的值

1、arg1：定义⼀个或多个将被增加的selector，id或class

2、arg2：每次增加的数值，默认值是1

counter-reset：将指定selector的计数器复位

1、arg1：定义⼀个或多个将被复位的selector，id或class

2、arg2：定义被复位的数值，可以为负数，默认值是0 quotes：设置对象内使⽤嵌套标记

1、使⽤open-quote和close-quote，如：<q></q>

quotes：‘【’‘】’ “《”“》”

**13、⽤户界⾯**

text-overflow：定义内联内容溢出块容器时是否截断或添加...代替字符

1、clip：溢出裁剪掉

2、ellipsis：溢出⽤...省略号表示

white-space：nowarp 强制同⼀⾏显示

appearance：设置外观按照本地默认样式

button，radio，none，checkbox等等

outline：设置边框线条外轮廓

width，style，color

1px solid red

outline-offset：定义外轮廓偏移

number，不占据布局空间，不影响元素尺⼨

cursor：⿏标光标指针形状

1、url：使⽤外部图像作为光标形状

2、auto：⽤户代理基于当前上下⽂决定光标形状 3、pointer、help、wait、no-drop、not-allowed

zoom：对象的缩放⽐例

1、normal：对象的实际尺⼨

2、number：⽤浮点数来定义缩放⽐例

3、百分⽐缩放

box-sizing：定义对象盒模型组成模式

1、content-box：标准盒模型（默认）

element width = width + padding + border

对元素增加padding、border会增加这个元素的宽度，会向外挤压，实际div元素不会变 2、border-box：怪异盒模型

element width = width - padding - border 对元素增加padding、border不会增加这个元素宽度，会向内挤压，实际div元素变⼩

这个最⼤的好处就是你div盒⼦有好⼏个，⽽且有不同的padding和border值，解决这个的 最好的⽅法就是给盒⼦设置border-box，每个盒⼦的宽度和⾼度将会⼀直，不会撑⼤ resize：设置对象的区域是否允许⽤户缩放，调节元素尺⼨⼤⼩

1、none：不允许调整元素⼤⼩

2、both：⽤户可以⾃动调节元素的宽度和⾼度

3、horizontal：⽤户可以调节宽度

4、vertical：⽤户可以调节⾼度

user-select：是否允许⽤户选中⽂本

1、none：⽂本不能被选择

2、text：可以选择⽂本

3、all：当所有内容作为⼀个整体时可被选择， 如果双击该元素⼦元素，那么选择部分将是该⼦元素的最⾼祖先元素 4、element：可以选择⽂本，但选择范围受元素边界的约束 **pointer-events**：设置在何时成为属性事件的target（可以禁⽌button的所有效果） 1、auto：与pointer-events属性未指定时的表现效果相同 2、none：元素永远不会成为⿏标事件的target(如a标签⽆法点击跳转)

**-webkit-inner-spin-button**：

1、清除input输⼊框type=“number”后⾯的上下⼩箭头

**14、多列**

columns：设置对象的列数和每列的宽度，复合属性

1、width：每列宽度（px）

2、count：列数（number）

3、gap：设置列与列之间的间隙（length（px，em）） column-rule：设置对象的列与列之间的边框

1、width：列与列之间的边框厚度

2、style：列与列之间的边框样式

3、color：列与列之间的边框颜⾊

10px double red

column-span：设置对象元素是否横跨所有列

1、none：不跨列

2、all：横跨所有列

column-fill：设置对象所有列的⾼度是否统⼀

1、auto：列⾼度⾃适应内容

2、balance：所有列的⾼度以其中最⾼的⼀列统⼀ column-break-before：设置对象之前是否断⾏

1、auto：既不强迫也不禁⽌在元素之前断⾏并产⽣新列

2、always：总是在元素之前断⾏并产⽣新列

3、avoid：避免在元素之前断⾏并产⽣新列 column-break-after：设置对象之后是否断⾏ column-break-inside：设置对象内部是否断⾏

**15、伸缩盒** flex：设置或检索弹性盒模型对象的⼦元素如何分配空间flex.note **16、变换**

transform：设置对象的转换

/\* width: 200px; \*/

/\* height: 200px; \*/

1、旋转 平⾯旋转度数

transform: rotate(180deg);

沿X轴旋转180度

transform: rotateX(180deg);

沿Y轴旋转180度

transform: rotateY(180deg);

2、矩阵变换 2D转换，6个值得矩阵，控制变形效果

transform: matrix(2, 2, 0, 2, 45, 0);

-webkit-transform: matrix(2, 2, 0, 2, 45, 0);

3、移动 2d3d转换移动

-webkit-transform: translate3d(45px, 1em, 80px); transform: translate(45px, 1em);

沿X轴

transform: translateX(30px);

沿Y轴

transform: translateY(30px);

transform: translateZ(50px);

4、缩放 缩放

transform: scale(2);

沿X轴

transform: scaleX(3);

沿Y轴

transform: scaleY(2);

沿着 X 和 Y 轴的 2D 倾斜转换

5、扭曲（斜切） transform: skew(180deg);

沿着 X 轴的 2D 倾斜转换

transform: skewX(180deg);

沿着 Y 轴的 2D 倾斜转换

transform: skewY(180deg);

6、指定透视距离（视点离屏幕的距离）

perspective: 200px; 必须定义perspective才能是3D图像

<!-- ![](./assets/Aspose.Words.51080e53-b624-496e-a2bf-85f790ccec0c.002.png) -->

<!-- ![](./assets/Aspose.Words.51080e53-b624-496e-a2bf-85f790ccec0c.003.png) -->

transform-origin：设置对象以某个原点进⾏转换

1、百分⽐指定坐标

2、⻓度值指定坐标值（px）

3、left：原点横坐标为left（right）

4、top：原点纵坐标为top（bottom）

5、center①②：原点横坐标的center（纵坐标的center） transform-style：指定某元素的⼦元素为三维空间，还是该元素所在的平⾯内被扁平化

1、flat：指定⼦元素位于此元素所在平⾯内

2、preserve-3d：指定⼦元素定位在三维空间内 perspective：观察者与【z=0】平⾯的距离，具有三维位置变换的元素产⽣透视效果

1、【z>0】的三维元素⽐正常⼤

2、【z<0】的三维元素⽐正常⼩

3、length：z（平⾯的距离） perspective-origin：指定透视点位置（同上，transform-origin） backface-visibility：指定元素背⾯是否可⻅，⽤于preserve-3d

1、visible：指定背⾯可⻅，允许显示正⾯的镜像

2、hidden：指定元素背⾯不可⻅

**17、过渡**

transition：设置对象变换时的过渡

1、property：过渡属性（css属性如：all，width，border-color） 2、duration：过渡持续时间（s） 3、timing-funciton：动画类型（easy，ease-in） 4、delay：延迟过渡时间（s）

all，10s，ease-in-out，3s

**18、动画**

animation：设置对象所应有的动画特效

1、name：动画名称（myname）

2、duration：动画持续时间（s） 3、timing-function：过渡类型（ease，ease-in，linear） 4、delay：动画延迟时间（s） 5、iteration-count：循环次数）（infinite⽆限循环，number） 6、direction：循环中是否反向运动

（1）reverse：反向运动

（2）alternate：先正常运⾏再反向运⾏，持续交替运⾏

（3）alternate-reverse：动画先反向再正⽅向运⾏，持续交替运⾏ 7、fill-mode：动画时间之外的状态

（1）none：默认值

（2）forwards：状态为动画结束时的状态

（3）backwards：状态为动画开始时的状态

（4）both：状态为动画结束或开始的状态 8、paly-state：设置对象动画的状态

（1）running：运动

（2）paused：暂停

结合**@keyframes** 动画名称进⾏运动

from（0%）

to（100%）

0%~100%

\1. steps()：是⼀个 timing function，将 animation动画分割成段，使动画不是从⼀种状态持续到另⼀种

状态的过渡

a. steps(5)：会将整个动画时⻓平均分割，以帧的⽅式过渡（表示动画没有过渡效果）

<!-- ![](./assets/Aspose.Words.51080e53-b624-496e-a2bf-85f790ccec0c.004.png) -->

**19、打印**

page：指定显示对象容器时使⽤的⻚⾯类型 page-break-before：设置对象之前出现的⻚分隔符

1、auto：如果需要，在对象之前插⼊分隔符

2、always：始终在对象之前插⼊分隔符

3、avoid：避免在对象前⾯插⼊分隔符

4、left：在对象前⾯插⼊分隔符，直到到达⼀个空⽩的左⻚边

5、right：在对象前⾯插⼊分隔符，直到到达⼀个空⽩的右⻚边 page-break-after：设置对象之后出现的⻚分隔符 page-break-inside：设置对象容器内部出现的⻚分隔符

1、auto：如果需要，在对象内部插⼊分隔符

2、avoid：避免在对象内部插⼊分隔符

**20、媒体查询**

1. @media all**（** screen**）** and (max-width: 200px)
1. @import url('html.css') screen and (max-width: 200px) and...
1. <link href="html.css" media="screen and (max-width: 200px)" />

1、all：⽤于所有设备 2、screen：⽤于电脑，平板，⼿机 3、speech：屏幕阅读器等发声设备 4、print：打印机和打印机预览

width：输出设备中⻚⾯可⻅区域宽度

1、min-width，max-width height：输出设备中⻚⾯可⻅区域⾼度

2、min-height，max-height device-width：输出设备的屏幕可⻅宽度

1、min-device-width，max-device-width device-height：输出设备的屏幕可⻅⾼度

1、min-device-height，max-device-height        orientation：输出设备中⻚⾯可⻅区域⾼度是否⼤于或等于宽度

1、portrait：输出可⻅区域⾼度⼤于或等于宽度 height >= width ？true ： false

2、landscape：除portrait值以外的情况 height < width ？true : false aspect-ratio：输出设备中的⻚⾯可⻅区域宽度与⾼度的⽐率

1、⽐值：20/11

device-aspect-ratio：输出设备的屏幕可⻅宽度与⾼度的⽐率

1、⽐值：20/11

2、min-device-aspect-ratio，max-device-aspect-ratio color：输出设备每⼀组彩⾊原件的个数，如果不是彩⾊设备，则值等于0

1、color:0（integer）

2、min-color：1，max-color：2 color-index：输出设备的彩⾊查询表中的条⽬数，如没有使⽤彩⾊查询表，则值等于0

1、color-index：0

2、min-color-index，max-color-index monochrome：定义在⼀个单⾊框架缓冲区中每像素包含的单⾊原件个数， 如果不是单⾊设备，则值等于0

1、monochrome：0

2、min-monochrame，max-monochrome resolution：定义设备分辨率（dpi）

1、min-resolution，max-resolution

scan：电视类设备的扫描⼯序

1、progressive：连续扫描

2、interlace：交织扫描

grid：查询输出设备是否使⽤栅格或点阵

1、1代表是，0代表否

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
