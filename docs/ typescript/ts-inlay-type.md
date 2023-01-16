# Typescript 内置类型

## keyof（联合键）

```ts
// keyof 获取某种类型的所有键
type Person = {
  name: string;
  age: number;
};
// "name" | "age"
type keys = keyof Person;
let child: keys = "age";
```

## In（遍历枚举）

```ts
// in ⽤来遍历枚举类型
type Keys = "a" | "b" | "c";

type Obj = {
  [p in Keys]: string;
};
let inS: Obj = { a: '1', b: '2', c: '3' };
```

## extends（继承约束）

```ts
// 泛型继承其他类型，将会约束泛型，必须实现 extends 继承的类型属性
interface Lengthwise {
  wiseName: number;
}

function loggingIdentity<T extends Lengthwise>(arg: T): T {
  return arg;
}
loggingIdentity({ wiseName: 2 });
```

## Readonly（只读）

```ts
type Person = {
  name: string;
  age: number;
  gender: string | number;
};
// 将类型 T 的所有属性标记为只读属性
type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

const userList: Readonly<Person> = {
  name: "string",
  gender: 1,
  age: 1,
};
// error 只读属性
// userList.age = '1'
```

## Required（必需）

```ts
// 将类型 T 的所有属性标记为必须属性
// "-?" 意思是移除可选属性
type Person = {
  name: string;
  age: number;
  gender: string | number;
};
type Required<T> = {
  [P in keyof T]-?: T[P];
};

const userList: Required<Person> = {
  name: "string",
  gender: 1, // 0：女， 1：男
  age: 1
};
```

## Partial（可选）

```ts
// 将类型 T 的所有属性标记为可选属性 ?
// 将 interface 定义的接⼝属性设置为可选属性
type Partial<T> = {
    	[P in keyof T]?: T[P];
};

interface Person {
     name: string;
     gender: 0 | 1; // 0：女， 1：男
     age: number;
}

const model: Partial<Person> = {
     name: '',
     gender: undefined,  // 可以标记为undefined，或不定义接口属性
};
```

## Pick（使用指定类型）

```ts
// 从某种类型中指定过滤出某个属性或联合类型属性，只使用制定属性
interface Person {
  name: string;
  gender: 0 | 1; // 0：女， 1：男
  age: number;
}

type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

const userList: Pick<Person, "name" | "age"> = {
  name: "string",
  age: 1,
};
```

## Record（keys，type）

```ts
// 根据标记对象的 key，设置对应的 value
// keyof any 可以传入任意 string/number/symbol
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
// 设置key的属性为 gender | name, value的类型是number
const userList: Record<"gender" | "name", number> = {
  name: 1,
  gender: 10, // 0：女， 1：男
};
```

## never（永不存在的值）

```ts
// never类型可以是任何类型的⼦类型，也可以赋值给任何类型
interface IType {
  age: never;
  [key: string]: string;
}
let child: IType = {
  age: 1 as never,
  child: "1",
  child1: "2",
};
```

## Exclude（类型差集）

```ts
// 取第一个参数的差集
type A = "a" | "b" | "c" | "d";
type B = "a" | "e";
// "b" | "c" | "d"
type Type = Exclude<A, B>;
let child: Type = "b";
```

## Extract（类型交集）

```ts
// 取第一个参数的交集
type A = "a" | "b" | "c" | "d";
type B = "a" | "b" | "e";
// "a" | "b"
type Type = Extract<A, B>;
let child: Type = "a";
```

## NonNullable（非空参数）

```ts
// 从 T 中移除 null 和 undefined 类型
// string | number
type T04 = NonNullable<string | number | undefined>;
```

## ReturnType（返回类型）

```ts
// 获取函数返回值的类型
type T10 = ReturnType<() => string>;  // string
type T11 = ReturnType<(s: string) => void>;  // void
type T15 = ReturnType<any>;  // any
type T16 = ReturnType<never>;  // any
type T17 = ReturnType<string>;  // Error
type T18 = ReturnType<Function>;  // Error
```

## InstanceType（实例类型）

```ts
// 获得构造函数返回值的类型
class A {
  name: number = 1;
  constructor() {}
  getDate() {
    return new Date();
  }
}
type T2 = InstanceType<typeof A>;

let child: T2 = {
  name: 1,
  getDate: () => new Date(),
};
class B implements T2 {
  name = 3;
  getDate = () => new Date();
}
```

