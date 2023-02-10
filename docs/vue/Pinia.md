# Pinia

:::info 简介
vue官方团队推荐，替代vuex
:::

## 创建Store
```js
import { createPinia } from 'pinia'
import { createApp, watch } from 'vue'
import App from './App.vue'

// 创建pinia store
const pinia = createPinia()

const app = createApp(App)
app.use(createPinia())
app.mount('#app')

// 可监听整个store变化
watch(pinia.state, (state) => {
    console.log(state)
},{ deep: true, immediate: true })
```

## 定义Store
```js
import { defineStore } from 'pinia'

// 定义store，指明id
export const userStore = defineStore('user', {
    // 定义状态
    state: () => ({
        user: '超级管理员',
        count: 1
    }),
    // 定义计算属性
    getters: {
        double: (state) => state.count * 2,
    },
    // 定义动作
    actions: {
        changeUser(val) {
            // 可通过this访问当前整个this
            this.user = val
        },
    },
})
```
## 使用Store
```js
import { userStore } from "@/store/module/user";
import { storeToRefs } from "pinia";
// 获取store对象
const store = userStore()
// 使其state的属性保持响应性
const { user, double } = storeToRefs(store)
// 重置store
const handleReset = () => {
    store.$reset()
}
// 修改store
const handleEdit = () => {
    store.$patch({
        user: '女',
        count: 4
    })
}
// 调用action
const handleAction = () => {
    store.changeUser('普通用户')
}
// 监听store变化
store.$subscribe((mutation, state) => {
    // 'direct' | 'patch object' | 'patch function'
    console.log(mutation.type)
    // 'user'
    console.log(mutation.storeId)
    // 只有 mutation.type === 'patch object'的情况下才可用
    // 传递给 cartStore.$patch() 的补丁对象。
    console.log(mutation.payload)
    // 每当状态发生变化时，将整个 state 持久化到本地存储。
    localStorage.setItem('cart', JSON.stringify(state))
    // detached使其在组件被卸载后，该订阅依旧会被保留。
},{ detached: true })
```

## Pinia 插件
:::info 简介
1. 为 store 添加新的属性
2. 定义 store 时增加新的选项
3. 为 store 增加新的方法
4. 包装现有的方法
5. 改变甚至取消 action
6. 实现副作用，如本地存储
7. 仅应用插件于特定 store
:::
```js
import { createPinia } from 'pinia'
import { ref } from "vue";

const piniaPlugin = (context) => {
    /*  当有多个 store 调用时，会重复触发该函数
        context.pinia // 用 `createPinia()` 创建的 pinia。
        context.app // 用 `createApp()` 创建的当前应用(仅 Vue 3)。
        context.store // 该插件想扩展的 store
        context.options // 定义传给 `defineStore()` 的 store 的可选对象。
    * */
    console.log(context)
    // 返回的对象会在每个store上访问到
    return {
        // 定义响应性数据，可以修改以呈现响应式
        secret: ref('the cake is a lie'),
        hello: 'hello world'
    }
}
// 创建 Pinia，使用use扩展plugin
export default createPinia().use(piniaPlugin)
```
参考链接：https://pinia.vuejs.org/zh/index.html