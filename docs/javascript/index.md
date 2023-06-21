# JavaScript Basics

JavaScript（JS）是一种具有函数优先特性的轻量级、解释型或者说即时编译型的编程语言。

```html
1. 解释型: 不需要预先编译，将代码解释成机器码并立即执行，脚本逐行解释执行
2. 即时编译型: 在运行前进行编译得到结果执行
3. 脚本语言: 逐行解释执行代码
4. 动态性: 动态修改对象的属性
5. 跨平台性: 不依赖与操作系统，只需要浏览器支持
```

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Document</title>
    <meta charset="UTF-8" />
    <meta name="description" content="这是一个网页" />
    <!-- 通过src引入外部JavaScript脚本 -->
    <script src="index.js"></script>
  </head>
  <body>
    <!-- 在body标签内插入script标签使用 -->
    <script></script>
  </body>
</html>
```
## Js String
```js
/* 定义字符串 */
var str = new String('hello world')
var str = 'hello world'
var str = "hello world"
```
- **访问字符串**
```js
var str = 'hello world'
/* 返回字符串的长度 */
str.length = 11
/* 查询字符所处字符串中首次出现的索引，无则返回-1 */
str.indexOf('xx')
/* 查询字符所处字符串中最后出现的索引，无则返回-1 */
str.lastIndexOf('xx')
/* 传入字符串或正则表达式，搜索匹配返回索引，无则返回-1，传入字符会隐式调用new RegExp(obj) */
str.search('xx')
/* 传入字符串或正则表达式，搜索匹配返回相关信息的数组，无则返回null，传入字符会隐式调用new RegExp(obj) */
str.match(/llo/)
/* 返回索引指定下标的字符 */
str.charAt(1)
str[0]
/* 返回索引指定下标的UTF-16代码单元 */
str.charCodeAt(1)
/* 解析为UTF-16的字符串 */
str.fromCharCode(67)
/* 返回String对象的原始值 */
str.valueOf()
```
- **操作字符串**
```js
var str = 'hello world'
/* 设置开始和结束索引(接受负数)，不设置第二个参数，将截取剩余全部部分 */
/* start(包含)，end(不包含)，end设置负数，则将计算为end = strLength + end */
str.slice(0, 5)
/* 同上，不接受负数 */
str.substring(0, 5)
/* str.replace(regexp|substr, newSubStr|function) */
/* 匹配param0: 正则对象|字面量，替换param1: 字面量|函数 */
str.replace('l', 'x')
str.replace(/l/, 'x')
str.replace('l', (e) => e + 'x')
/* 字符串全部转换为大写 */
str.toUpperCase()
/* 字符串全部转换为小写 */
str.toLowerCase()
/* 将字符串以指定符号分割字符串并放入数组，第二个参数为返回数组的最大长度 */
str.split(' ', 3)
/* 包装方法，非标准方法，有些浏览器可能不支持 */
1. str.big(): 大号字体
2. str.small(): 小号字体
3. str.bold(): 粗体字体
4. str.italics(): 斜体字体
5. str.fixed(): 打字机文本字体
6. str.blink(): 使用闪动字符串字体
7. str.sub(): 下标字符串字体
8. str.sup(): 上标字符串字体
9. str.link(): 字符串字体显示为链接
/* 复制字符串指定次数，并链接在一起 */
str.repeat(3)
/* 连接两个或多个字符串 */
str.concat('1','2')
/* 删除字符串两端的空白符 */
str.trim()
/* 判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false */
str.includes('To be')
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String  

## JS Number
```js
/* 定义数字 */
var num = new Number(100)
var num = 100
```
- **Number对象属性**
```js
/* 表示在 JavaScript 中最大的安全整数，2^53 - 1，9007199254740991 */
Number.MAX_SAFE_INTEGER
/* 表示在 JavaScript 中最小的安全整数，-(2^53 - 1)，-9007199254740991 */
Number.MIN_SAFE_INTEGER
/* 表示正无穷大，Infinity */
Number.POSITIVE_INFINITY
/* 表示负无穷大，-Infinity */
Number.NEGATIVE_INFINITY
/* 表示“非数字”（Not-A-Number），和 NaN 相同 */
Number.NaN
```
- **Number对象方法**
```js
/* 检测传入的参数是否是一个有穷数，返回一个布尔值，Infinity */
Number.isFinite(0)
/* 判断给定的参数是否为整数，返回一个布尔值 */
Number.isInteger(5.5)
/* 确定传递的值是否为 NaN，返回一个布尔值(全局isNaN会将传入的值转换为数字，再进行比较，isNaN("123qwe") === Number.isNaN(Number("123qwe"))) */
Number.isNaN('NaN')
/* 把一个字符串解析成浮点数 */
Number.parseFloat('123.123')
/* 依据指定基数radix，表示进制的基数，解析字符串并返回一个整数 */
Number.parseInt('123.123', radix)
/* 使用定点表示法来格式化一个数值 */
Number.toFixed(2)
/* 返回指定 Number 对象的字符串表示形式 */
Number.toString()
/* 返回一个被 Number 对象包装的原始值 */
Number.valueOf()
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number  

## JS Boolean
```js
/* 定义布尔值 */
var bool = new Boolean()
var bool = false | true;
/* 返回表示指定的布尔对象的字符串 */
bool.toString()
/* 返回一个Boolean对象的原始值 */
bool.valueOf()
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Boolean  

