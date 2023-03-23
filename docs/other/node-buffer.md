# Node 二进制

## Buffer
1. Buffer是一个Array的结构对象，但它主要用于操作字节
2. 专门存放二进制数据的缓存区
```js
const buf = new Buffer(100)
buf.length => 100
```

通过buf[10]访问下标为10的元素
通过buf[10] = 100设置下标为10的元素
buffer赋值不得超过255，超过则逐次减256，小于0则逐次加256
直到得到0 ~ 255区间的数值，如果是小数，则舍弃小数部分，保留整数部分
内存分配
采用c++层面实现的内存申请，采用动态内存管理机制
slab动态内存管理机制
full：完全分配状态
partial：部分分配状态
empty：没有被分配状态
Node以8kb为界限来区分buffer是大对象还是小对象
小对象：
创建新申请的slowbuffer对象，在小于8kb内使用这个slowbuffer
使用new Buffer(1024)，构造会去检测空间是否足够，若不够则会创建一个新的slab空间用来存储
大对象
如果单个buffer超过8kb，则直接分配一个slowbuffer对象作为slab单元，由这个大buffer单独占用
buffer转换
ascll：基于拉丁字母的编码，主要用于显示英语和其他西欧语言
utf-8(unicode编码)：一个字节表示1byte = 8Bit/16Bit
utf-16/ucs-2：针对于unicode的一种可变长度字符编码，统一世界上所有文字和标志，由utf-8和utf-16这两个标准实现unicode字符集
base64：传输8Bit字节码，基于64个可打印字符来表示二进制数据，需要解码后才能阅读
binary(二进制)：由0 1 组成的二进制运算
hex：代表十六进制数值
字符串转buffer：new Buffer(str, [encoding])
buffer转字符串：buf.toString([encoding], [start], [end])
buffer拼接
通过fs模块的createReadStream获取文件，通过 + 写入字符串等
const rs = fs.createReadStream('test.txt')
rs.setEncoding(‘utf-8’)
以上操作常用于流读取，编码成utf-8编码的字符
正确的拼接方式（放弃上面的setEncoding方式）
rs.on('data', (chunk) => {
    chunks.push(chunk)
    size+= chunk.length
})
rs.on('end', () => {
    let buf = Buffer.concat(chunks, size)
    let str = iconv.decode(buf, 'utf-8')   // 通过iconv-lite模块转码
})
buffer的传输性能高于字符串传输2 / 1
通过设置highWaterMark对读取文件的性能至关重要，值越大读取速度越快
