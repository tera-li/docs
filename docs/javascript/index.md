# JavaScript

**是什么？** 动态脚本语言，解释性或即时编译型语言
```html
1. 解释型: 不需要预先编译，将代码解释成机器码并立即执行，脚本逐行解释执行
2. 即时编译型: 在运行前进行编译得到结果执行
3. 脚本语言: 逐行解释执行代码
4. 动态性: 动态修改对象的属性
5. 跨平台性: 不依赖与操作系统，只需要浏览器支持
```
**作用？** 能够对页面行为事件作出反应，以及创建动态更新的内容

**应用？** 
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
/* 表示对象未下定义 */
var foo;
```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/undefined  

## JS Symbol
```js
/* 表示对象未下定义 */
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
/* for in 循环 */
for (var value in arr) {}
/* for of 循环 */
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

typeof arr === 'object'

Array.isArray(arr) === true

arr instanceof Array === true

arr.constructor.toString().indexOf("Array") > -1

```
参考链接：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array  

## JS Date
```js
```
**作用？**对日期的操作

**创建** var d = new Date(0);

0时间是 1970年1月1日 00:00:00 UTC

` `var d = new Date(2020, 11, 29, 13, 45, 50)

` `年，月（1月是0，12月是11），日，小时，分，秒

**获取时间（Date对象）**

1、getFullYear()：获取以四位数字返回的年份（xxxx）

2、getMonth()：获取月份（0~11）

3、getDate()：获取一个月的某一天（1~31）

4、getDay()：获取一周中的某一天（0~6）星期天为0

5、getHours()：获取小时（0~23）

6、getMinutes()：获取分钟数（0~59）

7、getSeconds()：获取秒数（0~59）

8、getMilliseconds()：获取毫秒

（1）在get后面加上UTC是根据标准世界时间来

9、**getTime**()：获取1970年1月1日至今的毫秒数（当前时间的毫秒数）

10、getTimezoneOffset()：返回本地时间与格林威治标准时间的分钟差

**设置时间（Date对象）**

1、setFullYear()：获取以四位数字返回的年份（xxxx）

2、setMonth()：获取月份（0~11）

3、setDate()：获取一个月的某一天（1~31）

4、setDay()：获取一周中的某一天（0~6）星期天为0

5、setHours()：获取小时（0~23）

6、setMinutes()：获取分钟数（0~59）

7、setSeconds()：获取秒数（0~59）

8、setMilliseconds()：获取毫秒

（1）在set后面加上UTC是根据标准世界时间来

9、setTime()：获取1970年1月1日至今的毫秒数

**方法**

1、Date.**parse**("2020,5,21 3:22:33")：

（1）解析一个日期时间字符串，返回距离1970年1月1日的毫秒数

2、Date.toDateString()：

（1）把Date对象的**日期**部分转换为字符串，并返回结果（部分）

3、Date.toTimeString()：

（1）把Date对象的**时间**部分转换为字符串，并返回结果（部分）

4、Date.toString()：

（1）把Date对象的**全部**部分转换为字符串，并返回结果（部分）

5、Date.toLocaleDateString()：

（1）根据本地时间，把Date对象的**日期**部分转换为字符串，并返回结果（部分）

6、Date.toLocaleTimeString()：

（1）根据本地时间，把Date对象的**时间**部分转换为字符串，并返回结果（部分）

7、Date.toLocaleString()：

（1）根据本地时间，把Date对象**全部**转换为字符串，并返回结果（全部）

8、Date.toISOString()：

（1）使用ISO标准，把Date对象转换为字符串（全部 YYYY-MM-DDTHH:HH:mm:ss:sssZ）

9、Date.toJSON()：

（1）转换为字符串，并格式化为JSON数据格式（全部YYYY-MM-DDTHH:HH:mm:ss:sssZ）

10、UTC(2020,5)：根据世界时返回1970年1月1日到指定日期的毫秒数

11、valueOf()：返回对象的原始值（毫秒数）

**六、Math**

**作用？**用于执行数学任务

Math不像String这类对象，Math是没有构造函数的，但是原型上有，因此不需要new

**属性**

1、Math.E：代表算术常量，自然数的底数，近似于2.718

2、Math.LN2：返回2的自然对数（约0.693）

3、Math.LN10：返回10的自然对数（约2.302）

4、Math.LOG2E：返回2为底的e的对数（约1.4426950408889634）

5、Math.LOG10E：返回10为底的e的对数（约0.434）

6、Math.PI：返回圆周率（约3.14159）

7、SQRT1\_2：返回2的平方根的倒数（约0.707）

8、SQRT2：返回2的平方根（1.414）

**方法**

1、Math.abs(x)：返回x的绝对值

2、Math.acos(x)：返回x的反余弦值

3、Math.asin(x)：返回x的反正弦值

4、Math.atan(x)：以介于 -PI/2 与 PI/2 弧度之间的数值来返回 x 的反正切值

5、Math.atan(x)：返回从 x 轴到点 (x,y) 的角度（介于 -PI/2 与 PI/2 弧度之间）

6、Math.cos(x)：返回数的余弦

7、Math.exp(x)：返回Ex 的指数

8、Math.log(x)：返回数的自然对数（底为e）

9、Math.sin(x)：返回数的正弦

10、Math.tan(x)：返回角的正切

**常用方法**

11、**Math.max**(a,b,c,d,e)：返回其中的最高值

12、**Math.min**(a,b,c,d,e)：返回其中的最低值

13、**Math.pow**(x,y)：返回x的y次幂

14、**Math.random**()：返回0~1之间的随机数

15、**Math.sqrt**(x)：返回数的平方根

16、**Math.round**(x)：四舍五入

17、**Math.floor**(x)：对x进行下舍入

18、**Math.ceil**(x)：对x进行上舍入

**七、RegExp**

**作用？**正则表达式：描述字符模式的对象

`    `用于对字符串模式匹配及检索替换

**创建** var patt = new RegExp('xxx','g)

` `var patt = /pattern/modifiers

（1）表达式的模式，修饰符：指定全局匹配，区分大小写，多行匹配

**修饰符（区分大小写和全局匹配）**

1、g：全局匹配（不设置会匹配第一个后停止匹配）

2、i：对大小写不敏感匹配

3、m：执行多行匹配

**方括号（查找某个范围的字符）**

1、[abc]：查找方括号之间的任何字符（[a-h]，[a,b,?]）

2、[^abc]：查找不在方括号之间的任何字符（[a-h]，[a,b,?]）

3、[0-9]：查找0到9的数字

4、[a-z]：查找小写a到小写z的字符

5、[A-Z]：查找大写A到大写Z的字符

6、[A-z]：查找大写A到小写z的字符（相当于全部英文字符）

7、(red|blue|green)：查找任何指定的选项（匹配red or blue or green字符）

**元字符（拥有特殊含义的字符）**

1、.：查找单个字符，除了换行符（/./g）

2、\w：查找单词字符（a，b，c）

3、\W：查找非单词字符（！，&，%）

4、\d：查找数字

5、\D：查找非数字

6、\s：查找空白符

7、\S：查找非空白符

8、\b：匹配单词边界（/\babos/：匹配abos开头或结尾的单词）

9、\B：匹配非单词边界（/\Babos/：匹配abos开头或结尾或中间位置的单词）

10、\0：查找NULL字符（\0 NULL符）

11、\n：查找换行符（\n 换行符）

12、\f：查找换页符（\f 换页符）

13、\r：查找回车符（\r 回车符）

14、\t：查找制表符（\t 制表符）

15、\v：查找垂直制表符（\v 垂直制表符）

16、\xxx：查找以八进制数xxx规定的字符（/\127/）

17、\xdd：查找以十六进制数dd规定的字符（/\x57/）

18、\uxxxx：查找以十六进制数xxxx规定的字符（/\u0057/）

**量词**

1、n+：匹配至少一个字符串（a+：aaa，/\w+/：所有单词）

2、n\*：匹配包含0个或多个n的字符串

3、n？：匹配包含0个或一个n的字符串

4、n{X}：匹配X个n的序列的字符串（a{2}：匹配aa，不匹配a）

4、n{X,}：匹配至少X个n的序列的字符串（a{2,}：匹配aa，aaa，不匹配a）

5、n{X,Y}：

（1）匹配至少模式n连续出现至少X次，最多Y次（n{1,3}：匹配n，nnn）

6、n$：匹配以n结尾的字符串（/\w$/：匹配已单词结尾）

7、^n：匹配以n开头的字符串（/\^w/：匹配已单词开头）

8、?=n：匹配紧跟n的字符串（/is(?=all)/：匹配is all，all紧跟is）

9、?!n：匹配不是紧跟n的字符串（/is(?!all)/：‘is all is’，匹配is，后面没有紧跟all）

**RegExp方法**

1、**regexp.exec(string)**：检索字符串指定位置，找到**返回匹配值**（未找到返回null）

2、**regexp.test(string)**：检索字符串指定位置（返回true或false）

3、toString：返回正则表达式的字符串

**支持正则表达式的String对象方法**

1、**search(regexp)**：检索与正则表达式相匹配的值（返回索引值，未找到返回-1）

2、**match(regexp)**：找到一个或多个正则表达式的匹配（返回匹配的数组值，未找到返回null）

3、**replace(/blue/g,"red")**：替换匹配成功的字符串（匹配到blue会替换为red）

4、**split(/s/)**：把字符串分割为字符串数组（匹配为空的地方分割）

**对象属性**

1、global：判断是否设置“g”修饰符

2、ignoreCase：判断是否设置“i”修饰符

3、multiline：判断是否设置了“m”修饰符

4、lastIndex：规定下次正则匹配的起始位置

5、source：返回正则表达式的匹配模式（/\w/：返回\w）

**八、全局属性、函数**

**属性**

1、infinity：正无穷大（-infinity负无穷大）

2、NaN：非数字

3、undefined：未定义

**函数**

1、decodeURI：解码某个编码的URI（解码）

2、decodeURIComponent：解码一个编码的URI组件

3、encodeURI：把字符串编码为URI（编码）

4、encodeURIComponent：把字符串编码为URI组件

5、escape：对字符串进行编码（建议用encodeURI）

6、unescape：对escape编码进行解码（建议用decodeURI）

6、eval：计算JavaScript字符串，并当做脚本执行eval("x=10;document.write(x+10)")

7、isFinite：检测某个值是否为无穷大的数

8、isNaN：检测某个值是否是数字

9、Number：把对象的值转换为数字

10、parseFloat：解析一个字符串返回一个浮点数

11、parseInt：解析一个字符串返回一个整数

12、String：把对象的值转换为字符串

**九、运算符**

**作用？**用于赋值，比较值，执行算术

**算术运算符**

1、+：加法（x = y + 1）

2、-：减法（x = y - 1）

3、\*：乘法（x = y \* 1）

4、/：除法（x = y / 2）

5、%：余数（x = y % 2）

6、++：自增1（x = y++）

7、--：自减1（x = y--）

**赋值运算符**

1、=：右边赋值在左边（x = y）

2、+=：右边+左边赋值给左边（x += y）

3、\*=：右边\*左边赋值给左边（x \*= y）

4、/=：x/y 赋值给x（x /= y）

5、%=：x%y赋值给x（x%=y）

**比较运算符**

1、==：等于

2、===：值与类型均相等（恒等于）

3、!=：不等于

4、!==：值与类型均不等（不恒等于）

5、>：大于

6、<：小于

7、>=：大于等于

8、<=：小于等于

**条件运算符（三目运算符）**

变量 = （条件）？值1：值2

**逻辑运算符**

1、&&：和（并且）逻辑与

2、||：或         逻辑或

3、!：非（相反）   逻辑非

**位运算符**

**位运算符工作在32位的数字上，任何操作都将转换为32位，结果会转换为JavaScript数字**

1、&：AND（x = 5 & 1）

2、|：OR（x = 5 | 1）

3、~：取反（x = 5 ~ 1）

4、^：异或（x = 5 ^ 1）

5、<<：左移（x = 5 << 1）

6、>>：右移（x = 5 >> 1）

**其他操作符**

**条件操作符(?:)**

a ? 1 : 2

**空值合并操作符(??)**

左侧为undefined || null时，返回右侧操作数，否则返回左侧操作数

(undefined || null) ?? 111 // -> 111

222 ?? 111    // -> 222

**void运算符**

对给定表达式求值，返回值变为undefined

function toDo() {

`    `return 111

}

void toDo()   // -> undefined

void

**十、Error**

**作用？**在错误发生时提供错误的提示

**对象属性**

1、name：设置或返回一个错误名

（1）EvalError：eval()函数产生的错误，新版JavaScript使用SyntaxError

（2）RangeError：数值超出规定范围

（3）ReferenceError：非法引用

（4）SntaxError：语法错误

（5）TypeError：类型错误

（6）URIError：encodeRUI()函数产生的错误

2、message：用于设置或返回一个错误信息

**3、throw，try，catch**

（1）try：测试代码块是否错误

（2）catch：处理语句错误（catch（err）{ }）

（3）throw：创建自定义错误（throw “值为空”）

（4）finally：无论代码块是否错误都将执行该语句

**十一、Object**

object使其可以迭代器循环

Object.entries(obj)

new Map().set('obj',obj)

<!-- ![clipboard.png](./assets/Aspose.Words.5db4df40-537c-4891-ba1b-10352a7ab14e.001.png) -->

使用symbol.iterator创建迭代，每次调用迭代都返回next()迭代器的返回值value

把next()放入迭代闭包中，通过闭包返回迭代器

提前终止迭代器

需要在return中，添加return函数，如下

return() {

console.log('exiting early')

return { done: true }

}

**在迭代时，通过条件判断提前break，则会触发return函数**

**但是，再次迭代该对象时，还是会继续输出未输出完的迭代值**

Object作用域

<!-- ![clipboard.png](./assets/Aspose.Words.5db4df40-537c-4891-ba1b-10352a7ab14e.002.png) -->

内部函数执行新赋值Object的name值，函数执行结束后将销毁

而当做参数传入的外部引用对象，堆内存中已存入name值为11111，销毁不影响外部引用对象

**十二、其他**

tostring

返回调用**对象的值的字符串**

valueof

返回调用**对象原始值**，**没有原始值**返回**对象本身**
