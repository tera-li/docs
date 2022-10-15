# HTML

**是什么？** 超文本标记语言

**作用？** 构建网页，超链接，图像，音频，文本等 ( **定义网页内容，渲染页面** )

**写法：**
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <meta charset="UTF-8" />
    <meta name="description" content="这是一个网页" />
    <style type="text/css"></style>
    <link href="index.css" type="text/css" rel="stylesheet" \>
    <script src="index.js"></script>
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
<title>网页标题</title>
```
3. **\<meta />**
```
描述 html 文档的元数据

name属性 供浏览器进行解析，如解决浏览器兼容问题
  - title 浏览器标题
  - keywords 网站关键字
  - description 描述
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
  - type：可选。可以看成是language的替代属性；表示编写代码使用的脚本语言的内容类型 (也称为MIME类型)
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
object(定义内嵌对象)
```
9. **行内标签**
```
与其他行内元素所处一行

span,a,strong,em,b,big,i,small,sub,sup,code
button,input,label,select,textarea,img
```
10. **文本标签** 
```
strong(着重点粗体),em(着重点斜体),i(斜体),b(粗体),small(小号字)
p(标签引用),blockquote(长引用),sup(上标),sub(下标),del(删除线)
pre(预格式化文本),code(代码样式),abbr(缩写),dfn(标记特殊术语)
addres(定义联系信息或地址),mark(凸显文字,使其文字背景为黄色)
a(定义超链接)
```
11. **列表**
```
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>A free, open source, cross-platform, graphical web browser
      developed by the Mozilla Corporation and hundreds of volunteers.</dd>
</dl>
```
12. **无序列表**
```
<ul>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
</ul>
```
13. **有序列表** 
```
<h4>有序列表</h4>
<ol>
    <li>列表项1</li>
    <li>列表项2</li>
    <li>列表项3</li>
</ol>

reversed(对列表进行降序),start(列表开始点),type(开头符号类型：1，I，A)
```
14. **表格** 
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
caption(表格标题),align(对齐方式),border(边框宽度)
cellspacing(表格内框宽度),cellpadding(表内文字与边框的距离)
bgcolor(背景颜色),background(背景图像)
td(rowspan(合并行),colspan(合并列))
```
15. **音频** 
```
<audio controls>
  <source src="horse.mp3" type="audio/mpeg">
  <source src="horse.ogg" type="audio/ogg">
  Your browser does not support this audio format.
</audio>

属性: controls(控件),height,width,autoplay(视频就绪后自动播放)
loop(视频播放结束重新播放),muted(声音静音),src(音频文件的 URL)
preload(预加载,是否加载视频: none(不载入),auto(载入整个音频),meta(只载入元数据))
poster(海报图像,加载视频显示的第一帧图片)
```
16. **视频** 
```
<video controls>
  <source src="horse.mp3" type="video/mpeg">
  <source src="horse.ogg" type="video/ogg">
  Your browser does not support this video format.
</video>

ele.autoplay：获取 video 的 autoplay 属性或设置该属性 (设置自动播放)
ele.controls：获取 video 的 controls 属性或设置该属性 (设置控件)
ele.currentLoop：获取该媒体已经播放的循环次数
ele.loop：获取 video 的 loop 属性或设置该属性 (设置播放循环)
ele.played：获取目前为止已经播放的时间范围 (range)
ele.currentTime：获取 video 已经播放的秒数时间或设置该属性 (设置播放时间)
ele.duration：获取该媒体 video 的总秒数时间
ele.playbackRate：获取 video 当前的播放速率或设置该属性 (设置播放速率)
ele.ended：表示该媒体是否播放完毕
ele.muted：获取 video 的 muted 属性或设置该属性 (设置是否禁音)
```
## **HTML5新增标签**
1. 排版
```
header (section 或 page 的页面)
nav (导航链接)、main (文档的主体)
section (html 区段)、article (文章)、aside (页面内容之外的内容)
footer (section 或 page 的页脚)
```
2. 图像，音频、画布
```
audio (音频)、video (视频标签)、source (媒介源，在 video 和 audio 中使用)
canvas (画布)

1. src：视频 url
2. type：video/mp4，video/ogg，视屏类型，帮助浏览器是否能播放该视频
3. media：为视频指定 css3 媒体查询，为不同屏幕尺寸的设备指定不同 (更小的) 视频
```
3. 下拉框可选列表

```
datalist (下拉列表，可以定义 input 的值，通过list和id进行绑定)
<input id="myCar" list="cars">
<datalist id="cars">
  <option value="BMW">
  <option value="Ford">
  <option value="Volvo">
</datalist>
```
4. 进度条
```
meter (预定义范围内的度量)(value，min，max)
progress (任何类型的任务的进度)(value，max)
```
5. 注释 (如汉字的拼音)
```
ruby (ruby 注释，旁注标记)
rt (ruby 注释的解释)
rp (若浏览器不支持 ruby 元素显示的内容)

<ruby> 
  汉<rp>(</rp><rt>han</rt><rp>)</rp>
  字<rp>(</rp><rt>zi</rt><rp>)</rp>
</ruby>
```
6. 其他
```
dialog (对话框或窗口)、embed (外部交互内容或插件，URL)、
figure (媒介内容的分组，规定独立的流内容(图像，图标，照片))、
figcaption (figure 元素的标题)、keygen (生成密钥)
```
## Meta以及SEO优化
```
HTML的标识元数据内容，只能在head中
提供的是文档级别的元数据，应用整个页面

<meta name="author" content="jinjiang" />
  -- name=“author”  content=“作者名称”
  -- name="description"  content=“页面内容描述”
  -- name=“generator”  content=“生成页面的软件标识符”
  -- name=“keywords”  content=“用逗号分隔的页面关键单词”
  -- name=“referrer”  content=“控制文档发出的HTTP请求中HTTP referer首部的内容”
  -- name=“viewport”  content如下，多属性可以用逗号分隔
    -- width=number || device-width：定义视口的宽度为设备宽度
    -- height=number || device-height：定义视口的高度
    -- initial-scale=0.0 ~ 1.0：定义设备宽度与视口大小之间的缩放比例maximum-scale=0.0 ~ 1.0：定义缩放的最大值级别
    -- minimum-scale=0.0 ~ 1。0：定义缩放的最小值级别user-scalable：Boolean || yes, no：
    -- 设置为no，用户将不能放大缩小网页，默认值为yes
<meta http-equiv="Pragma" content="no-cache" />
  -- http-equiv
    -- 编译指令，提供的信息与类似命名的HTTP头部相同，可以向浏览器传递一些有用的信息
    -- http-equiv="cache-control"  content="no-cache, no-store, must-revalidate"
<meta charset="UTF-8">
  -- charset
    -- 告诉文档使用哪种字符编码
```

**SEO优化**
```
设置title、keywords、description，相关网页的描述
图片alt加上key
使用语义化html标签，如header、footer、article、aside
h标题标签合理使用，h1标签权重对高
页面内容权重，原创被搜索到的几率更高
内链优化、外链优化
使用长尾关键词，对关键词进行扩展
```