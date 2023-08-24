var express = require('express');
var app = express();

/* app.use: 将指定的一个或多个中间件函数装载到指定的路径：当请求的路径的基与路径匹配时，执行中间件函数。
            多个中间件共享req、res的数据
            多个中间件  上一个中间件的输出作为下一个中间件的输入。
*/
const m1 = function(req, res, next) {
    next()
}
// 全局中间件
app.use(m1)
// 局部中间件
app.get('/', m1, function(req,res) { res.send('Hello world') })


// 匹配get、post请求，返回响应
app.get('/', function(req,res) { res.send('Hello world') })
app.post('/', function(req,res) { res.send('Hello world') })

// 注册访问静态资源
app.use('/static', express.static(__dirname + '/public'));
// 注册访问路由，抽离为单独路由模块。通过express.Router()创建路由，/api/user/list、/api/user/add
// app.use('/api', indexRouter);

// 绑定并侦听指定主机和端口上的连接
app.listen(80, function() { console.log('listen in http://127.0.0.1') })