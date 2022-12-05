# JavaScript Data Type

## ArrayBuffer
:::info 简介
通用的、固定长度的原始二进制数据缓冲区，用来存储二进制的  
不能直接操作 ArrayBuffer 的内容，而是要通过 类型化数组对象 (TypedArray) or 数据视图 (DataView)来操作  
:::
```js
// 创建一个ArrayBuffer，大小以字节为单位
const buffer = new ArrayBuffer(8);
// 表示 ArrayBuffer 的 byte 的大小
buffer.byteLength
// 返回一个新的 ArrayBuffer，内容为截取的副本
buffer.slice(2,4)
// 返回 true，判断传入的参数值是否是 类型化数组对象 (TypedArray) or 数据视图 (DataView)
ArrayBuffer.isView(new Int32Array())
ArrayBuffer.isView(new DataView(buffer))
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer  

## TypedArray
:::info 简介
TypedArray 对象描述了底层 二进制数据缓冲区(ArrayBuffer) 的类数组视图  
没有称为 TypedArray 的全局属性，也没有直接可用的 TypedArray 构造函数，作为抽象类只能被其子类使用  
语法与普通数组完全没有什么不同，只不过它直接针对内存进行操作，而且每个成员都有确定的数据类型
:::
```js{1,11,18}
- 类型数组对象
Int8Array: 8位有符号整数，长度1个字节，1个字节1个元素 (-128 ~ 127)
Uint8Array: 8位无符号整数，长度1个字节，1个字节1个元素 (0 ~ 255)
Int16Array: 16位有符号整数，长度2个字节，2个字节1个元素 (-32768 ~ 32767)
Uint16Array: 16位无符号整数，长度2个字节，2个字节1个元素 (0 ~ 65535)
Int32Array: 32位有符号整数，长度4个字节，4个字节1个元素 (-2147483648 ~ 2147483647)
Uint32Array: 32位无符号整数，长度4个字节，4个字节1个元素 (0 ~ 4294967295)
Float32Array: 32位浮点数，长度4个字节，4个字节1个元素
Float64Array: 64位浮点数，长度8个字节，8个字节1个元素

- 数据大小
8bit(位)=1Byte(字节)
1024Byte(字节)=1KB
1024KB=1MB
1024MB=1GB
1024GB=1TB

- 使用
// 返回数组中元素的字节数 (一个元素代表几个字节)
Int8Array.BYTES_PER_ELEMENT

// 以长度参数构造对象
var int8 = new Int8Array(2);
int8[0] = 42;

// 以数组构造对象
var arr = new Int8Array([21,31]);

// 从另一数组构造对象
var x = new Int8Array([21, 31]);
var y = new Int8Array(x);

// 从 ArrayBuffer 构造对象
var buffer = new ArrayBuffer(8);
// buffer byteOffset (选择buffer从左开始的起始位置的偏移) length (选取长度)
var z = new Int8Array(buffer, 1, 4);
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray  

## DataView
:::info 简介
视图是一个可以从 二进制ArrayBuffer 对象中读写多种数值类型的底层接口，使用它时，不用考虑不同平台的字节序问题  
:::
```js{25}
const buffer = new ArrayBuffer(16);
// 创建视图
const view1 = new DataView(buffer);
view1.setInt8(1, 12)
view1.getInt8(1)

setInt8: 写入1个字节的8位整数。
setUint8: 写入1个字节的8位无符号整数。
setInt16: 写入2个字节的16位整数。
setUint16: 写入2个字节的16位无符号整数。
setInt32: 写入4个字节的32位整数。
setUint32: 写入4个字节的32位无符号整数。
setFloat32: 写入4个字节的32位浮点数。
setFloat64: 写入8个字节的64位浮点数。

getInt8: 读取1个字节，返回一个8位整数。
getUint8: 读取1个字节，返回一个无符号的8位整数。
getInt16: 读取2个字节，返回一个16位整数。
getUint16: 读取2个字节，返回一个无符号的16位整数。
getInt32: 读取4个字节，返回一个32位整数。
getUint32: 读取4个字节，返回一个无符号的32位整数。
getFloat32: 读取4个字节，返回一个32位浮点数。
getFloat64: 读取8个字节，返回一个64位浮点数。

- TextDecoder 和 TextEncoder
// 如果二进制是包含文本数据的文件，可将值读取为实际的 JavaScript 字符串

// 默认使用 UTF-8 编码将码位流转换成字节流
const encoder = new TextEncoder('UTF-8');
// 接受一个字符串作为输入，返回一个对参数中给定的文本的编码后的 Uint8Array 类型数组
const bufferArray = encoder.encode('€'); // Uint8Array(3) [226, 130, 172]

// 文本解码器，解码器将字节流作为输入，并提供码位流作为输出 (UTF-8、ISO-8859-2、KOI8-R、GBK)
const decoder = new TextDecoder('UTF-8');
// 返回一个字符串，其包含作为参数传递的缓冲区解码后的文本
const str = decoder.decode(bufferArray); // String "€"
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView  

## Blob
:::info 简介
表示一个不可变、原始数据的类文件对象  
可以看作是存放二进制数据的容器，设置二进制数据的MIME类型
:::
```js{10,14,26}
let array = 'hello world'
// 创建Blob对象，传入Blob/BufferSource/String类型的数组 (必须由数组包裹)
let blob = new Blob([array], { type: 'text/plain'})
blob.size                       // 返回 Blob 的字节数
blob.type                       // 返回 Blob 对象的 type 属性给出文件的 MIME 类型
await blob.text()               // hello world
await blob.arrayBuffer()
await blob.slice(0,5).text()    // 截取 blob 对象指定字节范围

- URL解析Blob，传入 File 对象、Blob 对象
let url = URL.createObjectURL(blob)       // URL显示 hello world
URL.revokeObjectURL(url)

- FileReader解析Blob
let reader = new FileReader();
reader.onload = (evt) => {
    console.log(evt.target.result);
};
// text显示 hello world
reader.readAsText(blob);
// arrayBuffer
reader.readAsArrayBuffer(blob);
// URL显示 hello world
reader.readAsDataURL(blob);

- 区别
createObjectURL
'blob:https://developer.mozilla.org/9277fcfa-27d9-4541-a399-5671a944ebda'
    1. 生成本地内存 URL 地址
    2. 需要撤销 revoke 它们，手动释放内存，不然只有当 doucment 销毁时才清除
readAsDataURL
'data:text/plain;base64,aGVsbG8gd29ybGQ='
    1. 生成本地内存 base64 格式
    2. 无需撤销，自动释放内存，但对内存较大的Blob编码时会消耗更多性能和内存
```
