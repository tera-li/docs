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
:::


new TextDecoder()文本解码器，可以解析数据视图中的**数字**为**对应字符**


**Dataview视图**

**用于向底层ArrayBuffer写入值**

**new DataView**(buffer,byteOffset,byteLength)

**参数**

buffer：存在的**ArrayBuffer**对象

byteOffset：第一个字节在buffer中的字节偏移（默认第一个字节开始）

byteLength：指定DataView对象的字节长度（默认匹配buffer的长度）

**方法**


设置ArrayBuffer中对应的-bit数（8，16，32，64无符号字节）

**TypedArray**

所有Uint8Array、Uint16Array都称为TypedArray


**TypedArray**拥有**数组的所有方法**，除了**splice**和**concat**

**TextDecoder、TextEnCoder**

可以解码所有二进制arrayBuffer、有无符号整数（Uint8Array、Int8Array）

**Blob除外[Blob.note](note://FC8962FCACC64C0B83C58D232291E732)**

**new TextDecoder（label，options）**：文本**解码器**（将**字节**转换为**字符串**）

**label**：默认utf-8格式

**options：**

fatal：默认为false，使用\uFFFD替换无效字符，为true则无效字符抛出异常（不可解码）

**方法**

**decode**(**BufferSource**,stream)

**buffersource**：arraybuffer对象本身，或者是arraybuffer的视图类型（如Uint8Array、Uint16Array等）

stream：对于解码流，为true，则将传入的buffer作为参数重复decode，表示“未完成”的字符，并在下一个数据块来的时候进行解码


**new TextEncoder（）**：文本**编码器**（将**字符串**转换为**字节**）

只支持utf-8编码

**encode**(str)

字符串编码成Uint8Array


encodeInto(str, destination)

将str编码到destination中，该目标必须为Uint8Array


**Blob**

表示一个不可变、**原始数据的类文件对象**，数据可以按文本二进制的格式进行读取，用于数据操作

Blob最大的用途就是**解析转换为URL地址**，当然他也可以**转换为file之类的文件**或**ArrayBuffer**

**new Blob**(blobParts,options)

blobParts：Blob/BufferSource/String类型的数组（必须由数组包裹）

options

type：Blob类型（如image/png，text/html）

endings：是否转换换行符，使Blob对应当前操作系统的换行符（\r\n或\n）

默认啥也不做，false


方法

blob.**slice**()（blob使无法更改的，但是可以通过slice获得多个部分的Blob）

byteStart：起始字节，默认为0

byteEnd：最后一个字节（默认为最后）

contentType：新blob的type，默认与源Blob的type相同

**Blob用作URL**


可以将blob转换为字符串，地址用作于url地址

使用URL.createObjectURL(blob)将Blob转换为字符串

**Blob用作base64**

使用内建的FileReader方法，该方法继承与Blob


以上都可转换为url

createObjectURL需要撤销revoke它们，释放内存，直接访问Blob无需编码解码

readAsDataURL无需撤销，但对大的Blob编码时会消耗性能和内存

**Blob转ArrayBuffer**


使用FileReader构造函数转换

**File和FileReader**

**File**对象继承自Blob，并扩展了与文件系统相关的功能

**new File**(fileRarts,fileName,[options])

fileParts：Blob/BufferSource/String类型值的数组

fileName：文件名字符串

options：

lastModified：最后一次修改的时间戳

<input type="file" onchange="showFile(this)"/>

当文件上传时，会触发方法，this里面会有file的信息


**new FileReader()**// 没有参数

**readAsArrayBuffer**(blob)：将数据读取为二进制格式的ArrayBuffer。

**readAsText**(blob, [encoding])：将数据读取为给定编码（默认utf-8编码）的文本字符串

**readAsDataURL**(blob)：读取二进制数据，并将其编码为base64的data url

**abort**()：取消操作

以上读取过程，有以下事件


1

**FormData**

提供表示表单数据的键值对key/value的构造方式，也可以通过XMLHttpRequest.send()发送

Formdata对象，可以设置**header**为**application/x-www-form-urlencoded**

在发送服务端时，会**自动设置编码类型**“**multipart/form-data**”，它会**使用和表单一样的格式**

**new FormData(form)**

form：指定form表单元素

将**自动把form中的表单值也包含进去**，**文件内容也会被编码**

**方法**

**append(name,value,filename)**

name：key

value：String || Blob || File

filename：传给服务器的文件名称


**delete(name)**

要删除的键（key）的名字


**entries()**

返回iterator（可迭代），可以遍历formdata


**get(name)**

获取值的键名（如果有重复的，就返回第一个）


**getAll(name)**

获取所有的值的键名


**has(name)**

检测查询的name


**keys()**

返回一个name的迭代器


// key1，key2

**set(name,value,filename)**

他和append作用一样

不同之处

set会覆盖存在的相同key所对应的值，不会重复添加

**values()**

返回一个value的迭代器


// valu1，value2

**URL**

返回一个新创建的URL对象，表示由一组参数定义的URL（还是URl）

如果给定的URL或生成的URL不是有效的URL链接，则会抛出一个TypeError

new URL(url, base)

url：表示一个绝对或者相对的URL，将base用作基准URL

base：表示一个基准URL的DOMString，默认为相对路径

USVString === DOMString 直接映射一个 String


new URL()属性

hash：返回URL中#的表示hash值

host：返回URL中的主机名

hostname：返回URL中的域名

href：返回URL完整的USVString值

origin：返回URL源经过Unicode序列化的值

pathname：返回URL路径名

port：返回URL的端口号

protocol：返回URL的协议

search：返回URL接口搜索字符串（如get查询字符串）

searchParams：返回URL的查询参数（查询的value，不包含key）

new URL()方法

URL.createObjectURL(object)

object用于创建URL的file文件、blob对象、mediaSource对象

**内存管理**

每次调用该方法会创建新的URL对象，即使你已经用相同对象作为创建过

可以使用URL.revokeObjectURL()方法来释放该对象

URL.toJSON

以字符串形式返回URL

URL.toString

以字符串形式返回URL

是一种数据格式，不是变成语言，JSON不属于JavaScript

语法表示的值

简单值

直接表示string，number，Boolean，null

数组

与JavaScript一样的数组，具有二维数组、三维等，对象组为数组元素

对象

对象使用{}包括，使用每组由键值对构成

JSON格式

对象的属性必须加上双引号

末尾没有分号

json能够直接解析为JavaScript对象

JSON.parse()

序列化JavaScript

JSON.stringify(object，filter，indent)

JavaScript对象

过滤需要转换的属性，只会过滤出包含的属性，可以是数组

是否保留缩进（true, false）

JSON.stringify({a:123,b:321}, (q,w) => {return w},1)

第一个参数，value：需要转换为json字符串的值

第二个参数，为函数时

接收两个参数，key和value，可以进行处理，返回的就是处理过后的值

第二个参数，为数组时


接收需要转换的key

返回接收的key和value的对象

第三个参数，json字符串的缩进
