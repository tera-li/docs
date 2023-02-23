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
```js

const initCount = { count: 0 };

function init() {
  return initCount;
}

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return init();
    default:
      throw new Error();
  }
}

export default function Hook(props) {
  // 传入 reducer、state、init(初始化state方法)
  let [state, dispatch] = useReducer(reducer, initCount, init);
  return (
    <Fragment>
      <button onClick={() => dispatch({ type: "increment" })}>增加count</button>
      <button onClick={() => dispatch({ type: "decrement" })}>减少count</button>
      <button onClick={() => dispatch({ type: "reset" })}>重置count</button>
      <div>{state.count}</div>
    </Fragment>
  );
}
```
## useCallback
```js
// 父组件
export default function Main() {
  let [id, setState] = useState(0);

  // 常用于传递给经过 props相等性 优化的子组件
  // return () => { console.log(id) }
  let call = useCallback(() => {
    console.log(id);
  }, [id]);

  return (
    <Fragment>
      <button onClick={() => setState(++id)}>父组件改变state</button>
      <Hook call={call}></Hook>
    </Fragment>
  );
}

// 子组件
function Hook(props) {
  let [count, setState] = useState(0);
  props.call();
  return (
    <Fragment>
      <button onClick={() => setState(++count)}>增加count</button>
    </Fragment>
  );
}
// 检查 props 变更，可传入第二个参数自定义对比 props
export default memo(Hook);
```
## useMemo
```js
// 父组件
export default function Main() {
  let [id, setState] = useState(0);

  // return "useMemo：" + id;
  let call = useMemo(() => {
    return "useMemo：" + id;
  }, [id]);

  return (
    <Fragment>
      <Todo />
      <button onClick={() => setState(++id)}>父组件props</button>
      <Hook call={call}></Hook>
    </Fragment>
  );
}

// 子组件
function Hook(props) {
  let [count, setState] = useState(0);

  console.log(props);
  return (
    <Fragment>
      <hr />
      <button onClick={() => setState(++count)}>增加count</button>
      <div>{count}</div>
    </Fragment>
  );
}
export default memo(Hook);

// useCallback(fn, deps) === useMemo(() => fn, deps)
```
## useRef
## useImperativeHandle
## useLayoutEffect
## useDebugValue