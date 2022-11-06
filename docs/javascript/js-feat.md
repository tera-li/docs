# JavaScript New Features
## ES6(ES2015)
- **let与const**
```js
{
    /* 
        不存在变量提升
        报错 Cannot access 'a' before initialization
    */
    console.log(a)
    let a = 0;
    a   // 0
    /* 
        不能重复声明
        SyntaxError: Identifier 'a' has already been declared
    */
    let a = 1
}
{
    /*
        常量不允许改变
        TypeError: Assignment to constant variable
    */
    const a = 1
    a = 1
    /*
        const声明变量必须初始化值
        SyntaxError: Missing initializer in const declaration
    */
    const b
}
/* 
    只在let与const代码块内有效
    ReferenceError: a is not defined
*/
a
{
    /* var 会存在变量提升，但是值不会提升，所以 a = undefined */
    console.log(a)
    /* var 声明后变量会绑定在window全局对象上 */
    var a = 1
}
/* var不会形成代码块作用域 */
a // 1
```
- **解构赋值**
```js
let [a,b,c] = [1,2,3] // a=1,b=2,c=3
let [a,[b,c]] = [1,[2,3]] // a=1,b=2,c=3
let [a,  ,c] = [1,2,3] // a=1,c=3
let [a = 1,b] = [] // a=1,b=undefined
let [a, ...b] = [1,2,3] // 剩余运算符 a=1,b=[2,3]
let [a,b,c,d] = 'qwer' // a='q',b='w',c='e',r='d'
let [a = 2] = [undefined] // 解构默认值 a=2
let [a = 3, b = a] = [] // a=3,b=3
let [a = 3, b = a] = [1] // a=1,b=1
let [a = 3, b = a] = [1,2]// a=1,b=2

// 对象模型的解构
let {a,b} = {a:'aaa', b:'bbb'} // a='aaa',b='bbb'
let {a:b} = {a:'bbb'} // b='bbb'

let obj = {p: ['hello', {y:'world'}] }     
let {p: [x, { y }] } = obj // x="hello",y="world"
let {p: [x] } = obj // x="hello"

let {a,b,...rest} = {a:10,b:20,c:30,d:40} // a=10,b=20,rest={c:30,d:40}

let {a=10,b=5} = {a:3} // a=3,b=5
let {a:aa=10,b:bb=5} = {a:3} // aa=3,bb=5
```
- **Symbol**
```js
// 原始数据类型Symbol，表示独一无二的值，最大的用法是用来定义对象的唯一属性名
const sy = Symbol();
typeof sy // symbol

const sy1 = Symbol(42);
sy1 === 42 // false

const sy2 = Symbol('foo');
Symbol('foo') === sy2 // false

// 1. 使用场景，作为属性名
let sy = Symbol("key1");
let syObject = {
  [sy]: "kk"
};
console.log(syObject);    // {Symbol(key1): "kk"}
// 取值可以用Object.getOwnPropertySymbols() 和 Reflect.ownKeys()

// 2. 使用场景，定义常量
const COLOR_RED = Symbol("red");
const COLOR_YELLOW = Symbol("yellow");
const COLOR_BLUE = Symbol("blue");
function getConstantName(color) {
    switch (color) {
        case COLOR_RED :
            return "COLOR_RED";
        case COLOR_YELLOW :
            return "COLOR_YELLOW";
        case COLOR_BLUE:
            return "COLOR_BLUE";
        default:
            throw new ColorException("Can't find this color");
    }
}
getConstantName(COLOR_YELLOW)

// 3. 全局Symbol注册表
let yellow1 = Symbol.for("Yellow");
// 获取全局 symbol 注册表中某个symbol关联的键
Symbol.keyFor(yellow1);    // "Yellow"
```
- **Map与Set**
```js
/* 
    Maps 和 Objects 的区别
    1. 一个 Object 的键只能是字符串或者 Symbols，但一个 Map 的键可以是任意值。
    2. Map 中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
    3. Map 的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
    4. Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。
*/
var map = new Map()
map.set('key','value')
map.get('key')
// Map迭代
for(var [key, value] of Map)
Map.forEach((value,key)=>{})
// Map与Array互转
var kvArray = [["key1", "value1"], ["key2", "value2"]];
// Map 构造函数可以将一个 二维 键值对数组转换成一个 Map 对象
var myMap = new Map(kvArray);
// 使用 Array.from 函数可以将一个 Map 对象转换成一个二维键值对数组
var outArray = Array.from(myMap);
// Map合并
new Map([...new Map(), ...new Map()])

/*
    Set 对象存储的值总是唯一的，所以需要判断两个值是否恒等。有几个特殊值需要特殊对待：
    1. +0 与 -0 在存储判断唯一性的时候是恒等的，所以不重复；
    2. undefined 与 undefined 是恒等的，所以不重复；
    3. NaN 与 NaN 是不恒等的，但是在 Set 中只能存一个，不重复。
*/
var set = new Set()
set.add('value')
set.has('value')
set.keys()
set.values()
set.forEach()
set.entries()
set.delete()
set.clear()

// Array 转 Set
var arr = ["value1", "value2", "value3"]
var mySet = new Set(arr);
// Set 转 Array
[...mySet]
```
- **Proxy与Reflect**
```js
/* 
    Proxy 可以对目标对象的读取、函数调用等操作进行拦截，然后进行操作处理。
    它不直接操作对象，而是像代理模式。
    通过对象的代理对象进行操作，在进行这些操作时，可以添加一些需要的额外操作。
*/
let target = {
    name: 'Tom',
    age: 24
}
let handler = {
    // 用于拦截对象的读取属性操作
    get: function(target, key) { return target[key] },
    // 设置属性值操作的捕获器
    set: function(target, key, value) { target[key] = value },
    // 用于拦截函数的调用
    apply: function(target, thisArg, argumentsList) { return target(argumentsList) },
    // 用于拦截 new 操作符
    construct: function(target, args) { return new target(...args) }
}
let proxy = new Proxy(target, handler)
proxy.name     // 实际执行 handler.get
proxy.age = 25 // 实际执行 handler.set

/*
    Reflect 提供操作JavaScript的方法
*/
var obj = { x: 1, y: 2 };
Reflect.get(obj, "x"); // 1
Reflect.has(obj, "x")
Reflect.set(obj, "prop", "value"); // true
// 一个由目标对象自身的属性键组成的数组
Reflect.ownKeys(obj)
```
- **字符串**
```js
var str = 'string'
// 判断是否找到参数字符串
str.includes('str') // true
// 判断参数字符串是否在字符串头部
str.startsWith('str') // true
// 判断参数字符串是否在字符串尾部
str.endsWith('ing') // true
// 将指定字符串重复指定参数次数
str.repeat(2) // stringstring
// 返回新的字符串，表示用参数字符串从头部（左侧）补全原字符串
str.padStart(10,'o') // oooostring
// 返回新的字符串，表示用参数字符串从尾部（右侧）补全原字符串
str.padEnd(10,'o') // stringoooo
// 模板字符串
`hello, ${str}` // hello, string
```
- **对象**
```js
// 对象字面量
const [age,name] = [12,'join']
const person = {age, name} // {age: 12, name: 'join'}

const person = {
  * myGenerator() {
    yield 'hello world';
  },
  sayHi(){
    console.log("Hi");
  },
  ["he"+"llo"](){
    return "Hi";
  }
}
// 拓展运算符
let age = {age: 15};
let name = {name: "Amy"};
let person = {...age, ...name}; // {age: 15, name: 'Amy'}
// 对象新方法
let target = {a: 1};
let object2 = {b: 2};
Object.assign(target,object2); // {a: 1, b: 2}

Object.is("q","q");      // true
Object.is(1,1);          // true
Object.is([1],[1]);      // false
Object.is({q:1},{q:1});  // false

Object.entries({name: 2}) // [['name',2]]
Object.fromEntries([['name',2]]) // {name: 2}
```
- **数组**
```js
// 将参数中所有值作为元素形成数组
Array.of(1, 2, 3, 4); // [1, 2, 3, 4]
// 将类数组对象或可迭代对象转化为数组
Array.from([1, 2], (n) => n * 2); // [2, 4]
// 转换 Map
let map = new Map();
map.set('key0', 'value0');
map.set('key1', 'value1');
console.log(Array.from(map)); // [['key0', 'value0'],['key1', 'value1']]
// 转换 set
let arr = [1, 2, 3];
let set = new Set(arr);
console.log(Array.from(set)); // [1, 2, 3]
// 转换字符串
let str = 'abc';
console.log(Array.from(str)); // ["a", "b", "c"]
// 扩展方法
arr.find(item => item > 2)
arr.findIndex(item => item = 1)
arr.fill(0,1,2)
arr.copyWithin(0,2,4)
arr.entries()
arr.keys()
arr.values()
arr.includes('arr')
// 嵌套数组转一维数组
arr.flat(1)
// 先处理再转换
arr.flatMap(n => [n * 2])

// 创建数组缓冲区
new ArrayBuffer(10)
// 操作视图，视图是用来操作内存的接口
let buffer = new ArrayBuffer(10);
dataView = new DataView(buffer); 
dataView.setInt8(0,1);
dataView.getInt8(0); // 1
// 定型数组，制使用特定的数据类型
let buffer = new ArrayBuffer(10),
new Int8Array(buffer);
```
- **函数**

