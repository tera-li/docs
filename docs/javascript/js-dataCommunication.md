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
// 请求readyState状态值发生改变时触发 0: 未初始化；1: 服务器建立连接；2: 请求已接受；3: 请求处理中；4: 请求已完成
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

JavaScript的api接口，用于访问和操作HTTP请求（现代通用方法）

fetch(url)

.then((response) => { return response.json()})

.then((myjson) => { console.log(myjson)})

需要json()方法，转换响应的数据

fetch(url,options)

options包含一些可选参数

body：JSON.stringify(data),  // 发送主体数据

headers:{     // 设置请求头

'user-agent': 'Mozilla/4.0 MDN Example',

'content-type': 'application/json'

// Formdata对象，设置为application/x-www-form-urlencoded

}

method: 'POST'，

mode: 'cors',   // 允许跨域（cors || same-origin || no-cors）

credentials: 'include || same-origin'

让浏览器发送包含凭据的请求（跨域源）使其跨域

只在同一源时发送凭证

**上传文件FormData**

new FormData()    // 可以遍历键值

append('username', 'abc123') // key，value

append(files, filed.files[0])

set(name, value1)

设置key，value（该方法会移除相同的name字段，而append不会）

set(name. blob, fileName)

delete(name)

get(name)

has(name)

在fetch中使用formdata，会自动设置请求头，不用手动设置content-type

**自定义请求对象**

new Request(url, options)

放在fetch()中，构成对应的url和options

**自定义请求头**

new Headers({

'Content-Type': 'text/plain'

`    `})

headers.has('Content-type')：判断是否有该请求头

headers.set('Content-type','text/html')：设置请求头

headers.append('Content-Type',‘value’)：追加请求value

headers.get('Content-Length')：获取该请求头的长度

headers.getAll('Content-type')：获取该请求头的value

headers.delete('Content-type')：删除该请求头的value

**自定义请求头可以作为参数，设置成fetch请求头**

response

fetch的请求状态异常不会报错error（会是404和500）


response.body

response.text()：读取response，并以文本形式返回response

response.json()：读取response，解析为JSON

response.formData()：以Formdata对象的形式返回response

response.blob()：以Blob（具有类型的二进制数据）形式返回response

response.arrayBuffer()：以arrayBuffer（低级别的二进制数据）形式返回response

response.header

response.headers.get('Content-Type')

## WebSocket

是一种在浏览器和服务器之间建立持久持续连接的现代方式

websocket没有跨域限制，可以发送/接收字符串和二进制数据

let socket = **new WebSocket**("**ws**://localhost:8080")

打开一个websocket连接

**wss**://

可以使用该协议，该协议是被加密的，而且更可靠

**属性事件**

socket.**onopen**：连接已建立

可以在此处发送消息

socket.**send**(data)

socket.**onmessage**：接收服务端发送的数据

socket.**onerror**：websocket发生错误

socket.**onclose**：连接已关闭

连接关闭可能是客户端主动关闭，也可能是服务端主动关闭

socket.**close**(code, description)

数字状态码，解析连接关闭原因

对连接关闭的描述

**属性**

socket.bufferedAmount

返回已经被socket.send()放入队列中，但还没有被发送到网络的数据字节数

如果不断调用send(),则该属性值会持续增长


socket.url

返回值为构造函数**创建websocket实例对象时的URL**

socket.readyState

返回当前websocket的链接状态


**心跳重连**

websocket 一般 每隔90秒无操作则会自动断开，需要加入一个心跳机制防止自断

就是设置定时器setInterval，持续socket.send()向服务端发送消息


1

## EventSource

**websocket有以下几点不同：**

SSE是使用http协议，而websocket是一种单独的协议

SSE是单向传输，只能服务端向客户端推送，websocket是双向

SSE支持断点续传，websocket需要自己实现

SSE支持发送自定义类型消息
