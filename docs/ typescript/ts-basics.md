# Typescript 基础
强类型定义，静态类型检测，代码声明编译提示
```ts
// 安装 typescript
npm i -g typescript

// 输出 tsconfig.json
tsc --init

// 通过 tsc 编译 .ts文件，输出 .js文件
```

## 基础类型

```ts
// number: 数字类型
let a: number = 6;

// string: 字符串类型
let a: string = '6';

// boolean: 布尔类型
let a: boolean = true;

// []: 数组类型
let a: number[] = [1, 2];
// 使用数组泛型
let a: Array<number> = [1, 2];

// 元组类型: 已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同
let x:[string,number];
x = ['1',1];

// enum: 枚举类型
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;

// 对象值缺失
let c = null;

// 未定义的值
let c = undefined;

// any: 任意类型，可以赋予任意类型的值
let a: any = '123';

// unknown: 未知类型，不确定的类型会有类型检测，赋值后需要自己类型断言
let a: unknown

// void: 没有返回值
const a = (): void => {
  return undefined;
};

// never: 永不返回值，从不会出现的值
const a = (): never => {
  throw new Error('error')
};
```

## 运算符
```ts
// 算术运算符
+、-、*、/、%、++、--
// 关系运算符
==、!=、>、<、>=、<=
// 逻辑运算符
&&（and）、||（or）、!（not）
// 赋值运算符
=、+=、-=、*=、/=
// 三元运算符
age ? var1 : var2
// 类型运算符
// 返回操作数的类型
typeof a  
// 判断对象是否为指定的类型
[123] instanceof Array
```

## 条件语句
```ts
if
if...else
if...else if...else
switch
```

## 循环语句
```ts
for
for in
for of
while
do...while
// 终⽌循环
break
// 跳过当前循环，去到下一个循环
continue
```

## 函数
```ts
// 参数可以定义类型
function (s: number)
// 可选参数
function (s?: number)
// 默认参数
function (s:number = 0.5)
// 剩余参数
function (...s:number[])

// 函数重载
/*
   函数声明，定义具有多个不同类型：参数类型，返回值类型的同名函数
   减少代码量，让函数具有多个类型约束
   重载的⽅法名字相同，但是参数不同
   每个重载⽅法都必须有⼀个独⼀⽆⼆的参数类型列表
*/
function disp(x:string):void; 
function disp(x:number):void;

function disp(x:number | string):void {}
```

## 接⼝

```ts 1,30
/* 定义接口 */
interface person {
  firstName: string;
  lastName: string;
  // 只读属性
  readonly name: string;
  // 可选属性
  age?: number;
  // 除上面必选属性外的 任意属性
  [propName: string]: any;
}
/* 函数接口约束 */
interface funChild {
  (x: number, y: number): void;
}

// 实现
const child: funChild = (msg) => {};
child(1, 1);

// 实现
const func = (): person => {
  return {
    firstName: "1",
    lastName: "1",
    name: "1",
  };
};

/* 接口继承 */
interface Point extends person {
  y: number;
}

// 实现
let obj: Point = {
  firstName: "string",
  lastName: "string",
  name: "string",
  y: 1,
};

// 接口实现
class child implements person {
  firstName = "123";
  lastName = "123";
}
```

## 联合类型
```ts
// 符合两个类型之一都可
const arr: number | string
const sayHello = (name: number | string) => {
  /* ... */
};
sayHello('str')

interface A {
  number: number;
}
interface B {
  age: string;
}
type Resolver = A | B;
let obj: Resolver = {
  age: "age",
};
```
## 交叉类型

```ts
// 把多个类型合并成⼀个类型，包含合并的所有类型
interface BB {
    number: string
    age: string
}
interface BC {
    age: string
}
function vv(): BB & BC {
    return {
        // 必须返回所有类型的属性
        age: '1',
        number: 's'
    }
}
vv().age // '1'
vv().number // 's'
```

## 类型别名

```ts
// type 创建类型别名，给一个类型起个新名字
// 类型别名常用于联合类型/交叉类型
type Name = string
type Age = number
type Resolver = Name | Age

let c:Name = '123'
let cc:Age = 123
let ccc:Resolver = '123'

type NameResolver = () => string;
function vvvv():NameResolver {
    return () => '11'
}
```
## 类型断⾔

```ts
let a: any = '123'
a as string;
(a as string).length;

<string>a
(<string>a).length

// 非空断言
const ignoreUndefinedAndNull: string = null!; // Ok
```

