# React Hook

## useState
```js
/* class */
// 初始化、更新、读取
this.state = { count: 0 };
this.setState({ count: this.state.count + 1 })
this.state.count

/* hook */
// 初始化、更新、读取
const [count, setCount] = useState(0);
setCount(count + 1)
count
```
## useEffect
```js
/*
相当于class中这三个函数的组合
componentDidMount
componentDidUpdate
componentWillUnmount 
*/
let [count, setCount] = useState(0);

// 初始化、组件卸载时触发
useEffect(() => {
    console.log("模拟ajax");
    return () => {
        console.log("模拟卸载：ajax");
    };
}, []);

// 初始化，不管什么更新都触发
useEffect(() => {
    console.log("啥依赖都没有");
    return () => {
        console.log("模拟卸载：啥依赖都没有");
    };
});

// 初始化、count更新时触发
useEffect(() => {
    console.log("依赖" + count);
    return () => {
        console.log("模拟卸载：依赖");
    };
}, [count]);
```
## useContext
```js
// 父组件
const MyContext = createContext("context初始值");
function ParentHook() {
    let [count, setCount] = useState(0);
    return (
        <MyContext.Provider value={count}>
            <Hook></Hook>
        </MyContext.Provider>
    )
}
// 子组件
function Hook() {
    console.log(useContext(MyContext));
    return (
        <MyContext.Consumer>{(value) => value}</MyContext.Consumer>
    )
}
```
## useReducer
## useCallback
## useMemo
## useRef
## useImperativeHandle
## useLayoutEffect
## useDebugValue