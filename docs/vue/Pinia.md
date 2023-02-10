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

参考链接：https://pinia.vuejs.org/zh/index.html