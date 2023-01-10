1. 编译型
   1. 源代码编译⽣成机器指令，再由机器运⾏机器码（⼆进制）
1. **解释型** （如 js）
   1. 源代码翻译成中间代码，再⽤解释器对中间代码解释运⾏
1. **动态类型语⾔** （如 js）
   1. 对数据类型检查是在运⽤时进⾏的
1. 静态类型语⾔（如 ts）
   1. 对数据类型的检查是在运⾏前进⾏的
1. 强类型定义语⾔（如 ts）
   1. 强制数据类型定义的语⾔，变量被指定了某个数据类型，如果不经过强制转换，那么永远是这个数据类型
1. **弱类型定义语⾔** （如 js）
   1. 数据类型定义可以被忽略，可以对变量类型定义赋予不同类型的值
1. **作⽤域**

a. ts同⼀个⽂件夹中的 typescript⽂件，不使⽤块作⽤域或声明本地作⽤域，就会让变量处于⽂件夹中的全局命 名空间，就会造成不同⽂件内的变量命名冲突

**其他**

1. 安装 npm install -g typescript后，在 js⽂件头部，使⽤ // @ts-check，可以使 js⽂件拥有类型检测功能
1. 声明

a. declare（ **使⽤不是** ts**编写** 的第三⽅库，或⾃定义库、成员、类时，使⽤ declare声明，才能获得对应代码

补全功能）


**发布typescript的npm包**

关于发布npm，

1. 新建⽂件，并 npm init-y，初始化项⽬，⽣成 pakeage.json⽂件
1. 全局安装 npm install typescript -g
   1. 使⽤ tsc --init创建 tsconfig.json
   1. 修改 outDir编译的⽬录： ./dist
1. 在项⽬⽂件中
   1. 新建 dist⽬录，⽤来存放 typescript打包后的⽂件
   1. 新建 src⽬录，⽤来存放 typescript的⽂件
1. 更改 pakeage.json的配置⽂件
1. main：
   1. dist/index.js
1. typings：（使 IDE给出该项⽬的代码智能提示）
   1. dist/index.d.ts
1. 每次发布版本需要更改 version的版本号
5. 写完项⽬后，需要 tsc编译 typescript⽂件到 dist⽬录
5. 最后需要删除⼀些⽂件，这些⽂件不⽤上传
   1. node\_modules
   1. tsconfig.json
5. 项⽬⽂件存在 github

a. [Surprise-ling/czjs (github.com)](https://github.com/Surprise-ling/czjs)
