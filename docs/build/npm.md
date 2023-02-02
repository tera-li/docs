# NPM
包管理⼯具，前端模块化

## 安装 NPM 包
1. npm install -g 包名（全局安装）
2. npm install 包名（安装到项⽬，package不会记录）
3. npm install --save 包名（安装到项⽬必须依赖）
4. npm install --save-d 包名（安装到项⽬开发依赖）

## 删除 NPM 包
1. npm uninstall -g 包名（全局删除模块）
2. npm uninstall 包名（删除本地模块）
3. npm uninstall --save 包名（删除本地模块，并删除项⽬依赖）
4. npm uninstall --save -d 包名（删除本地模块，并删除项⽬开发依赖）

## 发布 NPM 包
1. npm adduser（输⼊ npm 注册的账号、密码、邮箱）
2. npm login（登录 npm）
3. npm whoami（查看当前用户）
4. npm publish（发布包，包名不能有⼤写字⺟、空格、下划线，已经在 package.json中定义）
5. npm unpublish xxx@1.0.1（撤销指定的发布包版本）
6. .gitignore或 .npmignore（忽略相关⽂件上传）

## 更新 NPM 包
**修改 package 中的 version版本号**
```js
1. x.y.z（重大改动，较小改动，补丁）
2. npm version major: update x
3. npm version minor: update y
4. npm version patch: update z
```
```js
1. ^：安装依赖时获取到有新版本时，表示第⼀位版本不变，保持后⾯两位最新
2. ~：安装依赖时获取到有新版本时，表示前两位版本不变，保持最后⼀位最新
3. *：表示全部取最新
4. "1.4.0"：固定版本号
5. npm view dir-to-zip versions：查看 dir-to-zip 的所有版本记录
"dependencies": {
   "ejs": "^2.3.4",
   "express": "~4.1.3",
   "axios": "0.1.1",
   "vue": "2.6.0",
   "vuex": "*"
}
```

## npx
```js
1. ⾸先在当前在项目中是否存在要执行的包，
2. 寻找在node_modules中的包 
   1. 若存在，则执行
   2. 若不存在，则安装最新版本，并执⾏它

npx cowsay hello! 

作用：
1. 临时安装可执⾏依赖包，不⽤全局安装，不⽤担⼼⻓期的污染。
2. 可以执⾏依赖包中的命令，安装完成⾃动运⾏。
3. ⾃动加载node_modules中依赖包，不⽤指定 $PATH。
4. 可以指定 node版本、命令的版本，解决了不同项⽬使⽤不同版本的命令的问题。
```

参考链接：https://github.com/hljinjiang/dir-to-zip