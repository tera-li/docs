# Vue3

Vue3.0新特性
性能更好，速度更快


![o.png](./assets/vue3-diff.png)

## diff算法差别
::: info 比较方式
- vue2 是全量比较，基于渲染的DOM树，当数据更新后生成新的虚拟DOM树，每个节点相比较，那个节点有变化，就替换那个节点
- vue3 是静态标记比较，基于渲染的DOM树，对会进行变化的数据绑定添加静态标记，当数据更新后生成新的虚拟DOM树，只会比较有静态标记的节点，如果有变化，则替换节点
静态标记会根据不同的变化，标记不同的数字，从而更高效的进行对比查找
:::

::: info 静态提升
- vue2 创建虚拟dom时，每个节点都会重新创建渲染一次
- vue3 就把不会变化的节点提出来，那么就不会再创建的时候再重新生成虚拟dom，而是复用之前提出来的虚拟dom，从而提升性能
:::

::: info 事件侦听缓存
- vue3 会对动态属性进行静态标记，会一直跟踪有静态标记的节点。但是对于事件来说，不会发生变化。因此，事件侦听缓存，去除了静态标记，就不会进行比较，那么就提升了性能
:::

## Vue2/Vue3
::: info 写法
- vue2
  - 数据：data
  - 业务逻辑：methods，watch，computed
- vue3
  - 解决代码不好复用，逻辑不好抽离
  - 解决数据和业务逻辑分散，更好的代码管理和维护
:::

::: info 定义数据
```js
定义数据，引入ref或者reactive from "vue"
ref：定义一个基本数据类型，返回可响应的对象，
reactive：定义一个引用类型，返回响应性的对象
虽然ref也可以定义引用类型，但是建议按照以上对应定义对象值
使用以上函数，便可以监听数据的变化，从而更新dom
```
:::


为什么也叫注入API呢
setup会在beforecreate之前触发的
setup其实就是把里面定义的数据 -> 放入data中，把函数放入methods中
setup注意点
因为是在beforecreate和created之间触发的，data和methods还没有形成，所以不能使用data中的数据，以及methods中的方法，并且setup中没有this（undefined）
setup函数只能是同步的不能是异步的
reactive注意点
实现响应式数据的方法，通过Proxy来对对象进行包装拦截，实现响应式
参数必须是（json/arr）
如果对参数传递了其他对象，默认情况下，修改对象是不会响应式更新的
如果想更新，只要对对象进行重新赋值
ref注意点
ref和reactive是一样的，都是创建响应式数据的方法
ref底层还是reactive，底层会自动转换 ref(10) -> reactive({value:10})
区别在于reactive只能接收object类型，而ref可以接收基础数据类型和引用类型
在script中更改ref的数据，需要加上value
而在template中不用加value，系统会自动加上value
ref和reactive的区别
ref的响应式数据如果是object类型的话会自动转化为reactive
ref的template不用加value，是因为Vue通过私有属性自动转换了
通过__v_isref: true来判断是否来转换
isRef
判断是否是ref定义的属性	
isReactive
判断是否是reactive定义的属性
递归监听
ref和reactive都是通过proxy递归监听值，当数据量大时，非常消耗性能
proxy会把每层数据进行proxy包装对象
shallowReactive，shallowRef，triggerRef
shallowReactive({a:1,b: {c:2}})
浅响应式reactive（非深度监听），只会监听第一层的变化，后面深层不会被包装成proxy
当执行第一层数据没有变化时，深层数据的变化，不会影响UI的变化
当执行第一层数据更改变化时，深层数据会跟随第一层的proxy监听，影响UI一同变化

shallowRef({a:1,b:{c:2}})
浅响应式ref（非深度监听），只会监听第一层的数据变化的value，后面深层不会监听
当执行第一层数据的value没有变化时，深层数据发生变化时，不会影响UI
当执行第一层数据的value发生变化时，深层数据会跟随第一层的proxy监听，而发生变化

triggerRef(ref 定义的数据)
会手动执行shallowRef深层监听的改动，使UI改变

shallowRef和shallowReactive的区别
本质上和ref底层转换为reactive是相同的，shallowRef的第一层监听数据是.value
reactive把ref转换为{value: value}，键为value的对象类型
toRaw和markRaw的区别
toRaw
使ref和reactive的包装对象，转换为原始对象
修改原始对象的属性，会同时修改ref或者reactive的包装对象属性，但不会修改UI
toRaw的作用就是修改原始数据属性值，只会更改ref和reactive包装对象的值，并不会更改UI的值，会减少性能消耗
const state = reactive(obj) -> toRaw(state)
const state = ref(obj) -> toRaw(state.value)
markRaw
使一个对象永远不会被代理（永远不会被追踪）
obj = markRaw(obj)，这个obj不会被ref和reactive响应式代理
toRef和toRefs的区别
const name = toRef(state, 'key')
对state对象数据中的‘key’进行响应式连接
引用state，当改变应用对象的值，会同时更改原始数据、响应式数据的值，会更改UI
name.value = 'zs'
const name = toRefs(state)
相当于把多个toRef()放入一个对象
name.key.value = 'zs'
数据改变会影响UI
unref
unref(state)
把数据放入unref中检测
如果是ref数据，会返回ref数据.value，相当于简化了每次写value的麻烦
如果不是ref数据，会返回数据本身
customRef
自定义响应式数据
return customRef((track,trigger) => {
return {
get() {}
set(val) {}
   }
})
其中track()表示该数据是否执行追踪
其中trigger()表示该数据是否关联UI更新
使用场景：
相当于对某个数据进行代理、处理逻辑，进行同步的执行代码
通过ref获取ref绑定的DOM元素

ref="box"；this.$refs.box // -> vue2.x

// -> vue3.x
// 在template元素中定义
ref="box"
// 在setup中定义box
let box = ref(null), return{box}
onmounted(() => {
    // console.log(box.value)
    // 在这里面打印box的值就能获取到
})
组合API中的生命周期
beforeCreate -> use setup()
created -> use setup()
beforeMount -> onBeforeMount
mounted -> onMounted ......


组合API中的参数传递
Provoid/Inject
// 使用Provide,进行向后代组件传值
Provide: { key: 'value' } // -> 2.x
Provide(key, value)  // -> 3.x
// 使用Inject，接收父代组件的传值
Inject: ['key']  // -> 2.x
Inject(key, defaultValue)  // -> 3.x
组合API中的computed和watch、watchEffect
computed计算属性
const plus = computed(() => count.value++)
cosnt plus= computed({
    get:() => {
        return
    }, // 当该计算属性获取值时触发
    set:(val) => {
        return
    } // 当该计算属性设置值时触发
})
watchEffect监听属性
自动追踪内部定义的值
立即触发监听的数据，同时响应式的追踪其依赖
watchEffect(() => {
    console.log(count.value)
})
watch监听属性
监听单个源
watch(() => state.value, (newstate,oldstate) => {})
监听多个源
watch([state1,state2],(newstate,oldstate)=> {})
// 返回state1，state2的数据数组
1