# Vue3

## 使用方式
### vue2
```js
<template>
  <div @click="changeMsg">{{msg}}</div>
</template>
<script>
export default  {
  data(){
    return {
      msg:'hello world'
    }
  },
  methods:{
    changeMsg(){
      this.msg = 'hello juejin'
    }
  }
}
</script>
```
### vue3
- 方式一
```js
<template>
  <div @click="changeMsg">{{msg}}</div>
</template>

<script>
import { ref,defineComponent } from "vue";
export default defineComponent({
  setup() {
    const msg = ref('hello world')
    const changeMsg = ()=>{
      msg.value = 'hello'
    }
    return {
      msg,
      changeMsg
    };
  },
});
</script>
```
- 方式二
```js
<template>
  <div @click="changeMsg">{{ msg }}</div>
</template>

<script setup>
import { ref } from "vue";

const msg = ref('hello world')
const changeMsg = () => {
  msg.value = 'hello'
}
</script>
```
## 生命周期
|   vue2   |  vue3  |  description  |
| ---- |  ----  | ----  |
| beforeCreate | -  | 实例创建前调用 |
| created | -  | 实例创建后调用 |
| beforeMount | onBeforeMount  | DOM挂载前调用 |
| mounted | onMounted  | DOM挂载完成调用 |
| beforeUpdate | onBeforeUpdate  | 数据更新之前调用 |
| updated | onUpdated  | 数据更新之后调用 |
| beforeDestroy | onBeforeUnmount  | 组件销毁前调用 |
| destroyed | onUnmounted  | 组件销毁完成调用 |

```js
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from "vue";

console.log('0')
onBeforeMount(() => {console.log("1")})
onMounted(() => {console.log("2")})
onBeforeUpdate(() => {console.log("3")})
onUpdated(() => {console.log("4")})
onBeforeUnmount(() => {console.log("5")})
onUnmounted(() => {console.log("6")})
```
## watch
### vue2
```js
watch: {
  msg(newValue, oldValue) {
    console.log(oldValue, newValue)
  },
  msg1: {
    handler(newValue, oldValue) {
      console.log(oldValue, newValue)
    },
    deep: true,
    immediate: true
  }
},
```
### vue3
```js
import {
  ref,
  watch,
  watchEffect
} from "vue";

let val = ref(1)
let val1 = ref(1)
// 方式1: 监听单个值
watch(val, (newValue, oldValue) => {
  console.log(oldValue, newValue)
},{ deep: true, immediate: true })
// 方式2: 监听多个值
watch([val, val1], (newValue, oldValue) => {
  console.log(oldValue, newValue)
},{ deep: true, immediate: true })
// 方式3: 监听值的源数据
watch(() => val, (newValue, oldValue) => {
  console.log(oldValue, newValue)
},{ deep: true, immediate: true })
// 方式4: 追踪watchEffect中的依赖，其依赖变更时重新运行该函数
watchEffect(() => {
  console.log(val, val1)
})
```
## computed
### vue2
```js
computed: {
  val2() {
    return this.val + 1
  }
},
```
### vue3
```js
import {
  ref,
  computed
} from "vue";
let val = ref(1)
let val2 = computed(() => val.value + 1)
```
## props
### vue2
```js
props:['msg']
props: {
  show: {
    type: Boolean,
    default: false
  },
  loadingText: {
    type: String,
    default: '加载中...'
  }
},
```
### vue3
- 方式一
```js
import { defineComponent } from "vue";
export default defineComponent({
  props: ["msg"],
  props: {
    msg: {
      type: String,
      default: '加载中...'
    }
  },
  setup(props) {
    console.log(props)
  },
});
```
- 方式二
```js
import { defineProps } from "vue";
const props = defineProps({
  msg: String,
  value: {
    type: String,
    default: "123",
  },
});
```

## emit
### vue2
```js
this.$emit('sendMsg','子组件数据')
```
### vue3
- 方式一
```js
import { defineComponent } from "vue";
export default defineComponent({
  emits: ['sendMsg'],
  setup(props, ctx) {
      ctx.emit('sendMsg', '子组件数据')
  },
});
```
- 方式二
```js
import { defineEmits } from "vue";
const emits = defineEmits(['send'])
const send = () => {
  emits('sendMsg', '子组件数据')
}
sendMsg()
```

## $attrs/$listeners
### vue2
```js
// 返回所有绑定在组件上的属性（除props 申明的属性、class、style）
this.$attrs
// 返回所有绑定在组件上的事件监听器
this.$listeners
```
### vue3
- 方式一
```js
import { defineComponent } from "vue";
export default defineComponent({
  setup(props, ctx) {
    console.log(ctx.attrs)
  },
});
```
- 方式二
```js
import { useAttrs } from "vue";
// 返回返回所有绑定在组件上的属性和事件监听器（除props 申明的属性）
const attrs = useAttrs()
```

## provide/inject
### vue2
```js
// 父组件
provide() {
  return {
    msg1: 'msg111',
    msg2: 'msg222'
  }
}
// 子组件
inject: ['msg1','msg2'],
```
### vue3
```js
// 父组件
import { provide } from "vue";
provide("msg1",'msg1111')

// 子组件
import { inject } from "vue";
const msg = inject('msg1')
```

## $parent/$children
### vue2
```js
// 获取父组件
this.$parent

// 获取子组件，多个
this.$children
```

## expose&ref
:::info expose只有在vue3中才能使用
:::
### vue2
```js
// 绑定ref
<HelloWorld ref="hello-dom" />
// 获取子组件
this.$refs['hello-dom']
```
### vue3
- 方式一
```js
// 子组件 HelloWorld
import { defineComponent } from "vue";
export default defineComponent({
  setup(props, ctx) {
    const one = () => {
      console.log('one')
    }
    const one1 = () => {
      console.log('one1')
    }
    // expose优先级更高，返回什么才能访问什么
    ctx.expose({ one })
    // 返回什么才能访问什么
    return {
      one,
      one1,
    }
  },
});

// 父组件
<HelloWorld ref="child"/>

import { defineComponent, ref } from "vue";
export default defineComponent({
  setup(props, ctx) {
    let child = ref()
    // 获取子组件属性
    child.value
  },
});
```

- 方式二
```js
// 子组件 HelloWorld
import { ref, defineExpose } from "vue";
const send = () => {}
let val = ref(1)
// 子组件必须暴露对应属性才能让父组件获取
defineExpose({
  val,
  send
})

// 父组件
<HelloWorld ref="child"/>

import { ref } from "vue";

let child = ref()
// 获取子组件属性
child.value
```

- 方式三
```js
<div ref="child"></div>

import { ref } from "vue";
let child = ref()
// 获取元素DOM
child.value
```

参考链接：https://vuejs.org/guide/introduction.html