**默认参数**

fn(name,age=16)：当调用参数第二个没传值时，使用默认参数

或者参数undefined时，使用默认参数

为**初始化赋值**的参数值无法作为其他参数的默认值

**不定参数**

fn(...values)：使用...表示不确定参数个数，返回参数数组

**箭头函数**
```
var f = x => x === var f = function(x){return x};

f(1)：当{}代码块中只有一行语句时，并且需要返回结果时，可以省略

var f = (a,b) => a+b

f(1,2)
```
当需要箭头函数返回对象时，为了区分代码块，要用()将对象包括起来

var f = (a,b) => ({a:a, b:b})：返回对象

箭头函数this指向外层this对象，可以使用对象包裹使用箭头函数

**箭头函数的this指向定义该函数时的上下文**

var Person1 = {     'age': 18,     'sayHello': function () {         console.log(this.age);     } };

**十一、迭代器**

**iterator：新的遍历机制，通过Symbol.iterator使用迭代器**

**迭代器用于遍历数据结构元素的指针**

**通过next方法进行迭代，返回当前为对象并指向下一个位置**

**返回值包含value（当前属性值），done（遍历是否结束）**
```
const items = ["zero", "one", "two"];     const it = items[Symbol.iterator]();

`    `it.next();

const items = ["zero", "one", "two"];     const it = items.entries()

`    `it.next(); // [0,‘zero’],[1,"one"]	// 返回数组的键值数组

const items = ["zero", "one", "two"];     const it = items.keys()

`    `it.next(); // [0,1,2]		// 返回数组的key的数组

const items = ["zero", "one", "two"];     const it = items.values()

`    `it.next(); // ["zero", "one", "two"]		// 返回数组的value的数组
```

