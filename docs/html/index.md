# HTML

**是什么？** 超文本标记语言

**作用？** 构建网页，超链接，图像，音频，文本等（ **定义网页内容，渲染页面** ）

**写法：**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="description" content="这是一个网页" />
    <title>Document</title>
    <style type="text/css"></style>
    <link href="index.css" type="text/css" rel="stylesheet" \>
    <script></script>
  </head>
  <body></body>
</html>
```
## HTML常见标签及属性

1. **\<!DOCTYPE html\>**
```
文档声明，html5标准网页声明
```
2. **\<head></head\>**
```
定义文档的头部，可以放置一些元素
```
3. **\<meta />**
```
描述 html 文档的元数据

name 供浏览器进行解析，如解决浏览器兼容问题
  - title 浏览器标题
  - keywords 网站关键字
  - description 描述
  - author 网页开发者信息，作者
  - copyright 版权信息
  - viewport 视口，定义移动端缩放
    1. width：正整数或 device-width，视口宽度
    2. height：正整数或 device-height，视口高度
    3. initial-scale：(0~10)初始缩放值
    4. minimum-scale：(0~10)缩小最小比例
    5. maximum-scale：(0~10)放大最大比例
    6. user-scaleble：(yes/no)是否允许用户手动缩放页面
    7. scheme 指定翻译属性值得方案
```
4. **\<style /\>**
```
html文档定义样式信息
  - type="text/css"：规定样式表的 MIME 类型
  - MIME 类型 MIME (Multipurpose Internet Mail Extensions) 是 描述消息内容类型的标准，用来表示文档、文件或字节流的性质和格式
```
5. **\<link /\>**
```
定义文档与外部资源的关系、链接样式表
```
6. **\<script /\>**
```
定义客户端脚本
  - async：可选。表示应该立即下载脚本，但不应妨碍页面中的其他操作，比如下载其他资源或等待加载其他脚本。只对外部脚本有效
  - defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本有效
  - src：可选。表示包含要执行代码的外部文件
  - type：可选。可以看成是language的替代属性；表示编写代码使用的脚本语言的内容类型（也称为MIME类型）
```
7. **\<body>\</body>**
```
定义文档内容显示的主体
```
8. **块级标签**
```
独占一行，不与其他元素所处一行

div,p,h1~h6,ul>li,ol>li,dl>dt>dd,table,form,pre
header,footer,main,aside,section,audio,video,article,canvas
object（定义内嵌对象）
```
9. **行内标签** ：
```
与其他行内元素所处一行

span,a,strong,em,b,big,i,small,sub,sup,code
button,input,label,select,textarea,img
```
10. **文本标签：** 
```
strong(着重点粗体),em(着重点斜体),i(斜体),b(粗体),small(小号字)
p(标签引用),blockquote(长引用),sup(上标),sub(下标),del(删除线)
pre(预格式化文本),code(代码样式),abbr(缩写),dfn(标记特殊术语)
addres(定义联系信息或地址),mark(凸显文字,使其文字背景为黄色)
a(定义超链接)
```
11. **列表：**
```
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.</dd>
</dl>
```
12. **无序列表：**
```
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
</ul>
```
13. **有序列表：** 
```
<h4>有序列表</h4>
<ol>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
</ol>

reversed(对列表进行降序)，start(列表开始点)，type(开头符号类型：1，I，A)
```
14. **表格：** 
```
<table border="1">
  <tr>
    <th>Month</th>
    <th>Savings</th>
  </tr>
  <tr>
    <td>January</td>
    <td>$100</td>
  </tr>
</table>

<thead>  <tbody>  <tfoot>
caption(表格标题)，align(对齐方式)，border(边框宽度)
cellspacing(表格内框宽度)，cellpadding(表内文字与边框的距离)
bgcolor(背景颜色)，background(背景图像)，
td(rowspan(合并行)，colspan(合并列))
```
15. **音频：** 
```
<audio controls>
  <source src="horse.mp3" type="audio/mpeg">
  <source src="horse.ogg" type="audio/ogg">
  Your browser does not support this audio format.
</audio>

