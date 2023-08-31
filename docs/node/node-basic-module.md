# Node 基础模块

## http
:::info http
1. 超文本传输协议
2. 创建http服务
```js
var http = require( "http" );
// 调用http.createServer()方法返回创建的HTTP服务器
var server = http.createServer(function( req, res ) {
                // res.setHeader('Content-Type', 'text/html; charset=utf-8')
                res.writeHead(200, {'Content-Type': 'text/html'} )
                res.write("<head><meta charset='utf8'></head>" );
                res.end("hello world" );
            })

server.listen(1335, function() {
    console.log( "server is running at port 1335." );
    // server.close(); // 关闭HTTP服务器
})
// 当关闭HTTP服务器时触发close事件，指定回调函数处理
server.on("close", function() {
    console.log("HTTP服务器已关闭");
})
```
:::

## url
:::info url
1. 解析url query
```js
const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  console.log(req.url);
  const query = url.parse(req.url, true).query
  console.log('id:' + query.id);
  console.log('name:' + query.name);
  res.writeHead(200, { 'Content-type': 'text/html;charset="utf-8"' })
  res.write('你好' + query.name + ':' + query.id)
  res.write('<h2>hello world</h2>')
  res.end('.....')
}).listen(3000)

console.log('sever running at http://localhost:3000/?id=1&name=join')
```
:::

## commonJs
:::info commonJs
```js
// 导出整个模块
// 一个文件有一个导出方法时使用
module.exports = {
    todo(val) {
        console.log('这是一个值: ' + val)
    }
}
// 导出该模块的todo方法
// 一个文件有多个导出方法时使用
exports.todo = (val) => {
    console.log('这是一个值: ' + val)
}

// 引入使用
var hhh = require('./hhh')
hhh.todo('val')
```
:::

## fs
:::info fs
```js
1. stat: 检测是文件还是目录
2. readdir: 读取目录
    1. 返回数组，文件名组成的数组
3. mkdir: 创建目录
4. rmdir: 删除目录
    1. 目录下必须不存在文件
5. writeFile: 创建并写入文件
6. appendFile: 追加写入文件
7. readFile: 读取文件
8. unlink: 删除文件
9. rename: 重命名，移动文件

fs.stat(path.resolve(__dirname + '/app.js'), (err, data) => {
    if (err) return
    console.log('是目录：' + data.isDirectory());
    console.log('是文件：' + data.isFile());
})
```
:::

## path
:::info path
```js
// __dirname: 当前文件所在目录的绝对路径
// 拼接路径
path.join(__dirname, '/index.html')
// 解析并拼接路径
path.resolve(__dirname, 'index.html')
// 提取路径中文件扩展名
path.extname('/index.html')
```
:::

## stream
:::info stream
```js
// 创建可读流（根据文件大小，读取多次）
const stearm = fs.createReadStream('./img/xiong.png')
let str = ''
let count = 0
// 监听读取数据和次数
stearm.on('data', (data) => {
    str = data
    count++
})
// 监听读取结束
stearm.on('end', () => {
    console.log(str);
    console.log(count);
    const stramWrite = fs.createWriteStream('./b.png')
    stramWrite.write(str)
    stramWrite.end()
})

// 创建写入流
const fsStream = fs.createWriteStream(文件路径);
// 读取文件buffer二进制
const readFile = fs.readFileSync(文件路径);
// 写入创建的写入流对象（可以循环写入，相当于push）
fsStream.write(readFile)
// 写入完成关闭写入流
fsStream.end()

fsStream.on('finish', () => {
    console.log('写入完成')
})

// 管道流
const stearm = fs.createReadStream('./img/xiong.png')
const stramWrite = fs.createWriteStream('./img/b.png')
// 读取文件流，通过pipe，倒入读取流（相当于复制文件操作）
stearm.pipe(stramWrite)
```
:::

## Express（第三方模块）
::: info Express
```js
var express = require('express');
var app = express();

/* app.use: 将指定的一个或多个中间件函数装载到指定的路径：当请求的路径的基与路径匹配时，执行中间件函数。
            多个中间件共享req、res的数据
            多个中间件  上一个中间件的输出作为下一个中间件的输入。
*/
const m1 = function(req, res, next) {
    console.log('触发中间件')
    next()
}
// 全局中间件
// app.use(m1)
// 局部中间件
app.get('/', m1, m1, function(req,res) { res.send('Hello world') })
app.get('/', [m1, m1], function(req,res) { res.send('Hello world') })


// 导入处理querystring的Node.js内置模块
const qs = require('querystring')
// 自定义中间件
app.use((req,res,next)=>{
    let str = ''
    // 如果数据量比较大，无法一次性发送完毕，则客户端会把数据切割后，分批发送到服务器。所以 data 事件可能会触发多次，每一次触发 data 事件时，获取到数据只是完整数据的一部分，需要手动对接收到的数据进行拼接。
    req.on('data',(chunk)=>{
        str += chunk
    })
    req.on('end',()=>{ 
        // 在str中存放的是完整的请求体数据)
        console.log(str); // name=Ulrich&age=22&gender=male
        const body = qs.parse(str) // { name: 'Ulrich', age: '22', gender: 'male' }
        req.body = body;
        next()
    })
})

// 匹配get、post请求，返回响应
app.get('/', function(req,res) { res.send('Hello world') })
app.post('/', function(req,res) { res.send('Hello world') })

// 注册访问静态资源
app.use('/static', express.static(__dirname + '/public'));
// 注册访问路由，抽离为单独路由模块。通过express.Router()创建路由，/api/user/list、/api/user/add
// app.use('/api', indexRouter);

// 绑定并侦听指定主机和端口上的连接
app.listen(80, function() { console.log('listen in http://127.0.0.1') })
```
- express-session session中间件
  - Session Cookies 是存储在服务器内存中，耗费大量的资源
  - cookie 默认情况下，跨域是不会携带cookie的，需要修改请求 `xhrFields: { withCredentials: true }`
- jwt 
:::
## 中间件分类
::: info 中间件
- **应用级别中间件**
  - 绑定到Express中app实例上的中间件
- **路由级别中间件**
  - 绑定到Express.Router()上的中间件
- **错误级别中间件**
  - 对throw new Error 等抛出的错误，进行捕获的中间件 function (err, req, res, next) {}
- **Express内置中间件**
  - Express.static      托管静态资源
  - Express.json        解析Json格式请求体
  - Express.urlencoded  解析url-encoded格式请求体
- **第三方中间件**
:::