## JS null
```js
/* 特指对象的值未设置 */
var foo = null;
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/null  

## JS undefined
```js
/* 表示对象未定义 */
var foo;
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined  

## JS Symbol
```js
/* 原始数据类型 Symbol ，表示独一无二的值，最大的用法是用来定义对象的唯一属性名。 */
var sym = Symbol('sym');
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol  

## JS BigInt
```js
/* 表示任意大的整数 */
var bigNum = BigInt(9007199254740991);
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/BigInt  

## Js Array
```js
/* 定义数组 */
var arr = [item1, item2, item3,...]
var arr = new Array(item1, item2, item3,...)
var arr = Array.from(arr1)
```
- **访问数组元素**
```js
var arr = [1, 2, 3]
/* 返回数组的长度 */
arr.length = 3
/* 返回索引指定下标的元素 */
arr[0]
/* 返回匹配给定元素的第一个索引，若没有找到则返回 -1 */
arr.indexOf(1)
/* 返回匹配给定元素的最后一个索引，若没有找到则返回 -1 */
arr.lastIndexOf(1)
/* 返回Array对象的原始值 */
arr.valueOf()
```
- **操作数组**
```js
var arr = [1, 2, 3]
/* 改变下标为0的数组元素 */
arr[0] = 'array'
/* 截取数组的开始下标和结束下标之间的元素 */
arr.slice(0, 1)
/* 颠倒数组中元素的顺序 */
arr.reverse()
/* 返回一个数组的迭代对象，可以通过next()迭代 */
arr.entries()
/* 返回一个数组包含组键的可迭代对象，可以通过next()迭代 */
arr.keys()
/* 返回一个数组包含组值的可迭代对象，可以通过next()迭代 */
arr.values()
/* 用一个固定值替换指定范围的数组元素 
   填充的值，开始索引，结束索引
*/
arr.fill(value, start, end)
/* 浅复制数组的一部分到同一数组中的另一个位置
   复制到指定索引，复制元素起始位置，停止复制的索引位置 
*/
arr.copyWithin(target, start, end)
/* 通过指定字符把数组的元素分割为一个字符串 */
arr.join('|')
/* 将数组转换为字符串，用逗号隔开
   内部调用join函数进行返回
   如果join方法不可用，则调用Object.prototype.toString()，返回[object Array]
*/
arr.toString()
/* 对数组进行升序或降序排序 */
arr.sort()
/* 升序 */
arr.sort((a,b) => a - b)
/* 降序 */
arr.sort((a,b) => b - a)
/* 判断一个数组是否包含一个指定的值，根据情况返回 true 或 false */
arr.includes(item)
/* 将一个或多个元素添加到数组的末尾，并返回该数组的新长度 */
arr.push(item)
/* 从数组中删除最后一个元素，并返回该元素的值 */
arr.pop()
/* 将一个或多个元素添加到数组的开头，并返回该数组的新长度 */
arr.unshift(item)
/* 从数组中删除第一个元素，并返回该元素的值 */
arr.shift()
/* 通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被删除的内容 */
arr.splice(start,deleteCount,item,item1...)
```
- **遍历数组元素**
```js
var arr = [1, 2, 3]
/* 基础for循环 */
for (let i = 0; i < arr.length; i++) {}
/* 基础while循环 */
var n = 0; while (n < 3) { n++; }
/* 基础do while循环 */
var i = 0; do { i += 1; } while (i < 5);
/* for in 循环，迭代自身和继承的prototype的属性，返回的是key */
for (var key in arr) {}
/* for of 循环，迭代定义要迭代的数据，可自定义迭代数据，返回的是value */
for (var value of arr) {}
/* foreach循环，对数组的每个元素执行一次给定的函数 
   箭头函数内部无法获取指定的this，普通函数可以获取指定的this*/
arr.forEach((item,index,arr) => {}, this)
/* map循环，创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成 */
arr.map((item,index,arr) => {}, this)
/* 测试一个数组内的所有元素是否都能通过某个指定函数的测试，返回一个布尔值 */
arr.every((item,index,arr) => {}, this)
/* 测试数组中是不是至少有 1 个元素通过了被提供的函数测试，返回一个布尔值 */
arr.some((value,index,arr) => {}, this)
/* 创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素 */
arr.filter((item,index,arr) => {}, this)
/* 返回数组中满足提供的测试函数的第一个元素的值，否则返回 undefined */
arr.find((item,index,arr) => {}, this)
/* 返回数组中满足提供的测试函数的第一个元素的索引，若没有找到对应元素则返回 -1 */
arr.findIndex((item,index,arr) => {}, this)

/* reduce循环计算，
   数组中的每个元素按序执行一个由您提供的 callback 函数，
   每一次运行 callback 会将先前元素的计算结果作为参数传入，最后将其结果汇总为单个返回值 

   previousValue: 上一次调用 callbackFn 时的返回值。在第一次调用时，若指定了初始值 initialValue，其值则为 initialValue，否则为数组索引为 0 的元素 array[0]
   currentValue: 数组中正在处理的元素。在第一次调用时，若指定了初始值 initialValue，其值则为数组索引为 0 的元素 array[0]，否则为 array[1]
   currentIndex: 数组中正在处理的元素的索引
   array: 用于遍历的数组
   initialValue: 初始值
   */
arr.reduce((
  previousValue,
  currentValue,
  currentIndex,
  array
  ) => {}, initialValue
)
```
- **判断识别数组**
```js
var arr = [1, 2, 3]

// typeof arr === 'object' === true

Array.isArray(arr) === true

/*
   检测构造函数的 prototype(原型) 属性是否出现在某个实例对象的原型链上
   Array.prototype === arr.__proto__
*/
arr instanceof Array === true

/* function Array() { [native code] }，返回构造函数对象的字符串 */
arr.constructor.toString().indexOf("Array") > -1 === true
/*
   Object对象的toString() 返回 "[object type]"
   其中 type 返回的是调用对象的类型，使用call让toString方法执行对象指定为Array
   将返回指定对象的type [object Array]
*/
Object.prototype.toString.call(arr).indexOf("Array") > -1 === true

```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array  

