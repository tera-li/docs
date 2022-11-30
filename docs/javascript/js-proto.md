# JavaScript Proto

::: v-pre
`JavaScript 原型的意义在于实现继承功能，为了搞懂内部实现可参考下图的相互引用`
:::

![proto.png](./assets/proto.png)

## 原型
::: info 简介

JavaScript 被描述为一种**基于原型的语言**，每个对象拥有一个**原型对象**，对象从原型继承方法和属性。  

原型对象也可能拥有原型，并从中继承方法和属性，一层一层、以此类推，这种关系常被称为**原型链**。  

在 JavaScript 的**对象实例**和**它的构造器**之间建立一个链接，它就是__proto__属性，是从**构造函数**的**prototype**属性派生的。  

获取原型，可以通过 **Object.getPrototypeOf(obj)** 或者已被弃用的__proto__属性获得。  
:::
```js
function doSomething(){}
doSomething.prototype.foo = "bar"; 

var doSomeInstancing = new doSomething();
doSomeInstancing.prop = "some value";
doSomeInstancing.valueOf()

// result
{
    prop: "some value",
    __proto__: {
        foo: "bar",
        constructor: ƒ doSomething(),
        __proto__: {
            constructor: ƒ Object(),
            hasOwnProperty: ƒ hasOwnProperty(),
            isPrototypeOf: ƒ isPrototypeOf(),
            propertyIsEnumerable: ƒ propertyIsEnumerable(),
            toLocaleString: ƒ toLocaleString(),
            toString: ƒ toString(),
            valueOf: ƒ valueOf(),
            __proto__: null
        }
    }
}
```
## 原型链查找
::: info 简介
首先，会检查 **doSomeInstancing** 对象是否具有可用的 **valueOf()** 方法，  
如果没有，则浏览器检查 **doSomeInstancing** 对象的原型对象（即 **doSomething** 构造函数的 prototype 属性所指向的对象）是否具有可用的 **valueof()** 方法。  
如果也没有，则浏览器检查 **doSomething()** 构造函数的 prototype 属性所指向的对象的原型对象（即 **Object** 构造函数的 prototype 属性所指向的对象）是否具有可用的 **valueOf()** 方法。这里有这个方法，于是该方法被调用。  
:::

## prototype属性  
::: info 简介
**prototype** 对象定义继承成员的地方，通过修改原型属性  
比如 **Object.values()**、**Object.keys()**，以及其他不在 **prototype** 对象内的成员，不会被“**对象实例**”或“**继承自 Object() 的对象类型**”所继承。这些方法/属性仅能被**Object() 构造器**自身使用。  
**prototype** 定义继承成员，__proto__访问继承对象  
:::

## 创建对象的原型
::: info 简介
创建一个新对象，使用现有的对象来作为新创建对象的原型（**prototype**）
```js
let a = { name: 'join' }
let b = Object.create(a)

// result { name: 'join' }
b.__proto__
```
:::

## constructor 属性
::: info 简介
每个实例对象都从原型中继承了一个 constructor 属性，该属性指向了用于构造此实例对象的构造函数。
```js
function Person(val) {
    this.name = val
    this.fun1 = function () {
        console.log('hello')
    }
}
let person = new Person('name')
person.fun1() // hello
let person1 = new person.constructor('name1')
console.log(person) // {name: 'name', fun1: ƒ}
console.log(person1) // {name: 'name1', fun1: ƒ}

/* result Person 构造器
function Person(val) {
    this.name = val
    this.fun1 = function () {
        console.log('hello')
    }
}
*/
```
可以通过实例的构造函数，在无法获取原始构造器时使用创建新的实例对象
:::
