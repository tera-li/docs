# NPM

**npm**

包管理⼯具，前端模块化

1. 安装 npm包⽅式
   1. npm install -g 包名（全局安装）
   1. npm install 包名（安装到项⽬， package不会记录）
   1. npm install --save 包名（安装到项⽬必须依赖）
   1. npm install --save-d 包名（安装到项⽬开发依赖）
1. 删除 npm包
   1. npm uninstall -g 包名（全局删除模块）
   1. npm uninstall 包名（删除本地模块）
   1. npm uninstall --save 包名（删除本地模块，并删除项⽬依赖）
   1. npm uninstall --save -d 包名（删除本地模块，并删除项⽬开发依赖）
1. 发布 npm包
   1. npm adduser（输⼊ npm注册的账号、密码、邮箱）
   1. npm publish（发布包，包名不能有⼤写字⺟、空格、下划线，已经在 package.json中定义）
   1. npm unpublish（取消发布包）
   1. .gitignore或 .npmignore（忽略相关⽂件上传）
1. 更新 npm包
1. 修改 package中的 version版本号
   1. x.y.z（⼤改，⼩改，补丁）
1. 再使⽤ npm publish
5. 关于发布 typescript的 npm请链接到 [发布typescript的n pm包]
5. npm版本
1. ^：表示第⼀位版本不变，后⾯两位最新
1. ~：表示前两位版本不变，最后⼀位最新
1. \*：表示全部取最新
1. 什么都不加：固定版本号

1 "dependencies": {

2    "ejs": "^2.3.4",

3    "express": "~4.1.3", 4    "axios": "\*0.1.1", 5    "vue": "2.6.0"

6 }

5. 1

**npx**

npx express-generator 运⾏⼀个包，⾸先在当前⽬录下寻找要执⾏的包，寻找在node\_modules中的包 若不存在，则安装最新版本，并执⾏它

1. 临时安装可执⾏依赖包，不⽤全局安装，不⽤担⼼⻓期的污染。
2. 可以执⾏依赖包中的命令，安装完成⾃动运⾏。
2. ⾃动加载 node\_modules中依赖包，不⽤指定 $PATH。
2. 可以指定 node版本、命令的版本，解决了不同项⽬使⽤不同版本的命令的问题。