可迭代的值：Array,String,Map,Set,Dom元素(正在进行中)

**还可以通过for...of进行遍历**

**for of 用于数组**

**只能let value of arr**

**for of 用于对象**

**可以let [key, value] of obj**

for...of用于替代for...in和forEach()

**十二、Class类**

**类作为对象的模板被引入，可以通过class关键字定义类**

**class本质是function，使原型更加清晰，更像面向对象编程的语法**

**定义**

匿名类：let example = class {}：匿名类

命名类：let example = class Example {}：命名类

类声明：class Example {}：类声明

**类不可重复声明，类定义不会提升，必须在访问前对类进行定义**

**主体**

prototype：**属性**，可以**添加方法**和属性

Object.assign(Example.prototype,{// methods})：可以**添加方法**，通过复制源对象到目标对象中进行添加

static a = 2：静态属性（暂不支持）

Example.a = 2（目前可行）

**static可以使函数或变量直接使用，不会被实例继承**

**class.a || class.a()可以直接使用class类中的静态方法或变量**

**父类的静态方法可以被子类继承，子类可以直接使用**

Example.prototype.a = 2：**公共属性**

let exam = class **Example：**通过exam.name获取class的名字（Example ）

**方法**

constructor()：**constructor方法是默认调用的方法**，创建类的**实例化对象**会默认调用方法

new Example()；

new Example instancof Example(类)：constructor**默认返回this对象**

**new Example的构造函数的property是否出现在 Example的原型链上**
```
static sun(a,b)；Example.sun(1,2)：调用静态方法

sun(a,b)；let exam = new Example()；exam.sun(1,2)：实例化对象调用**原型方法**传参

constructor(){this.sum = (a,b) => {console.log(a + b)}}：实例方法
```
**类的实例化**

**new 关键字，class的实例化必须通过new 关键字**
```
let exam1 = new Example(1,2)；let exam2 = new Example(3,1)

exam1.\_proto\_ == exam2.proto  // true 可以共享原型对象

exam1\_proto\_.sub = function() {return this.a - this.b}：调用constructor定义的属性

exam1.sub()：可以直接调用
```
**类修饰**

**decorator是一个函数，修改类的行为，在代码编译时产生作用**

@testable；

function testable(target){target.isTestable = true};

class Example();

Example.isTestable // true

例子添加了静态属性，若要添加实例属性，需要在类的prototype上操作

@writable;

function writable(target,name,descriptor) {descriptor.writable = false;return descriptor}

descriptor必须返回

target=类的原型对象，name=修饰的属性名，descriptor=该属性的描述对象

修饰器执行顺序，有多个修饰器时，由外向内进入，由内向外执行

**封装与继承**

getter/setter

set a/get a：类实例化时会调用set方法，但不会调用get方法

get方法不能单独出现，必须同级出现

**extends**

class Child extends Father {...}：通过extends实现类的继承

**super**

子类constructor方法必须要super()方法，比如使用了extends就需要使用super()

只能出现在子类构造函数中，constructor中

在普通方法中，super指向父类原型对象

**接收的参数，是实现父类的constructor的属性**

在静态方法中，super指向父类

constructor的this使用都必须在super后面

不能继承常规对象，只能定义class类

解决办法：Object.setPrototypeOf(Child.prototype, Father)

**十三、模块**

**之前实现模块化使用require**

**ES6的模块化分为export（导出）与import（导入）两个模块**

**模块自动开启严格模式use strict**

**模块可以导入或导出各种类型的变量，如函数，对象，字符串，数字，布尔值，类**

export{var1,var2,var3}：大括号指定输出一组变量，明确导出的接口

import {var1,var2,var3} from 'test.js'：引入对应的接口

<!-- 在html中使用<script type=”module“ src="test.js"> </script> 引入 -->

**as的用法**

export {var1 as name}：as重新定义了导出接口名称，import需要使用name定义别名

import {var1 as name}：as规定导出的接口名称，import需要使用的name定义的别名

**export default**

当只export一个变量时，可以使用export default ，不用使用{}，可以用import任意变量接收

**命名导出**export const bar = ‘小明’

**默认导出**export { bar }

**import()**

1、import('./export.js')，动态引入js文件，并且执行

**CommonJS（ES6之前的js模块化，但是只能用于nodejs）**

module.exports = {} // 输出模块

require()   // 引入模块

**十四、Promise对象**

**是异步编程的一种解决方案，promise是一个对象，可以获取异步操作的消息**

**状态有三种：pending（进行中）fulfilled（已成功）rejected（已失败），无法改变状态结果**

new Promise(resolve,reject)

resolve()：成功的返回值

reject()：失败的返回值

.then(res=>{})：通过.then来接收成功或失败的返回值

第一个参数接收成功的返回值

第二个参数接收失败的返回值

catch(err=> {})：对报错进行处理（throw new Error(value)）

finally()：无论失败还是成功都会调用

all([promise,promise1])：接收数组，接收promise对象实例，当所有成功或失败时才继续执行

如果有失败，会返回失败的值

不管成功失败，全部接收的话，可以在all()函数中使用以下方法

[a,b,c].map((item) => item.catch(e => e))会把错误先抛出，后面就不会再抛出catch错误

race([p1,p2,p3])：只要一个promise对象实例状态发生变化，就率先执行返回值

**十五、generator函数（生成器函数）**

**通过generator函数，使用yieid关键字，可以把函数的执行流挂起，为异步编程提供解决办法**

**通过yield暂停计算，并在未来某个时刻继续调用输出**

**generator函数与普通函数的区别：**

在function后面有个 \*

函数内部有yield表达式

yield [1,2,3]，可以是个数组，迭代将循环1，2，3并输出

**生成器函数中的方法：**
```
next()：调用相对应的yield值，返回{value：'值'，done：‘遍历是否结束’}

return(‘value’)：返回指定value，done为true，提前使遍历结束，之后的next将没有值

throw(err)：使用接收throw抛出的异常，使遍历提前结束

但是在生成器中处理了throw，通过try{}catch(e){}处理，将跳过此次迭代

再次调用迭代器，还会继续输出迭代值
```
```

function\* g1() {

`    `yield 2;

`    `yield 3;

`    `yield 4;

}

let arr = [2,3,4]

// yield\* [[expression]];

// expression：返回一个可迭代对象的表达式。

function\* g2() {

`    `yield 1;

`    `yield\* g1() || arr;

`    `yield 5;

}

let iterator = g2();

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

console.log(iterator.next());

// { value: 1, done: false }

// { value: 2, done: false }

// { value: 3, done: false }

// { value: 4, done: false }

// { value: 5, done: false }

// { value: undefined, done: true }
```

**十六、async函数(ES7)**

**与异步操作有关的关键字，和promise，generator有很大关联**

**async function name（传递给函数的参数）{return 函数主体}**

**async函数总返回一个promise对象，使用then方法添加回调**

**在async函数中return的值，都会是promise对象**

**await关键字：**

**等待一个promise返回值，只能在async function内部使用，非promise对象直接返回对应值**

async function aa() {

let x = await new Promise(resolve => {resolve('ok')})

console.log(x) // ok

}

**ES7（ES2016）**

Array.prototype.includes()

arr.includes()

判断数组是否包含一个元素（和indexOf相似，但是可以识别NaN）

幂运算符\*\*

ES5使用Math.pow(2,53)

ES7直接使用2\*\*53

3 \*\*= 2（9）

**ES8（ES2017）**

async/await

是generator函数的语法糖

async函数内使用await，异步编程，必须等待await返回异步任务

Object.values()

返回可枚举对象的所有值，返回一个数组

Object.entries()

返回可枚举对象的键值对数组，返回一个数组

Object.getOwnPropertyDescriptors(obj, property)

枚举对象每个属性参数，属性值，是否可枚举

获取属性的描述符

尾逗号

允许函数接收参数使用尾逗号(a,b,c,)

**ES9（ES2018）**

for await (let item of arr)[ES9的for await of.note](note://EC43BCAF6F3E42889B99EAB13B974707)

` `针对for of，迭代都是同步任务启动

for await of，对迭代是异步执行

promise.prototype.finally()

不管promise什么状态都会执行的回调函数

对模板字符串的扩展

foo`/undfdfdf`;

es9以前报错

es9:[undefined, raw:['\undfdfdf']]

es9可以从raw上获取原字符串

**ES10（ES2019）**

Object.fromEntries()

和Object.entries正好相对，把保存在数组的二维数组键值对，转换为对象

把Map对数据保存对象，转换为普通对象

String.trimStart()

去掉字符串左边的空格

String.trimEnd()

去掉字符串右边的空格

Array.prototype.flat()

按照指定的胜读递归遍历数组，并合并到子数组中

arr.flat(number or infinity)

Array.prototype.flatMap()

实质和上面相同，多出一个map功能，循环数组元素处理单个元素，并且flat()

Symbol.description()

可以获取对应symbol的描述，定义的symbol

Function.prototype.toString()

返回一个函数的源代码

catch Building

es10允许在捕获异常时省略catch的参数

**ES11（ES2020）**

BigInt基本数据类型

js最大的取值范围是2的53次方

BigInt可以超出2的53次方

可选链

a?.b?.c?.d?.e其中的?表达式有值，就会继续查询问号后面的字段

合并运算符??

以前查询值会设置默认值（a || 1），但是当a等于0时，我们也期望输出0

那么（a ?? 1），a等于0时会输出0，只有a为null或undefined时会输出右侧1的值

Promise.all()

接收一个promise对象数组，返回一个对象，包含所有promise返回值

其中任何一个promise返回reject，就会停止运行

RegExp

matchAll()：必须接收一个带g标志的正则表达式，返回匹配到的可迭代器对象

function getPromise(time) {

`    `return new Promise((resolve, reject) => {

`        `setTimeout(() => {

`            `resolve(time)

`        `}, time)

`    `})

}

const asyncArr = [getPromise(1000), getPromise(200), getPromise(3000)]

async function test() {

`    `for await (let item of asyncArr) {

`        `console.log(Date.now(), item);

`    `}

}

test()

**Reflect**

操作对象的API（Reflect.has()）

通过反射机制，可以访问、检测和修改对象的内部状态与行为

方法

has(target,key)：对象是否存在对应的key

get(target,key)：获取对应对象的key值

set(target,key,value)：改变对象对象的key值

ownkeys(target)：返回对象的所有属性

deleteProperty(target,key)：删除对象的属性

construct(obj,[arguments])：相当于ner obj(arguments)

**defineProperty**(obj,symbol,descriptor)：在一个对象上直接定义一个属性，或者修改属性的值，并返回此对象

与Object.defineproperty作用相同，唯一不同的是返回true or false

defineProperties(obj,{

name: {

value: 2,

writable: true

},

...可枚举的属性描述符对象

})

直接在一个对象上定义一个或多个新的属性，或修改现有的属性

writable：该属性值可写吗

value：属性值

configurable：对应属性类型可以被改变，或着被删除

**Proxy**

操作对象的API（new Proxy(target,handler)）

相当于对对象的操作进行代理拦截，就是在访问对象前添加一层拦截，过滤操作

target：包装的目标对象(obj)

之后调用使用proxy调用属性

handler：对象，包含函数（当对proxy对象进行一些操作时，可以触发对应函数）

get(**target**,**key**,**proxy**)：参数为obj、key

获取对象的属性时触发

拦截

proxy.property

Reflect.get

set(**target**,**key**,**value**,**proxy**)：参数为obj、key、value

设置对象属性时触发

拦截

proxy.property = value

Reflect.set

has(target,key)：并使用in操作符的代理方法

是否存在对象的属性

拦截

property in proxy

Reflect.has

defineProperty:(target,prop,descriptor)

对定义属性或更改属性进行拦截

拦截Object.defineProperty

拦截Reflect.definpRroperty

拦截obj.property = 'value'

对以上方法可以进行拦截

此方法必须返回true，来表明是否操作成功

deleteProperty:(target,prop,descriptor)

对定义属性或更改属性进行拦截

拦截Reflect.deleteProperty

拦截delete proxy[key]

对以上方法可以进行拦截

此方法必须返回true，来表明是否操作成功

进行拦截后以上的修改属性，删除属性将无效，需要在proxy拦截方法里操作

getOwnPropertyDescriptor(target, property)

访问proxy对象的属性描述符

拦截

Object.getOwnPropertyDescriptor(target,property)

Reflect.getOwnPropertyDescriptor(target, property)

ownkeys(target)

访问对象的proxy的key

拦截

Object.keys(proxy)

Object.getOwnPropertyNames(proxy)

Reflect.ownKeys(proxy)

getPrototypeOf()

访问proxy原型时触发，访问拦截对象的原型

拦截

Object.getPropertyOf(proxy)

Reflect.getPropertyOf(proxy)

setPrototypeOf()

设置proxy原型时触发

拦截

Object.setPropertyOf(proxy, object)

Reflect.setPropertyOf(proxy, object)

**可撤销的代理**

const { proxy,revoke } = Proxy.revocable(target, handler)

revocable返回两个对象---proxy，revoke

调用revoke()可撤销target的代理

![clipboard.png](./assets/Aspose.Words.067368dd-e0e0-4e32-b5d1-33704aa64031.001.png)

1

**Object**

**defineProperty**(obj,symbol(key),descriptor)：在一个对象上直接定义一个属性，或者修改属性的值，并返回此对象

writable：该属性值可写吗

`  `为**false**时，无法修改value的值

value：属性值

configurable：对应属性类型可以被改变，或着被**删除**

为**false**时，使用delete obj.key，将会**无效**

enumerable: 表示能否for循环此对象

为**false**时，比如使用Object.keys(obj)，返回的将会是空数组【】

get:()：当对象属性被读取时触发

set:()：当对象被赋值时触发

![clipboard.png](./assets/Aspose.Words.067368dd-e0e0-4e32-b5d1-33704aa64031.002.png)

数据属性描述符