## 声明合并
1. 接⼝合并
```ts
interface A {
    number: number
}
interface A {
    age: string
}
// 等价于,相同名称的interface会自动合并
interface A {
    number: number,
    age: string
}
```
2. 函数合并
```ts
// 函数合并就是函数重载
// 定义多个不同类型参数 or 不同类型返回值的同名函数
// 最后来实现同名函数定义的多个类型
function disp(x:string):number; 
function disp(x:number):string;

function disp(x:number | string):void {}
```

## 类
1. 定义
```ts
interface childInter {
  fileName: string;
}
class Child {
  // 静态属性
  static staticName: string = "string";
  // 成员属性
  fileName: string = "string";
  // 私有字段（和private的区别在于# 在运行时都无法访问，private仅仅是一个检查）
  #privateName: string;
  // 构造函数
  constructor(props: childInter) {
    this.fileName = props.fileName;
    this.#privateName = props.fileName;
  }
  // 静态方法
  static getStaticName() {
    return this.staticName;
  }
  // 成员方法
  getFileName() {
    return this.fileName;
  }
  // 访问器 getter
  get privateName(): string {
    return this.#privateName;
  }
  // 访问器 setter
  set privateName(newName: string) {
    this.#privateName = newName;
  }
}

// 访问静态成员
Child.staticName;
// 实例化对象
let child = new Child({ fileName: "fileName" });
// 调用成员方法
child.getFileName();
// 处触发setter
child.privateName = "new";
console.log(child.privateName);
```

2. 继承
```ts
interface childInter {
  fileName: string;
}
class Person {
  constructor(props: childInter) {
    console.log(props);
  }
  getFileName() {
    console.log("This is Person name");
  }
  getFileName1() {
    console.log("This is Person name1");
  }
}
class Child extends Person {
  // 公有属性，可以在任何地⽅访问
  public fileName: string = "fileName";
  // 受保护属性，可以被⾃身和⼦类、⽗类访问
  protected fileName1: string = "fileName1";
  // 私有属性，只能在该类访问
  private fileName2: string = "fileName2";
  // 只读
  readonly fileName3: string = "fileName3";

  constructor(props: childInter) {
    super(props);
  }
  // 重写父类方法
  getFileName() {
    // 通过super调用继承类的方法
    super.getFileName()
    console.log("This is Child name");
  }
}
let child = new Child({ fileName: "fileName" });
child.getFileName();
```
3. 抽象类
```ts
/* 做为其他⼦类的基类使⽤，不能够被实例化，抽象类的抽象⽅法必须在⼦类中实现
具有抽象⽅法的类，也是抽象类，⼦类继承抽象类必须实现抽象⽅法，所谓的多态
⽗类定义抽象⽅法不能实现该⽅法，必须是继承它的⼦类去实现，不同的⼦类有不同表现
抽象⽅法需要在⼦类中实现，虽然普通基类也可以达到效果，但是抽象⽅法会给⼈提示作⽤
抽象类中的抽象⽅法必须被⼦类实现
*/
// 定义抽象类
abstract class Department {
    constructor(public name:string) {
        // 必须实现抽象类构造函数
    }
    // 必须在子类（派生类）中实现
    abstract printMeeting():void
}
class AccountingDepartment extends Department {
    constructor(public name: '实现父类的构造函数') {
        super(name)
    }
    printMeeting() {
        return true
    }
}
```

## 泛型
```ts 1,9,15,24,42
// 1. func<定义泛型变量>(str: 泛型变量, num: 泛型变量): 泛型变量
const func = <T>(str: T): T => {
  return str;
};
func("123");
func<string>("123");
func<string | number>(123);

// 2. 多个泛型变量
const func1 = <T, V>(str: T, num: V): T | V => {
  return num;
};
func1<string, number>("123", 123);

// 3. 定义泛型接口
interface Inter {
  <T>(arg: T): T;
}
const func2: Inter = <T>(str: T): T => {
  return str;
};
func2("123");

// 4. 定义泛型接口
interface InterClass<T> {
  nameValue: T;
  add: (x: T, y: number) => T;
}
// 类接口
class Child<T> implements InterClass<string> {
  nameValue = "123";
  add(x: string, y: number): string {
    return "123";
  }
  delete(x: T): T {
    return x;
  }
}
let child = new Child<number>();
child.delete(123);

// 5. 接口约束泛型
interface Person {
  name: string;
  age: number;
}
function student<T extends Person>(arg: T): T {
  return arg;
}
student({ age: 123, name: "string" });
```