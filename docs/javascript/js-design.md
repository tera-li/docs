# JavaScript Design Mode

::: info 设计模式
设计模式是解决某个特定场景下对某种问题的解决方案  
设计模式可能会增加复杂的逻辑，或更多的代码量  
作用: 让人们写出可复用和可维护性高的程序
:::
## 工厂模式
:::info 简介
不涉及到 User 的具体的实现类，达到封装效果，主要用来创建同一类对象 (产品)  
  
优点：  
    1. 你只需要一个正确的参数，就可以获取到你所需要的对象，而无需知道其创建的具体细节  
    2. 扩展性高，可任意扩展  
    3. 当不同实例都有相同的行为时，就可使用工厂模式  
缺点：  
    1. 每增加一个产品，相应的也要增加一个子工厂，加大了额外的开发量  

```js
class User {
    //构造器
    constructor(opt) {
        this.name = opt.name;
        this.viewPage = opt.viewPage;
    }
    //静态方法
    static getInstance(role) {
        switch (role) {
        case "superAdmin":
            return new User({
                name: "超级管理员",
                viewPage: ["首页", "通讯录", "发现页", "应用数据", "权限管理"],
            });
            break;
        case "admin":
            return new User({
                name: "管理员",
                viewPage: ["首页", "通讯录", "发现页", "应用数据"],
            });
            break;
        case "user":
            return new User({
                name: "普通用户",
                viewPage: ["首页", "通讯录", "发现页"],
            });
            break;
        default:
            throw new Error("参数错误, 可选参数:superAdmin、admin、user");
        }
    }
}

// 调用
let superAdmin = User.getInstance("superAdmin");
let admin = User.getInstance("admin");
let normalUser = User.getInstance("user");
```
:::

## 单例模式
:::info 简介
保证一个类仅有一个实例，并提供一个访问它的全局访问点  
要创建一个标准的单列模式并不复杂，无非是通过一个变量来标志当前是否已经为某个类创建过对象
  
优点：  
    1. 内存中只有一个实例，减少内存开支  
    2. 减少系统的性能开销  
缺点：  
    1. 扩展很困难  
    2. 单例类的职责过重，在一定程度上违背了"单一职责原则"  

```js
let Single = function(name) {
    this.name = name
    this.instance = null
}
Single.prototype.getName = function() {
    console.log(this.name)
}
Single.getInstance = function (name) {
    if (!this.instance) {
        this.instance = new Single(name)
    }
    return this.instance
}
let one = Single.getInstance('one')
let two = Single.getInstance('two')
```
:::

## 策略模式
:::info 简介
定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换  
重心在于组织、调用这些算法，从而让程序结构更灵活，具有更好的维护性和扩展性  
  
优点：  
    1. 避免代码重复，更好的封装性  
    2. 避免使用多重条件语句
缺点：
    1. 客户端必须知道所有的策略类，并自行决定使用哪一个策略类

```js
let strategies = {
    "S":(salary) => {
        return salary * 4
    },
    "A":(salary) => {
        return salary * 3
    },
    "B":(salary) => {
        return salary * 2
    },
}
let calculateBonus = (level, salary) => {
    return strategies[ level ](salary)
}
calculateBonus('S', 10000)
calculateBonus('A', 10000)
```
:::

通过闭包保存私有变量来判断是否已经创建对象


利用单例模式，通过闭包保存私有变量从而判断某个对象是否创建，**避免重复创建对象**

**策略模式**

**定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换、**


定义了S、A、B算法封装起来，使用时通过key来随时更替算法

还可以用于表单提交，多重校验时使用策略模式

利用策略模式，**可以有效避免多重条件选择语句，易于扩展，易于切换**

**代理模式**

**为一个对象提供一个代用品或占位符，以便控制对它的访问**


代理对象，对目标对象做出一定的响应事件

**迭代器模式**

就是迭代器，for循环，forEach，map等

**发布-订阅模式（观察者模式）**

一对多的依赖关系，当一个对象状态发生改变时，所有依赖于它的对象都将得到通知

多个订阅者，只需要等发布者通知订阅者即可


多个订阅者订阅点击事件，当点击事件触发时（发布），订阅者订阅到事件

**装饰器模式**

能够动态地增加对象的职责，称为装饰器模式

比如天冷了，需要多穿外套；需要飞行，就在头上插上一支竹蜻蜓

能够包装基类，**在继承基类的基础上包装成新功能，扩展功能**

允许向一个现有的对象添加新功能，同时又不改变其结构，包装现有的类等，提供额外的功能


**状态模式**

定义

·允许一个对象在其内部状态改变时改变它的行为

对象看起来似乎修改了它的类

电灯泡之类的弱光、中等光、强光状态的切换

由此我产生一个由对象包装的字典状态管理，管理电灯泡的状态模式

通过不同方法的触发，返回key，触发对应字典的状态管理

**适配器模式**

对于某个接口，不用去改变源代码，只是再进一步适配接口，如封装组件流出接口交互


如果百度map的接口不是show，那么就需要写一个适配对象，返回百度的接口


如上，当百度map接口为display时，只需要调用show方法，适配返回百度的display方法

相当于适配包装了接口

**JavaScript设计模式**

**一、继承**

**原型继承（类式继承）**

通过实例化父类，赋值给子类的原型上，实例化子类后，实现继承


**构造函数继承**

在子类中改变父类的作用域指向，通过实例化子类，达到构造函数继承


**原型式继承**

使父类对象赋值给子类原型，返回实例化后的子类（这时就继承了父类对象在原型链上）

原型式继承相当于Object.create(obj)


**寄生式继承**

在原型式继承上，对继承的对象进行了扩展


**组合寄生式继承**

复制父类的原型，使子类对象赋值给父类原型的构造函数

子类对象的prototype为父类的实例（在子类赋值给父类构造函数之后）

子类的原型拥有父类的方法


**二、设计模式**

工厂模式

创建一个接口，让其子类自己决定实例化哪个工厂类

抽离出工厂类的公共部分（方法和属性）


安全模式类


1
