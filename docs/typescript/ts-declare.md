# 简介

## JS和TS
1. 编译型
   1. 源代码编译⽣成机器指令，再由机器运⾏机器码（⼆进制）
1. 解释型（JS）
   1. 源代码翻译成中间代码，再⽤解释器对中间代码解释运⾏
1. 动态类型语⾔（JS）
   1. 对数据类型检查是在运⽤时进⾏的
1. 静态类型语⾔（TS）
   1. 对数据类型的检查是在运⾏前进⾏的
1. 强类型定义语⾔（TS）
   1. 强制数据类型定义的语⾔，变量被指定了某个数据类型，如果不经过强制类型转换，那么永远是这个数据类型
1. 弱类型定义语⾔（JS）
   1. 数据类型定义可以被忽略，可以对变量类型定义赋予不同类型的值

## 申明文件（.d.ts）
```ts {1,8,16}
// 定义 test.d.ts
declare module "*.js";
declare namespace $test {
  declare let personName: number;
  declare function getName(name: string): string;
}

// 定义 test.js
export default {
  personName: "personName111",
  getName(name) {
    return "this is " + name;
  },
};

// 使用 test.js
import $test from "./test.js";

console.log($test.personName);
console.log($test.getName("name"));
```
