import{_ as t,c as s,o as n,d as l}from"./app.a9497a1a.js";const r="/assets/protocol-all.32ad7fcc.png",a="/assets/protocol.7b493f4d.png",e="/assets/Aspose.Words.417e3b11-1720-4c92-af80-ff130734d73b.010.32aa8872.jpeg",o="/assets/Aspose.Words.417e3b11-1720-4c92-af80-ff130734d73b.001.9cac8af2.png",p="/assets/WX20230104-095243@2x.79be220e.png",d="/assets/clipboard.71a56f5f.png",i="/assets/Aspose.Words.3443b485-1533-46e9-8ef5-fddf78953ed1.001.9beace56.png",c="/assets/Aspose.Words.3443b485-1533-46e9-8ef5-fddf78953ed1.002.d98440b5.png",F="/assets/ip_router.41d92d95.png",g="/assets/Aspose.Words.417e3b11-1720-4c92-af80-ff130734d73b.007.9d8336cc.jpeg",h="/assets/Aspose.Words.417e3b11-1720-4c92-af80-ff130734d73b.012.168f6b94.jpeg",b="/assets/Aspose.Words.417e3b11-1720-4c92-af80-ff130734d73b.011.6fe72833.jpeg",S=JSON.parse('{"title":"Http Basics","description":"","frontmatter":{},"headers":[{"level":2,"title":"网络模型","slug":"网络模型","link":"#网络模型","children":[]},{"level":2,"title":"URI","slug":"uri","link":"#uri","children":[]},{"level":2,"title":"应用层 - HTTP","slug":"应用层-http","link":"#应用层-http","children":[]},{"level":2,"title":"HTTP报文","slug":"http报文","link":"#http报文","children":[]},{"level":2,"title":"HTTP状态码","slug":"http状态码","link":"#http状态码","children":[]},{"level":2,"title":"HTTP方法","slug":"http方法","link":"#http方法","children":[]},{"level":2,"title":"HTTP优缺点","slug":"http优缺点","link":"#http优缺点","children":[]},{"level":2,"title":"传输层 - TCP","slug":"传输层-tcp","link":"#传输层-tcp","children":[]},{"level":2,"title":"TCP 握手","slug":"tcp-握手","link":"#tcp-握手","children":[{"level":3,"title":"建立连接","slug":"建立连接","link":"#建立连接","children":[]},{"level":3,"title":"连接终止","slug":"连接终止","link":"#连接终止","children":[]}]},{"level":2,"title":"网络层 - IP","slug":"网络层-ip","link":"#网络层-ip","children":[]},{"level":2,"title":"IP 服务","slug":"ip-服务","link":"#ip-服务","children":[{"level":3,"title":"IP信息包的传送","slug":"ip信息包的传送","link":"#ip信息包的传送","children":[]},{"level":3,"title":"IP信息包的分割与重组","slug":"ip信息包的分割与重组","link":"#ip信息包的分割与重组","children":[]}]},{"level":2,"title":"域名/DNS","slug":"域名-dns","link":"#域名-dns","children":[]}],"relativePath":"network/index.md","lastUpdated":1676881786000}'),u={name:"network/index.md"},y=l('<h1 id="http-basics" tabindex="-1">Http Basics <a class="header-anchor" href="#http-basics" aria-hidden="true">#</a></h1><h2 id="网络模型" tabindex="-1">网络模型 <a class="header-anchor" href="#网络模型" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>首先我们来看几张图，了解下网络的模型结构<br> 国际标准 OSI模型 有7层结构，广泛应用的 TCP/IP模型 可以分为5层/4层结构</p><p><img src="'+r+'" alt=""><br><img src="'+a+'" alt=""><br><img src="'+e+'" alt=""></p></div><h2 id="uri" tabindex="-1">URI <a class="header-anchor" href="#uri" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>URI（<strong>统一资源标识符</strong>）用于标识某一互联网资源名称的字符串<br> URI 是一种抽象宽泛的定义。即，不管用什么方法表示，只要能唯一标记某个资源，它就叫URI<br> 通常已http:、ftp:、mailto:、file:，和协议对应的内容所构成</p><ul><li>URL（<strong>统一资源定位符</strong>）用于标识某一互联网资源名称的字符串，URL 是 URI 的一个子集 <ul><li>比如：<a href="http://www.aspxfans.com:8080/news/day01/index.asp?boardID=5&amp;pwd=24618&amp;page=1#name" target="_blank" rel="noreferrer">http://www.aspxfans.com:8080/news/day01/index.asp?boardID=5&amp;pwd=24618&amp;page=1#name</a><ul><li>协议部分 http: (浏览器协议)</li><li>域名部分 <a href="http://www.aspxfans.com" target="_blank" rel="noreferrer">www.aspxfans.com</a> (域名通过DNS转换为IP，识别主机服务器)</li><li>端口部分 :8080 (识别主机的对应进程)</li><li>目录部分 /news/day01/ (资源路径)</li><li>文件部分 index.asp (查找的对应文件)</li><li>参数部分 boardID=5&amp;pwd=24618&amp;page=1 (参数)</li><li>锚定部分 name (#指定了网页中的一个位置)</li></ul></li></ul></li></ul></div><p>参考链接：<a href="https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_URL" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Learn/Common_questions/What_is_a_URL</a></p><h2 id="应用层-http" tabindex="-1">应用层 - HTTP <a class="header-anchor" href="#应用层-http" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>HTTP（<strong>超⽂本传输协议 HyperText Transfer Protocol</strong> ）<br> 每个 HTTP请求都是⽆状态的，可以把 HTTP的⼀次请求当作⼀次事务<br> HTTP是应⽤层通信协议，旨在在联⽹设备之间传输信息，HTTP标准化了客户端和服务器之间的通信⽅式<br> HTTPS：在 HTTP基础上，增加 <strong>传输加密</strong> 和 <strong>身份认证</strong> 保证传输过程的安全性</p></div><div class="info custom-block"><p class="custom-block-title">HTTP结构</p><p><img src="'+o+'" alt=""></p><p><img src="'+p+'" alt=""></p></div><p>参考链接：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP</a></p><h2 id="http报文" tabindex="-1">HTTP报文 <a class="header-anchor" href="#http报文" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>报文：是网络中交换与传输的数据单元，即站点一次性要发送的数据块<br> HTTP传输分为 <strong>报文首部</strong> 和 <strong>报文主体</strong></p></div><ul><li><strong>请求行</strong><ul><li>HTTP 请求 Method、URI、Version ( GET /URI HTTP/1.1 )</li></ul></li><li><strong>状态行</strong><ul><li>HTTP 响应 Version、Status Code、Reason ( HTTP/1.1 200 OK )</li></ul></li><li><strong>首部字段</strong><ul><li>包含表示请求和响应的各种条件和属性的各类首部</li><li><strong>通⽤⾸部字段</strong>：请求报⽂和响应报⽂两⽅都会使⽤的头部 <table><thead><tr><th>首部字段名</th><th>说明</th></tr></thead><tbody><tr><td>Cache-Control</td><td><strong>控制缓存的行为</strong></td></tr><tr><td>Connection</td><td><strong>连接管理</strong></td></tr><tr><td>Date</td><td><strong>创建报文的日期时间</strong></td></tr><tr><td>Pragma</td><td><strong>报文指令</strong></td></tr><tr><td>Trailer</td><td><strong>报文末端的首部一览</strong></td></tr><tr><td>Trailer-Encoding</td><td><strong>指定报文主体的传输编码方式</strong></td></tr><tr><td>Upgrade</td><td><strong>升级为其他协议</strong></td></tr><tr><td>Via</td><td><strong>代理服务器的相关信息</strong></td></tr><tr><td>Warning</td><td><strong>错误通知</strong></td></tr></tbody></table></li><li><strong>请求⾸部字段</strong>：从客户端向服务器端发送请求报⽂使⽤的头部 <table><thead><tr><th>首部字段名</th><th>说明</th></tr></thead><tbody><tr><td>Accept</td><td><strong>用户代理可处理的媒体类型</strong></td></tr><tr><td>Accept-Charset</td><td><strong>优先处理字符集</strong></td></tr><tr><td>Accept-Encoding</td><td><strong>优先的内容编码</strong></td></tr><tr><td>Accept-Language</td><td><strong>优先的语言</strong></td></tr><tr><td>Authorization</td><td><strong>Web认证信息</strong></td></tr><tr><td>Expect</td><td><strong>期待服务器的特定行为</strong></td></tr><tr><td>From</td><td><strong>用户的电子邮箱地址</strong></td></tr><tr><td>Host</td><td><strong>请求资源所在的服务器</strong></td></tr><tr><td>If-Match</td><td><strong>比较实体标记</strong></td></tr><tr><td>If-Modified-Since</td><td><strong>比较资源的更新时间</strong></td></tr><tr><td>If-None-Match</td><td><strong>比较实体标记（与If-Match相反）</strong></td></tr><tr><td>Max-Forwards</td><td><strong>最大传输逐跳数</strong></td></tr><tr><td>Proxy-Authorization</td><td><strong>代理服务器要求客户端的认证信息</strong></td></tr><tr><td>Range</td><td><strong>实体的字节范围请求</strong></td></tr><tr><td>Referer</td><td><strong>对请求中URI的原始获取方</strong></td></tr><tr><td>TE</td><td><strong>传输编码的优先级</strong></td></tr><tr><td>User-Agent</td><td><strong>HTTP客户端程序的信息</strong></td></tr></tbody></table></li><li><strong>响应⾸部字段</strong>：从服务端向客户端返回响应报⽂时使⽤的头部 <table><thead><tr><th>首部字段名</th><th>说明</th></tr></thead><tbody><tr><td>Accept-Ranges</td><td><strong>是否接受字节范围请求</strong></td></tr><tr><td>Age</td><td><strong>推算资源创建经过时间</strong></td></tr><tr><td>ETag</td><td><strong>资源的匹配信息</strong></td></tr><tr><td>Location</td><td><strong>令客户端重定向至URI</strong></td></tr><tr><td>Proxy-Authenticate</td><td><strong>代理服务器对客户端的认证信息</strong></td></tr><tr><td>Retry-After</td><td><strong>对再次发器请求的时机要求</strong></td></tr><tr><td>Server</td><td><strong>HTTP服务器的安装信息</strong></td></tr><tr><td>Vary</td><td><strong>代理服务器缓存的管理信息</strong></td></tr><tr><td>WWW-Authenticate</td><td><strong>服务器对客户端的认证信息</strong></td></tr></tbody></table></li><li><strong>实体⾸部字段</strong>：针对请求报⽂和响应报⽂的实体部分使⽤的⾸部（如补充资源内容更新时间等与实体有关的信息） <table><thead><tr><th>首部字段名</th><th>说明</th></tr></thead><tbody><tr><td>Allow</td><td><strong>资源可支持的HTTP方法</strong></td></tr><tr><td>Content-Encoding</td><td><strong>实体主体适用的编码方式</strong></td></tr><tr><td>Content-Language</td><td><strong>实体主体的自然语言</strong></td></tr><tr><td>Content-Length</td><td><strong>实体主体的大小（单位：字节）</strong></td></tr><tr><td>Content-Location</td><td><strong>替代对应资源的URI</strong></td></tr><tr><td>Content-MD5</td><td><strong>实体主体的报文摘要</strong></td></tr><tr><td>Content-Range</td><td><strong>实体主体的位置范围</strong></td></tr><tr><td>Content-Type</td><td><strong>实体主体的媒体类型</strong></td></tr><tr><td>Expires</td><td><strong>实体主体过期的日期时间</strong></td></tr><tr><td>Last-Modified</td><td><strong>资源的最后修改日期时间</strong></td></tr></tbody></table></li></ul></li></ul><p>参考链接：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers</a></p><h2 id="http状态码" tabindex="-1">HTTP状态码 <a class="header-anchor" href="#http状态码" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>状态码的职责是当客户端向服务器端发送请求时，描述返回的请求结果</p></div><table><thead><tr><th>首部字段名</th><th>说明</th></tr></thead><tbody><tr><td>1xx(信息响应)</td><td>接收的请求正在处理</td></tr><tr><td>2xx(成功响应)</td><td>请求正常处理完毕</td></tr><tr><td>200</td><td>正常处理，请求成功</td></tr><tr><td>204</td><td>请求处理成功，但是没有响应主体</td></tr><tr><td>206</td><td>Content-Range 指定范围的实体内容</td></tr><tr><td>3xx(重定向消息)</td><td>需要进行附加操作以完成请求</td></tr><tr><td>301</td><td>永久重定向 (表示请求的资源已被分配了新的URI，以后应使用资源现在所指的URI，会去更新书签的URI)</td></tr><tr><td>302</td><td>临时重定向 (表示请求的资源已被分配了新的URI，希望用户（本次）能使用新的URI访问，保留书签对应的URI)</td></tr><tr><td>303</td><td>临时重定向 (表示请求的资源已被分配了新的URI，希望用户（本次）能使用新的URI访问，保留书签对应的URI，但应当使用GET请求)</td></tr><tr><td>304</td><td>资源已找到，但未符合条件请求 (比如该请求返回的文件，文件未被修改，对客户端有缓存情况下服务端的一种响应，返回缓存文件)</td></tr><tr><td>4xx(客户端错误响应)</td><td>服务器⽆法处理请求</td></tr><tr><td>400</td><td>请求语法错误</td></tr><tr><td>401</td><td>请求需要账户密码认证</td></tr><tr><td>403</td><td>请求资源的访问被服务器拒绝</td></tr><tr><td>404</td><td>服务器没有找到请求资源</td></tr><tr><td>5xx(服务端错误响应)</td><td>服务器处理请求出错</td></tr><tr><td>500</td><td>服务器发⽣错误</td></tr><tr><td>503</td><td>服务器暂时处于超负载或处于停机维护</td></tr></tbody></table><p>参考链接：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Status</a></p><h2 id="http方法" tabindex="-1">HTTP方法 <a class="header-anchor" href="#http方法" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>根据 HTTP 标准，HTTP 请求可以使用多种请求方法</p><table><thead><tr><th>请求方法</th><th>说明</th></tr></thead><tbody><tr><td>GET</td><td>请求指定的页面信息，并返回实体主体</td></tr><tr><td>HEAD</td><td>类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头</td></tr><tr><td>POST</td><td>向指定资源提交数据进行处理请求（例如提交表单或者上传文件），数据被包含在请求体中。POST 请求可能会导致新的资源的建立和/或已有资源的修改</td></tr><tr><td>PUT</td><td>从客户端向服务器传送的数据取代指定的文档的内容</td></tr><tr><td>DELETE</td><td>请求服务器删除指定的页面</td></tr><tr><td>CONNECT</td><td>HTTP/1.1 协议中预留给能够将连接改为管道方式的代理服务器</td></tr><tr><td>OPTIONS</td><td>用于描述目标资源的通信选项</td></tr><tr><td>TRACE</td><td>回显服务器收到的请求，主要用于测试或诊断</td></tr><tr><td>PATCH</td><td>是对 PUT 方法的补充，用来对已知资源进行局部更新</td></tr></tbody></table><p><img src="'+d+`" alt=""></p></div><p>参考链接：<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Methods</a></p><h2 id="http优缺点" tabindex="-1">HTTP优缺点 <a class="header-anchor" href="#http优缺点" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p><strong>HTTP</strong> 优点：</p><ol><li>简单、灵活、易于扩展</li><li>无状态，性能更好，减少网络资源消耗 缺点：</li><li>通信使⽤明⽂（不加密），内容可能被窃听</li><li>不验证通信⽅的身份，身份可能遭遇伪装</li><li>⽆法证明明⽂的完整性，明⽂可能会被篡改</li></ol><p><strong>HTTPS</strong></p><ol><li>通过 SSL协议 + 加密 + 认证 + 明⽂完整性保护</li><li>⽹站通信进⾏加密</li></ol></div><h2 id="传输层-tcp" tabindex="-1">传输层 - TCP <a class="header-anchor" href="#传输层-tcp" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>TCP（<strong>传输控制协议 Transmission Control Protocol</strong>）<br> 是一个面向连接的、可靠的、基于字节流的传输层协议<br> TCP 会将接收到所有的报⽂段进⾏组装，如果有部分报⽂段丢失则会让其重新发送，直⾄成功组装完整数据，才会进⼊<strong>应⽤层</strong></p><ul><li>面向连接 <ul><li>客户端和服务器的连接，互相通信之前，TCP 需要三次握手建立连接，四次握手终止连接</li></ul></li><li>可靠的 <ul><li>保证连接的可靠，控制数据传输的完整性，数据的可控制（重传策略）</li></ul></li></ul><p>UDP（<strong>用户数据报协议</strong>）<br> 无需建立连接就可以发送封装的 IP 数据包的方法，音频和多媒体应用，UDP是最好的选择<br> 如果有一个消息丢失，在稍后的瞬间之后另一个新的消息就会替换它</p><ul><li>无连接 <ul><li>传输数据之前源端和终端不建立连接，不需要维护连接状态</li></ul></li><li>不可控（不可靠） <ul><li>无法保障数据完整性</li></ul></li></ul></div><h2 id="tcp-握手" tabindex="-1">TCP 握手 <a class="header-anchor" href="#tcp-握手" aria-hidden="true">#</a></h2><h3 id="建立连接" tabindex="-1">建立连接 <a class="header-anchor" href="#建立连接" aria-hidden="true">#</a></h3><p>TCP 作为传输层协议，使用三次握手协议建立连接，该方法可以防止产生错误的连接</p><p>TCP 三次握手的过程如下：</p><ol><li>客户端发送SYN（SEQ=x）报文给服务器端，进入SYN_SEND状态。</li><li>服务器端收到SYN报文，回应一个SYN （SEQ=y）ACK（ACK=x+1）报文，进入SYN_RECV状态。</li><li>客户端检查ACK === x+1，随之发送ACK（ACK=y+1）报⽂给服务端，服务端检查ACK === y+1， 如果正确则建⽴连接，进入Established状态。</li></ol><p>三次握手完成，TCP客户端和服务器端成功地建立连接，可以开始传输数据了。</p><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">SYN </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 连接请求，同步标志</span></span>
<span class="line"><span style="color:#F8F8F2;">ACK </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 确认标志</span></span>
<span class="line"><span style="color:#F8F8F2;">SYN_SEND </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 发送完一个连接请求后等待一个匹配的连接请求</span></span>
<span class="line"><span style="color:#F8F8F2;">SYN_RECV </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 发送连接请求并且接收到匹配的连接请求以后等待连接请求确认</span></span>
<span class="line"><span style="color:#F8F8F2;">Established </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 表示一个建立的连接</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">client </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;">                  client发送 SYN（SEQ</span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">x）请求建立连接                 </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> server</span></span>
<span class="line"><span style="color:#F8F8F2;">server </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 收到client请求应答, server回应 SYN （SEQ</span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">y）</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> ACK（ACK</span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">x</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">）请求建立连接  </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> client</span></span>
<span class="line"><span style="color:#F8F8F2;">client </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 检测server的数据 ACK </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> x</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, 正确则发送 ACK（ACK</span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">y</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">）, 服务器检测client的数据 ACK </span><span style="color:#F92672;">===</span><span style="color:#F8F8F2;"> y</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">, 正确则建立连接 </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> server</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>为什么不两次握手？<br> 客户端如果由于网络阻塞重发送了两次 SYN，服务端回应第一次的 SYN + ACK，服务端不知道客户端是否接收到 SYN + ACK，第二次 SYN 延迟送达 服务端依然会发送 SYN + ACK，因为服务端不知道客户端是否接受到 确认标志，这样会浪费服务端的资源</p><p>为什么不四次握手？<br> 浪费服务端资源，服务端的 SYN + ACK 可以一次性发送<br><img src="`+i+`" alt=""></p><h3 id="连接终止" tabindex="-1">连接终止 <a class="header-anchor" href="#连接终止" aria-hidden="true">#</a></h3><p>TCP 连接的终止一个连接要经过四次握手</p><ol><li>Client发送一个FIN并包含一个随机的seq=a，主动关闭Client到Server的数据传送，Client进入FIN_WAIT_1状态</li><li>Server收到FIN后，发送一个ACK并包含一个seq=a+1给Client,Server进入CLOSE_WAIT状态。</li><li>Server发送一个FIN并包含一个随机的seq=b和一个ACK=a+1,用来关闭Server到Client的数据传输，Server进入LAST_ACK状态。</li><li>Client收到FIN后，Client进入TIME_WAIT状态，接着发送一个ACK并包含一个seq=b+1给Server,Server收到ACK包后进入CLOSED状态，完成四次挥手</li></ol><div class="language-js line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki monokai"><code><span class="line"><span style="color:#F8F8F2;">FIN </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 结束标志</span></span>
<span class="line"><span style="color:#F8F8F2;">seq </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 随机序列</span></span>
<span class="line"><span style="color:#F8F8F2;">ACK </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 确认标志</span></span>
<span class="line"><span style="color:#F8F8F2;">FIN_WAIT_1 </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 等待远端TCP 的连接终止请求</span></span>
<span class="line"><span style="color:#F8F8F2;">CLOSE_WAIT </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 等待本地连接终止请求</span></span>
<span class="line"><span style="color:#F8F8F2;">LAST_ACK </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 等待先前发送给远端TCP 的连接终止请求的确认</span></span>
<span class="line"><span style="color:#F8F8F2;">TIME_WAIT </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 等待足够的时间过去以确保远端TCP 接收到它的连接终止请求的确认</span></span>
<span class="line"><span style="color:#F8F8F2;">CLOSED </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 关闭连接状态</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">client </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> client发送 FIN（seq</span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">a） </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> server</span></span>
<span class="line"><span style="color:#F8F8F2;">server </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 收到client的 FIN，发送 ACK（seq</span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">a</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">） </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> client</span></span>
<span class="line"><span style="color:#F8F8F2;">server </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> server发送 FIN（seq</span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">b）</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> ACK（ACK</span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">a</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">） </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> client</span></span>
<span class="line"><span style="color:#F8F8F2;">client </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> 收到server的 FIN，client进入等待连接终止，并发送 ACK（seq</span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;">b</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">），server收到 ACK 后进入关闭状态 </span><span style="color:#F92672;">-&gt;</span><span style="color:#F8F8F2;"> server</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><img src="`+c+'" alt=""></p><h2 id="网络层-ip" tabindex="-1">网络层 - IP <a class="header-anchor" href="#网络层-ip" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>IP（<strong>Internet Protocol 网际互连协议</strong>）<br> 是一种端到端的，数据传输服务协议，主要解决的是通信双方寻址的问题</p><p><strong>IP协议</strong></p><ul><li>IPV4：2019年IPV4地址分配完毕，地址个数4,294,967,296</li><li>IPV6</li></ul><p><strong>IP地址类型</strong></p><ul><li>公有地址，可以直接访问 Internet</li><li>私有地址，局域网访问 <ol><li>A类 10.0.0.0--10.255.255.255</li><li>B类 172.16.0.0--172.31.255.255</li><li>C类 192.168.0.0--192.168.255.255</li></ol></li></ul></div><h2 id="ip-服务" tabindex="-1">IP 服务 <a class="header-anchor" href="#ip-服务" aria-hidden="true">#</a></h2><p>IP 所提供的服务大致可以归为两大类：</p><h3 id="ip信息包的传送" tabindex="-1">IP信息包的传送 <a class="header-anchor" href="#ip信息包的传送" aria-hidden="true">#</a></h3><p>IP是网络之间信息传送的协议，端到端传输数据，IP必须依赖<strong>IP地址</strong>与<strong>IP路由器</strong>两种机制来实现</p><h3 id="ip信息包的分割与重组" tabindex="-1">IP信息包的分割与重组 <a class="header-anchor" href="#ip信息包的分割与重组" aria-hidden="true">#</a></h3><p>IP信息包传输过程中的太大则可能将信息进行分割，目的设备接收后再重组</p><ul><li><strong>IP地址</strong><ul><li>网络上每台⽹络设备都是独⼀⽆⼆的IP地址，如：192.168.1.1标识着一个网络设备的IP地址</li><li>每个IP信息包都必须包含有目的设备的IP地址</li></ul></li><li><strong>IP路由</strong><ul><li>互联网是由许多个网络连接所形成的大型网络，网络之间还必须有传送的机制，将IP信息包通过一个个的网络传送到目的地，此种传送机制称为IP路由</li><li>目的设备是否收到每个信息包、是否收到正确的信息包等，则由上层的协议(例如TCP)来负责检查</li></ul></li><li><strong>IP信息包的分割与重组</strong><ul><li>IP信息包在传送过程中，可能会经过许多个使用不同技术的网络</li><li>假设IP信息包是从ATM网络所发出，原始长度为9180B，如果IP路由途中经过以太网络，便面临信息包太大，无法在以太网络上传输的障碍</li><li>为了解决此问题，路由器必须有IP信息包分割与重组的机制，将过长的信息包进行分割，以便能在最大传输单位较小的网络上传输。分割后的IP信息包，由目的设备接收后重组，恢复成原来IP信息包。</li></ul></li></ul><p><img src="'+F+'" alt=""></p><h2 id="域名-dns" tabindex="-1">域名/DNS <a class="header-anchor" href="#域名-dns" aria-hidden="true">#</a></h2><div class="info custom-block"><p class="custom-block-title">简介</p><p>域名系统（英文：Domain Name System，缩写：DNS）<br> 将域名和IP地址相互映射的一个分布式数据库，能够使人更方便地访问互联网<br> DNS是⼀个分布式数据库，如果所访问的 DNS服务器不存在计算机请求的域名，则会重定向到另⼀台 DNS服务器</p><p><strong>举例：</strong></p><ul><li>域名：<a href="https://www.baidu.com" target="_blank" rel="noreferrer">https://www.baidu.com</a> 对应 IP：14.215.177.39</li><li>访问域名可以看到百度页面，访问IP也可以看到百度页面</li><li>因为IP不好记，所以通过域名与IP的映射来绑定，大家通过域名就可以访问到对应的IP地址，从而访问对应的数据信息</li></ul><p><strong>解析：</strong></p><ul><li>输入域名，首先会在本机的<strong>hosts.txt</strong>寻找是否有对应的域名IP映射，如果有则用对应的IP，加快对域名解析</li><li>如果<strong>hosts.txt</strong>没有对应的IP映射，则通过网络在<strong>网络域名服务器</strong>上寻找对应的IP</li></ul><p><strong>浏览器输入域名</strong></p><ol><li>查找浏览器缓存</li><li>查找DNS缓存</li><li>本机文件Hosts文件，域名对应的IP映射</li><li>递归DNS服务器查找</li><li>TLD顶级域名服务器</li><li>权威域名服务器，在次服务器找到对应的IP并返回</li><li>然后返回到递归DNS服务器，在这里可能被缓存</li><li>最后将IP发送回浏览器，浏览器通过IP访问服务器</li></ol><p><img src="'+g+'" alt=""><img src="'+h+'" alt=""><img src="'+b+'" alt=""></p></div>',51),T=[y];function P(m,I,C,f,_,v){return n(),s("div",null,T)}const N=t(u,[["render",P]]);export{S as __pageData,N as default};
