# Typescript 内置类型

## Partial

1. 将类型 T的所有属性标记为可选属性
1. 如：将 interface定义的接⼝属性设置为可选属性

```ts
type Partial<T> = {
    	[P in keyof T]?: T[P];
};

interface Person {
     name: string;
     gender: 0 ｜ 1; // 0：女， 1：男
     age: number;
}

const model: Partial<Person> = {
     name: '',
     gender: undefined,  // 可以标记为undefined，或不定义接口属性
};
```
## Required

1. 将类型 T的所有属性标记为必须属性
1. 与 partial相反

```ts
type Required<T> = {
    	[P in keyof T]-?: T[P];
};

const userList: Required<Person> = {
    name: 'string',
    gender: 1, // 0：女， 1：男
    age: 1
};
```

## Readonly

1. 将类型 T的所有属性标记为只读属性
1. 定义后，不能改变属性值

```ts
type Readonly<T> = {
    	readonly [P in keyof T]: T[P];
};

const userList: Readonly<Person> = {
    name: 'string',
    gender: 1, // 0：女， 1：男
    age: 1
};
```

## Pick

1. 从某个类型中指定过滤出某个属性或联合类型属性
1. 在 Person接⼝中挑出指定属性（过滤）

```ts
type Pick<T, K extends keyof T> = {
    	[P in K]: T[P];
};

const userList: Pick<Person, 'name' | 'age'> = {
    name: 'string',
    age: 1
};
```

## Record

1. 根据标记对象的 key，设置对应的 value

```ts
type Record<K extends keyof any, T> = {
    [P in K]: T;
};
// 设置key的属性为gender | name，value的类型是number
const userList: Record<'gender'| 'name', number> = {
    name: 1,
    gender: 10, // 0：女， 1：男
};
```

## keyof

1. 返回类型或接⼝中字符串索引，并且是联合类型

```ts
type keys = keyof Person
// "name" | "age" | "gender"
// 联合类型
type keys = "name" | "age" | "gender"
```

## never

1. 永不存在的值
2. never类型可以是任何类型的⼦类型，也可以赋值给任何类型
3. 但其他类型不能作为 never的⼦类型

```ts
// 任何类型都不能赋值给never类型
let a: string = '123';
let b: number = 0;
let n: never = a;
// -> Type 'string' is not assignable to type 'never'.
let n: never = b;
// -> Type 'number' is not assignable to type 'never'.
n as never
// -> ok
```

## Exclude

1. 从 T中移除 U中给定的类型
2. 移除指定类型的某些属性，返回没指定的属性

```ts
// "b" | "d"，相当于<T>属性中不包括的属性，差集
type Type1 = Exclude<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;
// "name" | "gender" | "age"
type keys = keyof Person
// 接口返回类型属性 3个类型的差集，name属性，newPerson就只有name属性
interface newPerson extends Pick<Person, Exclude<keys, 'gender' | 'age'>> {}
```

## Extract

1. 从 T中提取 U中给定的类型
1. 移除指定类型之外的某些属性，返回指定的属性

```ts
// "a" | "c"，相当于<T>属性中包括的属性，交集
type Type1 = Extract<'a' | 'b' | 'c' | 'd', 'a' | 'c' | 'f'>;
// "name" | "gender" | "age"
type keys = keyof Person
// 接口返回类型属性 3个类型的交集，
// 返回gender、age类型，newPerson就有gender | age属性
interface newPerson extends Pick<Person, Extract<keys, 'gender' | 'age'>> {}
```

## NonNullable

1. 从 T中移除 null和 undefined类型

```ts
// string | number
type T04 = NonNullable<string | number | undefined>;
```

## ReturnType

1. 获取函数返回值的类型

```ts
type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T15 = ReturnType<any>;  // any
type T16 = ReturnType<never>;  // any
type T17 = ReturnType<string>;  // Error
type T18 = ReturnType<Function>;  // Error
```

## InstanceType

1. 返回构造函数类型的实例类型

```ts
class A {
    name:number = 1;
    constructor() {}
}

type T2 = InstanceType<typeof A>
class B implements T2 {
    name = 3
}
```

## In

1. in ⽤来遍历枚举类型

```ts
type Keys = "a" | "b" | "c"

type Obj =  {
  [p in Keys]: any
}
let inS: Obj = {'a': 1,'b': 2,'c':3}
```

## extends

1. 泛型继承其他类型，将会约束泛型，必须实现 extends继承的类型属性

```ts
interface Lengthwise {
  length: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length);
  return arg;
}
loggingIdentity({length: 1, value:2})
```

## 装饰器

1. 类装饰器
   1. target: TFunction - 被装饰的类
      1. class Greeting
```ts
function Greeter(greeting: string) {
  return function (target: Function) {
    target.prototype.greet = function (): void {
      console.log(greeting);
    };
  };
}

@Greeter("Hello TS!")
class Greeting {
  constructor() {
    // 内部实现
  }
}

let myGreeting = new Greeting();
(myGreeting as any).greet(); // console output: 'Hello TS!';
```

2. 属性装饰器
3. target: Object - 被装饰的类
   1. class Person
4. key: string | symbol - 被装饰类的属性名
   1. name
```ts
function logProperty(target: any, key: string) {
  delete target[key];

  const backingField = "_" + key;

  Object.defineProperty(target, backingField, {
    writable: true,
    enumerable: true,
    configurable: true
  });

  // property getter
  const getter = function (this: any) {
    const currVal = this[backingField];
    console.log(`Get: ${key} => ${currVal}`);
    return currVal;
  };

  // property setter
  const setter = function (this: any, newVal: any) {
    console.log(`Set: ${key} => ${newVal}`);
    this[backingField] = newVal;
  };

  // Create new property with getter and setter
  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true
  });
}

class Person { 
  @logProperty
  public name: string;

  constructor(name : string) { 
    this.name = name;
  }
}

const p1 = new Person("semlinker");
p1.name = "kakuqo";
```

1. ⽅法装饰器
2. target: Object - 被装饰的类
   1. class Task
3. propertyKey: string | symbol - ⽅法名
4. descriptor: TypePropertyDescript - 属性描述符

i. {

value: [Function: runTask], writable: true,

enumerable: false, configurable: true

}
```ts
function log(target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
  let originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log("wrapped function: before invoking " + propertyKey);
    let result = originalMethod.apply(this, args);
    console.log("wrapped function: after invoking " + propertyKey);
    return result;
  };
}

class Task {
  @log
  runTask(arg: any): any {
    console.log("runTask invoked, args: " + arg);
    return "finished";
  }
}

let task = new Task();
let result = task.runTask("learn ts");
console.log("result: " + result);
```

1. 参数装饰器
2. target: Object - 被装饰的类
   1. class Greeter
3. propertyKey: string | symbol - ⽅法名
   1. undefined
4. parameterIndex: number - ⽅法中参数的索引值
   1.  0
```ts
function Log(target: Function, key: string, parameterIndex: number) {
  let functionLogged = key || target.prototype.constructor.name;
  console.log(`The parameter in position ${parameterIndex} at ${functionLogged} has
	been decorated`);
}

class Greeter {
  greeting: string;
  constructor(@Log phrase: string) {
	this.greeting = phrase; 
  }
}
```
