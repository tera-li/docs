﻿# 前端⼯程化

## 简介
:::info 简介
1. ⼀个项⽬相当于⼀个⼯程
2. ⼯程化在我理解为：**完成项⽬过程中，⽤到的各种⼯具和技术**
3. **工程化体现在项⽬的组织能⼒，需将整个项⽬串联起来**

**为什么使⽤**
1. 通过各种⼯具和技术，提升开发效率、降低成本、质量保证为目的
2. 优化开发流程，提高编码效率和质量，提高项目的可维护性
:::

## 框架及插件选型
:::info 简介
1. **框架/库**（ vue、react、angular、element、antd）
2. **构建/管理⼯具**（ webpack、vite、esbuild)
3. **规范**（eslint、prettier、git）
4. **JS模块化**（ AMD、 CommonJS、 ES6 Module）
5. **CSS模块化**（ Less、 Sass、 Stylus）
:::

## 划分前端项⽬的开发概念
:::info 简介
1. **JS模块**（独⽴的⼯具函数、应⽤配置、⽹络请求、单元测试）
   1. 可以具有独⽴算法，数据配置
   2. 如：axios、lodash等封装函数、config
2. **CSS模块**（animate、reset、icon-font）
   1. 可以具有独⽴功能性的样式
   2. 如：全局样式、动画样式、字体样式
3. **UI组件**（layout、header、footer、sidebar、nav）
   1. 可以具有可复⽤公共样式布局
   2. 如：单⽂件⾯公共 UI 部分
4. **⻚⾯**（views）
   1. 如：⾸⻚、列表⻚、⽤户管理⻚⾯等⻚⾯组成
5. **应⽤**（整个项⽬或整个站点被称为应⽤，由多个⻚⾯组成）
   1. 如 SPA（单⼀⻚⾯应⽤）、 PWA（渐进式 Web应⽤）
:::

## 资源管理
:::info 简介
1. 前端资源都部署在远程服务器中，⽤户使⽤浏览访问不同⻚⾯来加载不同资源
1. 因此性能优化中`资源管理`成为性能优化的核⼼
1. 加载相关的⻚⾯需要 **按需加载**、**延迟加载**、**预加载**、**请求合并**、**懒加载**
1. 缓存相关的浏览器 **缓存利⽤**、**缓存更新**、**缓存共享**
1. 这些优化⽅案围绕着将 **增量** 原则做到极致⽽展开
:::

## 规范化
:::info 简介
良好的规范利于开发质量，代码质量，以及后期维护难度
1. ⽬录结构规范制定
2. 编码规范
3. 前后端接⼝规范
4. ⽂档规范
5. 组件管理
6. Git分⽀管理
7. Commit描述规范
8. 定期 code review
:::

## ⾃动化
:::info 简介
将`提交代码`~`代码发布`这种**重复性⼯作**
1. 提交代码
1. 合并⾄ master分⽀
1. 合并代码
1. 打包构建
1. 备份服务器上项⽬⽂件
1. 将打包⽂件上传服务区项⽬⽬录  
...  
...  
...  
2. 应该让机器流程化自动完成
:::

## 最后
:::info 简介
1. 从**模块化**、**组件化**、**规范化**、**⾃动化**四个⽅⾯总结**前端⼯程化需要使⽤的技术和⼯具**
2. **模块化**：将复杂的程序封装成⼏个模块 (⽂件 )组成在⼀起，块内部数据私有，只是向外暴露接⼝⽤来与其他模块通信
3. **组件化**：将⼀个项⽬拆分成若⼲组件构成，每个组件有独⽴的逻辑业务，增加组件的复用性
4. **规范化**：整个项目统一为一个规范，提高项目开发效率及统一管理
5. **⼯程化**：⼀个⼯程相当于⼀个项⽬，完成项⽬过程中，⽤到的各种⼯具和技术以提升开发效率、降低开发难度、提升产品质量、降低企业成本就是⼯程化
:::
