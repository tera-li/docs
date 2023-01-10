# Typescript 基础

强类型定义，静态类型检测

需要npm i -g typescript 安装，tsc '.ts'⽂件进⾏编译，再通过node '.js'运⾏编译后的⽂件

**基础类型**

1. any：任意类型
   1. 变量可以赋予任意类型的值
2. number：数字类型
   1. 变量表示整数和分数（二进制到十六进制）
3. string：字符串类型
   1. 变量表示字符串
4. boolean：布尔类型
   1. 变量表示逻辑（true和false）
5. []：数组类型
   1. 变量为数组
6. let x:[string,number] == x ['string',1]：元祖类型
   1. 变量为已知定义的类型，对应赋值类型必须相同
7. enum：枚举类型

```ts
enum Color {Red, Green, Blue};
let c: Color = Color.Blue;
console.log(c);    // 输出 2
```

void：没有返回值
定义函数，没有返回值
null
变量的值缺失
undefined
变量初始化是一个未定义的值
never
定义函数，其他类型的子类型，代表从不会出现的值

**变量声明**

1. var 变量：类型 = 值

**运算符**

```ts
// 算术运算符
+、-、*、/、%、++、--
// 关系运算符
==、!=、>、<、>=、<=
// 逻辑运算符
&&（and）、||（or）、!（not）
// 赋值运算符
=、+=、-=、\*=、/=
// 三元运算符
age ? var1 : var2
// 类型运算符
typeof var  // 返回操作数的类型
instanceof  // 判断对象是否为指定的类型

```



**条件语句**

1 if语句

2 if...else语句

3 if...else if...else语句 4 switch(){

5    case var: {

6        break;

7    }

8    default: {

9        break

10    }

11 }

**循环语句**

1 for

2 for in 3 for of 4 forEach 5 every

6 some

7 while

8 do...while

9 break；终⽌循环

10 continue；跳过当前循环 11 ⽆限循环

**函数**

1. function和js一样
1. 参数可以定义类型 function (s: number)
1. 可选参数 function (s?; number)
1. 默认参数 function (s:number = 0.5)
1. 剩余参数 function (...s:number[])
1. **函数重载**

1 // 函数声明，定义具有多个不同类型：参数类型，返回值类型的同名函数 2 // 减少代码量，让函数具有多个类型约束

3 function disp(x:string):void; 

4 function disp(x:number):void;

5 // 函数实现

6 function disp(x:number | string):void {}

1. 重载的⽅法名字相同，但是参数不同
1. 每个重载⽅法都必须有⼀个独⼀⽆⼆的参数类型列表

**联合类型**

```ts
const arr:number | string
// 符合两个类型之一都可
```
**类型别名**

```ts
type Name = string
type Age = number
type Resolver = Name | Age
// type 创建类型别名
type NameResolver = () => string;
function vvvv():NameResolver {
    return () => '11'
}
// 类型别名常用于联合类型/交叉类型
```
**联合断⾔**

```ts
a as string
(a as string).age  // a.age
<string>a
(<string>a).age  // a.age
```

**接⼝**

```ts
interface person {
    firstname：string,
    lastname：string
}
var child:person = {
    firstname: 'hello',
    lastname: 'world'
}

1. 使⽤ interface定义接⼝，使⽤具体类去实现定义的接⼝类型
2. 使⽤ implements实现接⼝（还可以实现类型）
```

**声明合并**

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
```

3. **联合类型** (如果⼀个值是联合类型， **只能访问联合类型的共有成员** )

```ts
interface BB {
    number: string
    age: string
}
interface BC {
    age: string
}
function vv(): BB | BC {
    return {
        age: '1',  // 可以只返回age
        number: 's'
    }
}
// 只能访问多个类型的共有成员
vv().age // '1'
vv().number //  error(BC不存在number)
```

4. **交叉类型**（把多个类型合并成⼀个类型，包含合并的所有类型）

```ts
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
**类**

1. 通过class定义类
   1. constructor()定义构造函数和实例接收参数
   1. disp(){}定义方法函数
   1. 通过new 类，创建一个实例对象
1. 类的继承
1. class Child extends Person
1. 该类具有person类的所有方法和构造函数
3. 通过创建实例的传参，会person类的构造函数，进行赋值等操作
3. 多重继承

```ts
class Child extends Person
class exleaf extends Child 
// exleaf继承了Child和Person类
```

4. static关键字
   1. 定义类的数据成员为静态
   1. 可以直接通过类名调用
4. instanceof运算符

```ts
var obj = new Person() 
var isPerson = obj instanceof Person; 
// 判断obj是不是指定的类型，或者说指定是类实例化而来
```

6. 访问控制修饰符
1. public：公有属性，可以在任何地⽅访问

**i. 实例可访问，⼦类可访问，** class**内部可访问**

2. private：私有的，只能在该类访问
1. **实例不可访问，⼦类不访问，** class**内部可访问**
1. **不允许被继承和实例化**
3. protected：受保护的，可以被⾃身和⼦类、⽗类访问
1. **实例不可访问，⼦类可访问，** class**内部可访问**
1. **只允许被继承**
4. readonly：只读的

```ts
class Animal {
  // public name: string;
  public constructor(public name) {
    // this.name = name;
  }
}
// 可以在构造函数中定义参数的修饰符
// 相当于在class中定义该属性，并将name参数的值赋值给class中的name
```

7. 类的接⼝和实现
   1. 定义接⼝： interface
   1. 实现接⼝： implements
   1. 需要实现接⼝定义的属性
7. 类的抽象类
1. 做为其他⼦类的基类使⽤，不能够被实例化，抽象类的抽象⽅法必须在⼦类中实现
1. 具有抽象⽅法的类，也是抽象类，⼦类继承抽象类必须实现抽象⽅法（**所谓的多态**）
1. **⽗类定义抽象⽅法不能实现该⽅法，必须是继承它的⼦类去实现，不同的⼦类有不同表现**
1. 抽象⽅法需要在⼦类中实现，虽然普通基类也可以达到效果，但是抽象⽅法会给⼈提示作⽤
1. 抽象类中的抽象⽅法必须被⼦类实现

```ts
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

2. **类的多态**
   1. **⽗类定义⼀个⽅法不去实现，让继承它的⼦类去实现，不同的⼦类有不同表现**
3. **类的重写**
4. 继承⽗类，⼦类写⼀个⽗类同名⽅法，使⽤ super.⽅法名调⽤⽗类的⽅法（重写）
5. 并可以在此基础上添加其他⽅法

**泛型**

1. 定义泛型

**a. 泛型解决类、接⼝、⽅法的复⽤性以及对不特定类型的数据的⽀持**

<!-- 2. function iden<T>(arg: T) : T -->
   1. 定义泛型函数
   1. 参数为泛型
   1. 函数类型有 void（⽆返回值）， any（任意值）， T：（必须 return返回值）
2. 泛型接⼝
   1. 泛型类
2. 实现函数泛型或者参数泛型
<!-- 1. iden<String>('字符串 ‘) -->

i. 可以指定调⽤函数所传的数据类型

2. iden('字符串 ')
   1. 也可以不指定，泛型会⾃动识别参数类型
2. 如果对函数定义（： T），就必须 return返回值
   1. 如果不 return 返回值就会报错
2. 如果对函数没有定义（： T），不⽤ ne返回 return

i. 但是会提示 undefined