属性：controls(控件)，height，width，autoplay(视频就绪后自动播放)
loop(视频播放结束重新播放)，muted(声音静音)，src(音频文件的 URL)
preload(预加载，是否加载视频:none(不载入)，auto(载入整个音频)，meta(只载入元数据))
poster（海报图像，加载视频显示的第一帧图片）
```
16. **视频：** 
```
<video controls>
  <source src="horse.mp3" type="video/mpeg">
  <source src="horse.ogg" type="video/ogg">
  Your browser does not support this video format.
</video>

ele.autoplay：获取 video 的 autoplay 属性或设置该属性（设置自动播放）
ele.controls：获取 video 的 controls 属性或设置该属性（设置控件）
ele.currentLoop：获取该媒体已经播放的循环次数
ele.loop：获取 video 的 loop 属性或设置该属性（设置播放循环）
ele.played：获取目前为止已经播放的时间范围（range）
ele.currentTime：获取 video 已经播放的秒数时间或设置该属性（设置播放时间）
ele.duration：获取该媒体 video 的总秒数时间
ele.playbackRate：获取 video 当前的播放速率或设置该属性（设置播放速率）
ele.ended：表示该媒体是否播放完毕
ele.muted：获取 video 的 muted 属性或设置该属性（设置是否禁音）
```

1.  方法：

# **HTML5**

# **标签**

**1\*\*** 、 \***\*html\*\*** 排版\*\*

header（section 或 page 的页面）

nav（导航链接）

section（html 区段）

article（文章）

aside（页面内容之外的内容）

footer（section 或 page 的页脚）

**2\*\*** 、图像，音频\*\*

audio（音频）

video（视频标签）

source（媒介源，在 video 和 audio 中使用）

1. src：视频 url
2. type：video/mp4，video/ogg，视屏类型，帮助浏览器是否能播放该视频
3. media：为视频指定 css3 媒体查询，为不同屏幕尺寸的设备指定不同（更小的）视频

canvas（图形）

**3\*\*** 、下拉框\*\*

datalist（下拉列表，可以定义 input 的值）{

通过 input 实现，定义 list 与 datalist 的 id 相对应

datalist 包裹 option

\<input id="myCar" list="cars" /\> \<datalist id="cars"\> \<option value="BMW"\> \<option value="Ford"\> \<option value="Volvo"\> \</datalist\>

}

details（元素的细节）

summary（为 details 元素定义可见的标题）

**4\*\*** 、其他\*\*

**(1)\*\***对话框\*\*

dialog（对话框或窗口）

**(2)\*\***引入插件 \***\*url**

embed（外部交互内容或插件，URL）

**(3)\*\***独立文本区域\*\*

figure（媒介内容的分组，规定独立的流内容(图像，图标，照片)）

figcaption（figure 元素的标题）

**(4)\*\***秘钥\*\*

keygen（生成密钥）

**(5)\*\***进度条\*\*

meter（预定义范围内的度量）（value，min，max）

progress（任何类型的任务的进度）（value，max）

**(6)\*\***输入输出\*\*

option（选择列表中的选项）

output（输出的一些类型）

**(7)\*\***注释（如汉字的拼音）\*\*

ruby（ruby 注释，旁注标记）

rt（ruby 注释的解释）

rp（若浏览器不支持 ruby 元素显示的内容）

\<ruby\> 漢 \<rt\>\<rp\>(\</rp\>ㄏㄢ ˋ\<rp\>)\</rp\>\</rt\> \</ruby\>

\<ruby\>

        漢 123213

        \<rt\>ㄏㄢˋ\</rt\>

\</ruby\>

**(8)\*\***时间日期\*\*

time（日期/时间）（datetime，pubdate）

**(9)\*\***换行符\*\*

wbr（可能的换行符，让浏览器自己决定哪里换行）

☒ ~~command（命令按钮）~~

☒ ~~track（用在媒体播放器中的文本轨道）~~

\<!doctype html\>

\<html\>

\<head\>

\<title\>\</titile\>

\<meta\>

\<style type="text/css"\>\</link\>

\<link type="text/css" href="index.css" rel="stylesheet"\>

\<script\>\</b\>

\</head\>
## 333
\<body\>\</body\>

\</html\>
