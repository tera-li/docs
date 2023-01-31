# 工具
## 代码风格
### 为什么要统一格式风格？
1. 团队开发，每个人编辑器不同，编码方式不同，导致代码格式不同，代码难看，难以维护

1. 良好的规范性，有益于项目版本迭代，有助于代码审查

1. 保持代码可读性，团队成员之间的代码更加易读

1. **我有强迫症，看到格式不规范的地方就想规范，哈哈哈！！！**
### 使用的工具？
1. **husky**：Git hooks 工具
    - 对git执行的一些命令，通过对应的hooks钩子触发，执行自定义的脚本程序
2. **lint-staged**：检测文件插件
    - 只检测git add . 中暂存区的文件，对过滤出的文件执行脚本
3. **eslint**：插件化JavaScript代码检测工具  
    - Js编码规范，检测并提示错误或警告信息
4. **prettier**：代码格式化工具
    - 代码风格管理，更好的代码风格效果
5. **editorconfig**：文件代码规范
    - 保持多人开发一致编码样式
6. **commitlint**：代码提交检测
    - 检测git commit 内容是否符合定义的规范
7. **commitizen**：代码提交内容标准化  
    - 提示定义输入标准的git commit 内容
## husky
```javascript
npm install husky --save-dev
or
yarn add husky -D

npx husky-init  // 初始化husky配置，在根目录会有.husky配置文件，里面有初始化配置pre-commit
npx husky add .husky/commit-msg  // 在husky配置中，添加commit-msg钩子

// 在.husky中的pre-commit中添加 npm run lint-staged
// 在.husky中的commit-msg中添加 npm run commitlint

```
```javascript
// .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint-staged

// .husky/commit-msg
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run commitlint

/**
// gitHooks（常用hooks）
1.pre-commit：钩子在键入提交信息前运行。
2.prepare-commit-msg：钩子在启动提交信息编辑器之前，默认信息被创建之后运行。
3.commit-msg：钩子接收一个参数，存有当前提交信息的临时文件的路径。 
              如果该钩子脚本以非零值退出，Git 将放弃提交，
              因此，可以用来在提交通过前验证项目状态或提交信息。
4.post-commit：钩子在整个提交过程完成后运行。
*/
```
## lint-staged
```javascript
npm install lint-staged --save-dev
or
yarn add lint-staged -D
```
```javascript
// 在package.json 中添加以下代码
"scripts": {
    "lint-staged": "lint-staged",
}

"lint-staged": {
    // 匹配暂存区所有的js，vue文件，并执行命令
  "*.{js,vue,jsx,tsx}": [
    "prettier --write",
    "eslint --cache --fix",
    "git add"
  ]
}
```
## eslint
1. eslint-plugin-vue
    - vue.js的Eslint插件（查找vue语法错误，发现错误指令，查找违规风格指南）
2. eslint-plugin-prettier
    - 运行更漂亮的Eslint，使prettier规则优先级更高，Eslint优先级低
3. eslint-config-prettier
    - 让所有可能与prettier规则存在冲突的Eslint rules失效，并使用prettier进行代码检查
4. @babel/eslint-parser
    - 该解析器允许你使用Eslint校验所有babel code
    - 仅支持最新的最终ECMAScript标准，不支持实验性语法
    - 该编译器会将code解析为Eslint能懂的EsTree（ES2021语法等等）
