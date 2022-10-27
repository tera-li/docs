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
// 定义字符串
var str = new String('hello world')
var str = 'hello world'
var str = "hello world"
```
**查找字符串**

1、length：字符串长度

2、str.indexOf('xx')：查找字符串，从前到尾，返回首次出现的索引（位置）

3、str.lastindexOf('xx')：查找字符串，从尾到前，返回最后一次出现的索引（位置）

（1）indexOf()和lastindexOf()未找到均返回-1

（2）接受第二个参数，number，表示检索的起始位置

4、search()：与indexOf()作用一样，但是可以设置正则表达式，搜索能力更强

5、marth()：与indexOf()作用一样，但返回值是指定搜索的值

**提取部分字符串**

1、slice(start，end)：设置开始和结束索引（接受负数），不设置第二个参数，将截取剩余全部部分

（1）start（包含），end（不包含）

2、str.substring(start，end)：和slice方法一样（不接受负数）

3、str.substr(start，end)：和slice方法一样（第二个参数表示为长度）

**替换字符串内容**

1、str.replace(“要匹配的值”，“要替换的值”)：只替换首个匹配（对大小写敏感）

（1）接受正则表达式匹配

**转换为大写和小写**

1、str.toUpperCase()：转换为大写

2、str.toLowerCase()：转换为小写

3、str.toLocaleUpperCase()：根据本地语言环境转换为大写

4、str.toLocaleLowerCase()：根据本地语言环境转换为小写

**提取字符串字符**

1、str.charAt(number)：返回字符串指定下标的字符

2、str.charCodeAt(number)：返回字符串指定下标的unicode编码

3、str.fromCharCode(number)：返回数字对于的Unicode编码字符

4、str[0]：属性访问字符串下标返回指定字符（不能对其str赋值改变字符）

**把字符串转换为数组**

1、str.split("|" or " " or "，"，number)：

（1）以指定的符号分割字符串放入数组，第二个参数为返回数组的最大长度

**包装方法（非标准方法，有些浏览器可能不支持）**

1、str.big()：大号字体

2、str.small()：小号字体

3、str.bold()：粗体字体

4、str.italics()：斜体字体

5、str.fixed()：打字机文本字体

6、str.blink()：使用闪动字符串字体

7、str.sub()：下标字符串字体

8、str.sup()：上标字符串字体

9、str.link()：字符串字体显示为链接

样式

10、str.fontcolor()：改变字符串字体颜色

11、str.fontsize()：改变字符串字体大小

**其他方法**

1、str.repeat(number)：复制字符串指定次数，并链接在一起

2、str.concat(str1,str2)：连接两个或多个字符串

3、str.trim()：删除字符串两端的空白符

3、str.valueOf()：返回String对象的原始值

**二、Array**

**什么是数组？特殊变量，能够一次存放一个及多个值**

**创建数组**

1、var arr = [arr1,arr2,arr3,...]

2、var arr = new Array(arr1,arr2,arr3,...)：第一种方法更简洁，执行速度更快

3、var arr = Array.from(arr1)：通过给定对象(拥有length属性)创建一个数组

1、const iter = { \*[Symbol.iterator] () { yidld 1; yidld2 } }

2、Array.from(iter(迭代对象))：输出迭代对象数组

**访问数组元素**

1、arr.length：数组的长度

2、var item = arr[0]：0是数组元素下标的开始，0代表第一个元素

3、arr.length - 1：访问最后数组的最后一个元素

4、arr.indexOf()：返回数组中指定元素的位置，

5、arr.lastindexOf()：返回数组中指定元素，最后出现的位置

4、**arr.entries()**：返回一个数组的迭代对象，可以通过next()迭代

5、**arr.keys()**：返回一个数组包含组键的可迭代对象，可以通过next()迭代

3、arr.valueOf()：返回Array对象的原始值

**改变数组元素**

1、arr[0] = ’array‘：改变下标为0的数组元素

2、arr.fill(value，start，end)：用一个固定值替换数组的元素

（1）填充的值，开始填充的位置，停止填充位置

3、arr.copyWithin(target， start， end)

（1）复制到指定位置，复制元素起始位置，停止复制的索引位置

4、arr.join("" or "|" or "and"...)：通过指定字符把数组的元素转换为一个字符串

5、arr.toString()：将数组转换为字符串，用逗号隔开

6、arr.reverse()：颠倒数组中元素的顺序

7、slice(start，end)：设置开始和结束索引（接受负数），不设置第二个参数，将截取剩余全部部分

（1）start（包含），end（不包含）

8、sort(function(a,b){return a-b })：对数组进行升序或降序排序，可以定义一个函数接收参数来排序

**遍历数组元素**

1、for循环：for(初始化值，表达式，后置循环表达式)

2、while()：

3、arr.foreach(function(item,index,arr))：循环数组，调用每个数组元素，传递给回调函数

4、arr.map(function(item,index,arr))：循环处理每个数组元素，返回一个新数组

5、arr.reduce(function(total,value,index,arr), initvalue)：

接收一个函数作为累加器，数组中每个值(从左到右)开始缩减，最终计算为一个值

（1）（初始值或者是计算后的累积值，当前处理元素，索引，数组对象）

（2）initvalue初始值(作为计算的第一个元素，若没有则使用数组中的第一个元素)

（3）arr.reduce()从右到左

**添加删除数组元素**

1、push()：末尾添加新元素（返回数组新长度，添加一个或多个元素）

2、pop()：末尾删除新元素（返回删除的元素，改变长长度）

3、unshift()：首部添加元素（返回数组新长度，添加一个或多个元素）

4、shift()：首部删除元素（返回删除的元素，改变长长度）

5、splice(index,howmany,item,item1...)：对数组进行添加删除元素

（1）下标定义在哪个位置插入或删除，删除多少元素(0表示不删除)，需要添加到的数组的元素

**检测数组**

1、arr.every(function(value，index，arr))：判断数组是否全都符合指定条件

1、arr.some(function(value，index，arr))：判断数组是否满足指定条件

2、arr.filter(function(item,index,arr))：接收一个回调函数，返回值为过滤成功的值

3、arr.find(function(item,index,arr))：接收一个回调函数，返回值为通过指定条件的第一个值

4、arr.findIndex(function(item,index,arr))：作用同上，返回值为通过指定条件的第一个值的下标

5、arr.includes(item)：判断一个数组是否包含指定值，返回true or false

**判断识别数组**

使用typeof会返回’object‘

1、Array.isArray(arr)：true or false

2、自定义isArray：arr.constructor.toString().indexOf("Array") > -1

3、使用instanceof元素符：arr instanceof Array

**三、Boolean**

**作用？**将非布尔值转换为布尔值（true或false），检测对象是true还是false

**创建布尔** var bool = new Boolean(0)

1、toString()：将布尔值转换为字符串，并返回结果

2、valueOf()：返回Boolean对象的原始值

**四、Number**

**作用？**对数字的一些操作

**创建** var number = new Number(100)

` `number

**Number对象属性**

1、MAX\_VALUE：表示最大数，表示无穷大

2、MAX\_VALUE：表示最小数，表示无穷小

3、POSITIVE\_INFINITY：表示负无穷大，infinity

4、NEGTIVE\_INFINITY：表示负无穷大，-infinity

5、NaN：非数字，用于指示某个值不是数字

**Number对象方法**

1、Nnmber.isFinite(0)：检测参数是否为无穷大

（1）不会将值转换为number对象，如果不是number对象，则返回false

2、Number.toExponential()：可把对象的值Number对象转换成指数计数法

（1）6000000000 = 6 \* 10000000000 = 6e + 10

3、Number.toFixed(2)：可把Number四舍五入到指定小数点位数的数字

4、Number.toPrecision(2)：可在对象的值超出指定位数时将其转换为指数计数法

5、Number.toString()：把数字转换为字符串

6、Number.valueOf()：返回一个Number的基本数值

**五、Date**

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
