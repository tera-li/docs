pointer-events：该元素在什么情况下可以成为鼠标事件的target（元素）

none：该元素不会成为鼠标事件的target

（相当于禁用:hover、onmouse等target的鼠标事件）

auto：默认值，什么情况下都可以成为鼠标事件的target

display:-webkit-box;    // 盒子模型弹性伸缩盒

-webkit-box-orient: vertical;  // 伸缩盒子的子元素垂直排列

-webkit-line-clamp: 3;   // 文本显示3行

overflow: hidden;    // 超出部分隐藏

text-overflow: ellipsis;   // 超出部分使用省略号...表示

width: 100px;    // 需要定义宽度

white-space: nowarp;  // 文本不会换行，单行超出隐藏使用...表示

.overflow-line {

`    `display:-webkit-box;

`    `flex-direction: column;

`    `-webkit-line-clamp: 2;

`    `overflow: hidden;

`    `text-overflow: ellipsis;

`    `width: 160px;

}