```javascript
npm install --save-dev 
eslint
eslint-plugin-vue
eslint-plugin-prettier
eslint-config-prettier
@babel/eslint-parser
or
yarn add -D
eslint
eslint-plugin-vue
eslint-plugin-prettier
eslint-config-prettier
@babel/eslint-parser
```
```javascript
// 在根目录新建 .eslintrc.js，并添加以下代码
module.exports = {
  root: true,
  parserOptions: {
    parser: '@babel/eslint-parser',  // 解析器
    sourceType: 'module',
    ecmaVersion: 12
  },
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-recommended',  // plugin-vue
    'eslint:recommended',  // eslint
    'plugin:prettier/recommended'  // plugin-prettier
  ],

  rules: {
    'prettier/prettier': 'error'
  }
}
```
## prettier
```javascript
npm install --save-dev prettier
or
yarn add prettier -D
```
```javascript
// 在根目录新建 .prettierrc.json 并添加以下代码
{
  "singleQuote": true,  // 使用单引号
  "semi": false,  // 不使用分号
  "bracketSpacing": true,  // 在对象,数组括号与文字之间加空格 
  "htmlWhitespaceSensitivity": "ignore",  // 对html的空格不敏感
  "endOfLine": "auto",  // 行结尾统一样式，保持现有的行尾
  "trailingComma": "none", // 对象，数组等末尾不加逗号
  "tabWidth": 2 //  水平缩进的空格数为2
}
```
## editorconfig
```javascript
// 在根目录创建 .editorconfig 文件，添加以下代码
root = true

[*]
# 设置字符集
charset = utf-8
# 缩进风格
indent_style = space
# 缩进空格
indent_size = 2
# 结尾换行
end_of_line = crlf
# 文件末尾换行符
insert_final_newline = true
# 删除代码前后空格
trim_trailing_whitespace = true

[*.md]
insert_final_newline = false
trim_trailing_whitespace = false
```
## commitlint
```javascript
npm install --save-dev @commitlint/config-conventional @commitlint/cli
or
yarn add @commitlint/config-conventional @commitlint/cli -D
```
```javascript
npm install --save-dev @commitlint/config-conventional @commitlint/cli
or
yarn add @commitlint/config-conventional @commitlint/cli -D
```
```javascript
// 在package.json中scripts中添加对应脚本
"scripts": {
    "commitlint": "commitlint --config commitlint.config.js -e -V",
}

// 创建对应commitlint配置文件
echo "module.exports = {extends: ['@commitlint/config-conventional']};" > commitlint.config.js

// 在根目录创建的commitlint.config.js 中添加以下代码
module.exports = {
  extends: ['@commitlint/config-conventional'],
  // 检测规则
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'perf',
        'test',
        'chore',
        'revert',
        'build'
      ]
    ],
    'type-case': [0],
    'type-empty': [0],
    'scope-empty': [0],
    'scope-case': [0],
    'subject-full-stop': [0, 'never'],
    'subject-case': [0, 'never'],
    'header-max-length': [0, 'always', 72]
  }
}
```
## commitizen
```javascript
npm install --save-dev commitizen cz-customizable
npm install -g commitizen
or
yarn add commitizen cz-customizable -D
yarn global add commitizen
```
```javascript
// 在package.json 中添加以下代码
// 这里用的自定义commitizen，使用git-cz执行git commit命令
"config": {
  "commitizen": {
    "path": "./node_modules/cz-customizable"
  }
}
```
```javascript
// 在根目录创建的.cz-config.js 添加以下代码，自定义commit提示内容
module.exports = {
  types: [
    { value: 'feat', name: 'feat:     新功能' },
    { value: 'fix', name: 'fix:      修复' },
    { value: 'docs', name: 'docs:     文档变更' },
    { value: 'style', name: 'style:    代码格式(不影响代码运行的变动)' },
    {
      value: 'refactor',
      name: 'refactor: 重构(既不是增加feature，也不是修复bug)'
    },
    { value: 'perf', name: 'perf:     性能优化' },
    { value: 'test', name: 'test:     增加测试' },
    { value: 'chore', name: 'chore:    构建过程或辅助工具的变动' },
    { value: 'revert', name: 'revert:   回退' },
    { value: 'build', name: 'build:    打包' }
  ],
  // override the messages, defaults are as follows
  messages: {
    type: '请选择提交类型:',
    // scope: '请输入文件修改范围(可选):',
    // used if allowCustomScopes is true
    customScope: '请输入修改范围(可选):',
    subject: '请简要描述提交(必填):',
    body: '请输入详细描述(可选，待优化去除，跳过即可):',
    // breaking: 'List any BREAKING CHANGES (optional):\n',
    footer: '请输入要关闭的issue(待优化去除，跳过即可):',
    confirmCommit: '确认使用以上信息提交？(y/n/e/h)'
  },
  allowCustomScopes: true,
  // allowBreakingChanges: ['feat', 'fix'],
  skipQuestions: ['body', 'footer'],
  // limit subject length, commitlint默认是72
  subjectLimit: 72
}
```
### husky6.0
- 前几天husky6.0版本更新了，在这里更新一波配置
- 新版本的husky把的配置提取到了根目录，package.json中的配置升级后无效了
```javascript
yarn add husky@6 --save-dev  // 安装husky6.0 version
npx husky-init  // 初始化husky配置，在根目录会有.husky配置文件，里面有初始化配置pre-commit
husky add .husky/commit-msg  // 在husky配置中，添加commit-msg钩子

// 在.husky中的pre-commit中添加 npm run lint-staged
// 在.husky中的commit-msg中添加 npm run commitlint
```
### 最后
代码规范能够很好地提升编码效率，提升团队的代码维护性，并且对后续代码扩展有着良好效果。因此，在编码过程中需要考虑代码扩展性和维护性，代码规范是不可缺少的。
