# React Basics

## 组件类别
### 类组件
:::info 简介
```js
import React from "react";

class Hoc extends React.Component {
  name = "Josh Perez";
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ count: ++this.state.count });
  }
  render() {
    return (
      <div>
        <div>{this.name}</div>
        <div>{this.state.count}</div>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    );
  }
}

export default Hoc;
```
:::

### 函数组件
:::info 简介
```js
import React, { useState, useEffect } from "react";

const Example = () => {
  // 声明一个新的叫做 “count” 的 state 变量
  const [count, setCount] = useState(0);
  useEffect(() => {
    return () => {
      console.log("Bye");
    };
  }, []);
  const handleClick = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};
export default Example;
```
:::

## 类组件和函数组件的区别

### 编写方式区别
1. 类组件使用 **class** 编写组件
2. 函数组件使用 **function** 编写组件

### 状态管理区别
1. 类组件使用 **this.state** 定义状态，**this.setState** 操作状态
2. 函数组件使用 **useState** 定义状态，返回数组[value, setValue]，**setValue** 操作状态

### 生命周期区别
1. 类组件存在 **componentDidMount** 等生命周期
2. 函数组件没有生命周期，使用 **useEffect** 替代 componentDidMount 和 componentDidUpdate
   1. **useEffect** 回调函数中 return 一个函数，则 return 的函数会在组件卸载的时候执行，正如componentWillUnmount

### 成员属性区别
1. 类组件通过 **this**调用内部成员
   1. 构造器 constructor 中 this 指向该实例对象（构造器只调⽤⼀次，只在 new 的时候调⽤）
   2. 事件调用中 this 指向丢失的原因
      1. 事件 onClick 触发执⾏时的函数在 dom 上直接调⽤，⽽不是在类实例对象中调⽤
      2. 由于普通函数的 this 指向为调⽤时所处的对象决定的，因⽽指向 window，⼜因为开启了 use strict， window 变为了 undefined
2. 函数组件直接使用内部成员，没有 **this**

## State
```js
// 定义 state
this.state = {
   count: 0,
   arr: [{ a: 1 }]
}
// 更新 state 方式一
this.setState({ count: ++this.state.count }, () => {
   this.setState({ count: ++this.state.count });
});
// 更新 state 方式二
this.setState(
   (state) => ({ count: ++state.count }),
   () => {
      this.setState({ count: ++this.state.count });
   }
);

// 第二个参数回调函数在 render 调用后才被调用
```

## Props
```js
// 1、读取传入的属性值
this.props.name
​
// 2、对props中的属性值进行类型限制和必要性限制
import PropTypes from 'prop-types'
Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.
}
​
// 3、将对象的所有属性通过props传递
<Person {...person}/>
​
// 4、默认属性值
Person.defaultProps = {
  name: 'single',
  age: 18
}

// props是不可变的，⼦组件不可修改 props，由⽗组件传⼊⼦组件
```
## refs
```js
// 1、字符串形式的ref
<input ref="inputTarget" />
// 通过this.refs.inputTarget 获取DOM

// 2、回调形式的ref
<input ref={(target) => {this.inputTarget = target}} />
// 通过this.inputTarget 获取DOM
​
// 3、createRef创建ref容器
myRef = React.createRef()
<input ref={this.myRef} />
// 通过this.myRef.current 获取DOM

// refs访问绑定的 DOM 节点
```
## ⽣命周期
![⽣命周期](./assets/life.png)
参考链接：https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

### 挂载阶段
:::info 简介
1. **constructor(props)**: 构造函数最先调⽤
   1. 初始化内部 state
   2. 为事件处理函数绑定实例
2. **static getDerivedStateFromProps(props, state)**: 罕⻅⽤例，即 state 的值任何时候都取决于 props
   1. 静态方法，无 this
   2. ⼦组件的 state 取决于⽗组件的 props
   3. return props or null
3. **UNSAFE_componentWillMount()**: 在组件挂载前调用（DOM插入前）
4. **render()**: 是 class 组件中唯一必须实现的方法，返回需要渲染的JSX
   1. 原生的DOM，如div
   2. React组件
   3. Fragment（片段）
   4. Portals（插槽）
   5. 字符串和数字，被渲染成text节点
   6. Boolean和null，不会渲染任何东西
5. **componentDidMount()**: 在组件挂载后调用（DOM插入后）
   1. 适合添加订阅的地方
   2. 适合网络请求获取数据
   3. 获取DOM节点
:::

### 更新阶段
:::info 简介
1. props传⼊的更新阶段
   1. UNSAFE_componentWillReceiveProps(nextProps): 在组件接收参数前调⽤
      1. 在更新⼦组件，需要重新渲染组件时⽤到的⽐较多
   2. static getDerivedStateFromProps(props, state): 罕⻅⽤例，即 state 的值任何时候都取决于 props
   3. shouldComponentUpdate（需要组件更新）
      1. return Boolean（ true表示组件更新， false表示组件不更新）
   4. UNSAFE_componentWillUpdate（组件更新前）
   5. render（渲染）
   6. getSnapshotBeforeUpdate（获取快照在更新前， return的值在下个钩⼦中接收）
      1. 在 dom更新前调⽤，获取更新前的 dom信息
      2. return null or snapshotValue
   7. componentDidUpdate(preProps, preState, snapshotValue)（组件更新后）
2. state渲染更新
   1. shouldComponentUpdate
   2. componentWillUpdate
   3. render
   4. componentDidUpdate
:::

   1. 卸载阶段
      1. componentWillUnmount（组件卸载前）
1. ⽗⼦组件传值
   1. ⽗传⼦， **通过** prop**属性传值**
   2. ⼦传⽗，通过 prop属性 **将⽗组件⽅法传⼊⼦组件** ，⼦组件 **调⽤传⼊的属性⽅法** ， **触发⽗组件的⽅法**
2. react-router-dom
   1. 路由组件和⼀般组件的区别
   2. 精确匹配和模糊匹配
   3. params和 search(query)、 state
   4. 编程式路由导航 this.props.history.push('')
   5. withRouter可以使⾮路由组件拥有路由组件特有的 API，进⾏编程式导航
![](./assets/Aspose.Words.bdb07b23-8480-466b-9fef-08b6ea7387cb.001.jpeg)

1. redux
![](./assets/Aspose.Words.bdb07b23-8480-466b-9fef-08b6ea7387cb.002.jpeg)
   1. 异步和同步 action
   2. react-redux集中式管理
1. react-router
2. hooks
3. Fragment、 Context、 PureComponent、 getderivedStateFromError、 renderProps(插槽 )
4. 组件间传值⽅式
   1. ⽗⼦： props
   2. 兄弟： pubsub、 redux
   3. 祖孙组件： pubsub、 redux、 context
