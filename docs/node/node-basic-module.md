# Node 基础模块

## http
:::info http
1. 超文本传输协议
2. 创建http服务
```js
// 请求服务，搭建类似于express之类的框架
1. 首页注册response扩展方法，如: res.send()等
2. 注册静态web服务，获取静态资源返回对应文件
   如：let data = fs.readFileSync(req.url)
       res.end(data)
3. 通过静态web服务则走向路由接口配置
   配置get、post方法接口，通过req.method获取请求方法
   app.get、app.post注册在对象不同属性中
   将callback注册给对象属性值，运行时调用
   let G = {
       _get: {}
       _post: {}
   }
   app.get(path, cd) {
       G._get[path] = cd
   }
   app.get('/login', (req, res) => {
       res.end('data')
   })
   if (req.method === 'get') {
       G._get[req.url](req, res) // 调用定义方法
   } else ......
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
    res.write('你好')
    res.write('<h2>hello world</h2>')
    res.end('.....')
}).listen(3000)

console.log('sever running at http://localhost:3000')
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