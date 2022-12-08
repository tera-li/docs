# JavaScript Communication
## Web Workers

::: info 简介
1. workers 开启一个新线程，运行在另一个全局上下文中  
1. 允许JavaScript创建多个子线程，子线程完全受主线程控制，不得操作DOM，不得使用window  
1. 用来处理异步事件，以及一些比较耗时的事件  
1. workers 可以依次生成新的 workers  
1. postMessage() 方法发送消息，onmessage 事件处理函数来响应消息  
1. worker 的一个优势在于能够执行处理器密集型的运算而不会阻塞 UI 线程  
1. 在主页面与 worker 之间传递的数据是通过 拷贝 ，而不是 共享 来完成的  
1. 传递给 worker 的对象需要经过序列化，接下来在另一端还需要反序列化，[结构化克隆算法](https://developer.mozilla.org/zh-CN/docs/Web/API/Web_Workers_API/Structured_clone_algorithm)  

:::
```js
// index.js
let myWorker = new Worker("./worker.js");
myWorker.postMessage(1);
myWorker.onmessage = (e) => {
    console.log(e.data);
};

// worker.js
onmessage = (e) => {
    // workers 也可以调用自己的 close 方法进行关闭
    close()
    postMessage("收到啦: " + e.data);
};
// 终止 worker，立即杀死
myWorker.terminate();
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Worker  
## AJAX
:::info 简介
Asynchronous JavaScript + XML (异步 JavaScript 和 XML)  
不需要重载 (刷新) 整个页面则可以更新网页部分内容
:::
```js
var oReq = new XMLHttpRequest();    // new ActiveXObject("Microsoft.XMLHTTP") IE老版本使用的语法
oReq.open("post", "https://www.runoob.com/try/ajax/ajax_info", true);
// i1=qwe&i2=join，表单数据被编码成以 '&' 分隔的键 - 值对，同时以 '=' 分隔键和值，符号会被编码
// oReq.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')

// name: (二进制) name1: join，不要设置此类请求头，浏览器会自动识别 文件流 并设置请求头
// oReq.setRequestHeader('Content-Type', 'multipart/form-data')

// {name: 'join'}，要使用JSON.stringify({name: 'join'})
oReq.setRequestHeader('Content-Type', 'application/json')

// load 传输完成，所有数据保存在 response 中
oReq.addEventListener("load", (e) => console.log(oReq));
// progress 数据量发生了变化，下载进度，下载和上传
oReq.addEventListener("progress", (e) => {
    // lengthComputable 数据量可计算
    // loaded   已经执行的数据量
    // total    数据总量
    console.log(oReq)
});
// 上传相关事件，用来表示上传的进度
oReq.upload.addEventListener("progress", console.log(oReq));
// 远程内容获取到一个存储原生二进制数据的 ArrayBuffer 对象中
// oReq.responseType = "arraybuffer"
// 超时时间，单位是毫秒
// oReq.timeout = 2000
// 终止该请求
// oReq.abort()
// 请求readyState状态值发生改变时触发 0: 未初始化(请求还未初始化)；1: 正在加载(已建立服务器链接)；2: 加载成功(请求已接受)；3: 交互(正在处理请求)；4: 请求已完成
oReq.onreadystatechange = () => { oReq.readyState }
// 浏览器返回的状态码，200 ok, 404 not found
oReq.status

let formData = new FormData()
formData.append('name',new Blob([new ArrayBuffer(100)]))
formData.append('name1','join')
oReq.send(JSON.stringify({name: 'join'}));
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest  

## Fetch
:::info 简介
JavaScript的api接口，用于访问和操作HTTP请求 (现代通用方法)
:::
```js
fetch('https://www.runoob.com/try/ajax/ajax_info',{
    // 请求方法
    method: 'post',
    // 发送主体数据
    body: JSON.stringify({ name: 'join' }),
    // 设置请求头
    headers:{
        'content-type': 'application/json'
        // FormData对象，设置为multipart/form-data
    },
    /*  请求是否允许跨域
        same-origin: 不允许跨域，它需要遵守同源策略，若不是同源，会报错当前请求非同源
        cors: 允许跨域，若服务器不允许跨域，则会提示 No 'Access-Control-Allow-Origin' header
        no-cors: 不允许跨域，允许浏览器发送本次跨域请求，但是不能访问响应返回的内容，这也是其response type为opaque透明的原因
    */
    mode: 'cors',
    /*  请求缓存方式
        default: 浏览器从 HTTP 缓存中寻找匹配的请求
            缓存匹配上，则返回缓存
            缓存匹配上但已经过期，先请求服务器端显示资源没有改动，它将从缓存中返回资源；如果服务器显示资源变动，那么重新从服务器下载资源更新缓存
            缓存没有匹配，则以普通方式请求
        no-store: 浏览器直接从远程服务器获取资源，不查看缓存，不会缓存资源
        reload: 浏览器直接从远程服务器获取资源，不查看缓存，会缓存资源
        no-cache: 
            缓存有匹配，浏览器会向远程服务器发出条件请求，如果指示资源没有更改，则将从缓存中返回该资源。否则，将从服务器下载资源并更新缓存
            缓存没有匹配，浏览器将发出正常请求，并使用下载的资源更新缓存
        force-cache:
            缓存有匹配，不管是新匹配项还是旧匹配项，都将从缓存中返回
            缓存没有匹配，浏览器将发出正常请求，并使用下载的资源更新缓存
        only-if-cached: 
            缓存有匹配，不管是新匹配项还是旧匹配项，都将从缓存中返回
            缓存没有匹配，浏览器将返回一个错误
    */
    cache: 'default'
})
.then((response) => { console.log(response) })
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch  

## WebSocket
::: info 简介
在浏览器和服务器之间建立持久持续连接，通过该连接发送和接收数据的 API
websocket没有跨域限制，可以发送/接收字符串和二进制数据
:::
```js
// 打开一个websocket连接
// wss 可以使用该协议，该协议具有SSL证书，传输是被加密的，而且更可靠
let socket = new WebSocket("ws://localhost:8080")
// 连接已建立
socket.onopen = (event) =>  { console.log("WebSocket is open now.") }
// 发送数据
socket.send("data")
// 接收服务端发送的数据
socket.onmessage = (data) =>  { console.log(data) }
// 连接发生错误
socket.onerror = (err) =>  { console.log(err) }
// 连接已关闭
socket.onclose = (event) =>  { console.log(event) }
// 连接关闭可能是客户端主动关闭，也可能是服务端主动关闭
// 参数: 数字状态码，解析连接关闭原因 (对连接关闭的描述)
socket.close(code, description)

// 心跳机制
Websocket 在一定时间的无操作情况下会自动断开连接，因此需要加入一个心跳机制防止自断
可以设置定时器setInterval，持续socket.send()向服务端发送消息
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket  

## EventSource
::: info 简介
SSE (server-sent-event)，是服务器推送的一个网络事件接口  
对 HTTP 服务开启一个持久化的连接，以text/event-stream 格式发送事件，会一直保持开启直到被要求关闭  
与 WebSockets 不同的是，服务端推送是单向的。数据信息被单向从服务端到客户端分发  
:::
```js
var es = new EventSource("http://localhost:8080/Home/GetNotices?user=lxw");
es.onmessage = (event) => { console.log(event.data) };
es.onopen = (event) => { console.log(event) };
es.onerror = (event) => { console.log(event) };
es.close();
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/API/EventSource  
## 跨域相关
:::info 
- 后端设置请求域的跨域配置
1. Access-Control-Allow-Origin: *               允许所有域名的脚本访问该资源
   1. value: https://www.baidu.com              允许指定的域名访问
2. Access-Control-Allow-Methods                 允许的请求方式
3. Access-Control-Allow-Headers                 跨域允许包含的头
- jsonp
1. ajax发起请求是有同源保护策略的限制，会报错
2. `<scrip />` 会发起一个get请求，这个请求是不受同源策略限制的
```js
// html代码
function func(result) {
  console.log(result)   // { message: "hello world" }
}
<script src="http://localhost:3000/jsonp?callback=func"></script>
// 请求返回 /**/ typeof func === 'function' && func({"message":"hello world"});
// 后端返回jsonp数据，检测callback指定是否为函数，并执行函数，将数据传入给指定的函数的参数中
```
```js
// nodejs代码
var express = require("express");
var app = express();
var port = 3000;
app.get("/", function (req, res) {
  res.send("hello world");
});
// /jsonp?callback=func
app.get("/jsonp", (req, res) => {
  res.jsonp({ message: "hello world" });
  // => func({ "message": "hello world" })
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```
:::