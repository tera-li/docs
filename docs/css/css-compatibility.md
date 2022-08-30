条件注释

在不同浏览器版本直接指定特定的样式

<!-- [if IE]>

<link rel=“stylesheet” type="text/css" href="index.css">

<![endif]-->

css函数

calc() 动态计算长度

height:calc(100% - 10px) || width:calc(100% - 30px)

高度为100%-10px的高度

<!-- attr(href) 获取元素的属性值 -->

<!-- a:after{content: "attr(href)"} -->

获取a标签的href的属性值，并作为内容添加到a标签后面