## JS Date
```js
/* 定义日期时间，返回当地时间 */
var date = new Date();
var date = new Date(1667433600000);
var date = new Date('2022-11-03');
var date = new Date(2022,10,3,8,9,8,7);
```
- **访问日期时间**
```js
var date = new Date();
/* 返回指定日期的年份 */
date.getFullYear()
/* 返回指定日期的月份 0~11 */
date.getMonth()
/* 返回指定日期一个月中的哪一日 */
date.getDate()
/* 返回指定日期中一周的第几天 */
date.getDay()
/* 返回指定日期对象的小时 */
date.getHours()
/* 返回指定日期对象的分钟数 */
date.getMinutes()
/* 返回指定日期对象的秒数 */
date.getSeconds()
/* 返回指定日期对象的毫秒数 */
date.getMilliseconds()
/* 返回一个时间的格林威治时间数值 */
date.getTime()
/* 返回协调世界时（UTC）相对于当前时区的时间差值，单位为分钟 */
date.getTimezoneOffset()
/* 返回该日期对象的字符串，可以格式化日期字符串 */
date.toLocaleString("zh-cn", { hour12: false })
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date  

## JS Math

- **Math**
```js
/* 圆周率 */
Math.PI
/* 向上取整 */
Math.ceil(4.15)
/* 向下取整 */
Math.floor(4.95)
/* 四舍五入取整 */
Math.round(4.55)
/* 返回一个浮点数，伪随机数在范围0～1。(包括 0)(排除 1) */
Math.random()
/* 返回作为输入参数的最大数字 */
Math.max(1, 3, 2)
/* 返回作为输入参数的最小数字 */
Math.min(1, 3, 2)
/* 返回一个数字的绝对值 */
Math.abs(-999)
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math  

## JS RegExp
```js
/* 定义正则 */
var reg = new RegExp(/hello/,'g')
/* 一个指定字符串中执行一个搜索匹配。返回 [] || null */
reg.exec('hello')
/* 执行一个检索，用来查看正则表达式与指定的字符串是否匹配。返回 true || false */
reg.test('hello')

var str = 'hello'
/* 执行正则表达式和 String 对象之间的一个搜索匹配。返回索引 || -1 */
str.search(/hello/g)
/* 返回一个字符串匹配正则表达式的结果。返回 [] || null */
str.match(/hello/g)
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Regexp  

## JS Error
```js
/* 定义Error错误对象 */
new Error('Error')
/* 
   表示错误的原因：数值变量或参数超出其有效范围
   递归调用、无效的数组长度定义
   RangeError: Maximum call stack size exceeded.
   RangeError: Invalid array length
*/
new RangeError('RangeError')
/* 
   表示错误的原因：无效引用
   Uncaught ReferenceError: qwe is not defined
*/
new ReferenceError('ReferenceError')
/* 
   表示错误的原因：语法错误
   语法错误在解析/编译期间发生
   Uncaught SyntaxError: Unexpected identifier 'qrcode'
*/
new SyntaxError('SyntaxError')
/* 
   表示错误的原因：变量或参数不属于有效类型
   对错误的数据类型执行操作时发生
   Uncaught TypeError: [].toUpperCase is not a function
*/
new TypeError('TypeError')
/* 
   给 encodeURI() 或 decodeURI() 传递的参数无效
   Uncaught URIError: URI malformed
*/
new URIError('URIError')

/* 捕获错误，标记要尝试的语句块，并指定一个出现异常时抛出的响应 */
/* try...catch...finally */
try {
   console.log('执行：try')
   throw new RangeError('RangeErrorMessage')
} catch(err) {
   console.log(`执行：${err} ${err.name} ${err.message}`)
} finally {
   console.log('执行：finally')
}
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error  
