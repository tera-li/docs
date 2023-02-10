# Pinia

:::info 简介
vue官方团队推荐，替代vuex
:::

## Init
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
## State
## Getters
## Actions
参考链接：https://pinia.vuejs.org/zh/index.html