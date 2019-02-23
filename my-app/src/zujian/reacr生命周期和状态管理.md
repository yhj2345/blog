# react 生命周期

- 只有类组件才有生命周期, 函数式组件没有生命周期

# Mounting 装载

## 1. constructor() 构造方法

 - **constructor** 是 ES6 对类的默认方法，通过 new 命令生成对象实例时自动调用该方法。并且，该方法是类中必须有的， 如果没有显示定义，则会默认添加空的 **constructor( )方法**。当存在 **constructor** 的时候必须手动调用 super 方法。在 **constructor** 中如果要访问 this.props 需要传入 props
 
  - 强调以下：
   
       -   1.存在 **constructor** 的时候必须手动调用 super 方法
   
        - 2.**constructor** 中如果要访问 this.props 需要传入 props
   
   
       作者：静水流深之鑫
      
     来源：CSDN
      原文： https://blog.csdn.net/qq_26941173/article/details/80468446?utm_source=copy
     
      版权声明：本文为博主原创文章，转载请附上博文链接！
   
   -   ### 代码示例：
   
   -   声明 **constructor** 时必须调用 super 方法
    
   -   可以正常访问 this.props，因为传入了 props
     
```
        export default class APP extends Component {
                constructor(props) {
                 super(props)
                console.log(this.props)
                }
```
           
   -   ### **constructor** 常用来初始化 state
```
               export default class APP extends Component{
               constructor(props) {
                  super(props)
                  this.state = {
                  style: { display: "none" }
                 }
```
---

## 2. static getDerivedStateFromProps(prop, state)

  -   在 render() 之前, 给你一次改变 state 的机会, 不改变就返回 null

---

## 3. render() 渲染组件

  -   render 是 react 必须定义的一个生命周期，用来渲染 dom。
 
    -   注意：尽量不要在 render 方法里面修改 state，可能会触发死循环导致栈溢出.
   
    -   这个方法是 react 组件唯一必需的函数，这个方法用于创建虚拟 DOM。
        这个方法里数据只能通过 this.state 和 this.props 输出。
        要注意一点返回的组件必须有一个顶级的组件，也就是说所有的标签必须被一个父标签包裹。
 
  ### 代码实例：
```
      return (
                 <div className="detail" 
                     <h2 404!!</h2 
                     <div 本篇文章不存在</div 
                 </div 
             )
```

---

## 4. componentDidMount() 组件挂载完成后

  -   获取真正的 DOM 元素
 
  -   组件真正在被装载之后，可以修改 DOM
  -   这个方法中可以调用 React.findDOMNode()方法，访问 Dom 节点
        （注：在 react 0.13 版本中用 this.getDOMNode()方法而且返回的是虚拟 DOM，不能直接访问 DOM 节点）
      
 - 访问 DOM 节点时，react 提供了 refs 对象，可以同个 refs 对象直接访问到相应的节点上：
   
- 代码实例：
         
          `<div ref='app' </div `
         
          可以通过 Raect.findDOMNode(this.refs.app)直接访问到 div 节点
         
    作者：gz 郭小敏
        
    链接：https://www.jianshu.com/p/b12cc90f3d3f
        
    來源：简书
        
    简书著作权归作者所有，任何形式的转载都请联系作者获得授权并注明出处。
----
# Update 更新
 ## 1. static getDerivedStateFromProps(prop, state)

- 触发时间：在组件构建之后(虚拟dom之后，实际dom挂载之前) ，以及每次获取新的props之后。
 
- 每次接收新的props之后都会返回一个对象作为新      的state，返回null则说明不需要更新state. 
         
- 配合**componentDidUpdate**，可以覆盖componentWillReceiveProps的所有用法
 
- ### 代码实例：

```    
        class Example extends React.Component {
           static getDerivedStateFromProps(nextProps,  prevState) 
             {
                // 没错，这是一个static
              }} 
```
  
    作者：静水流深之鑫 
   
    来源：CSDN 
   
    原文：https://blog.csdn.net/qq_26941173/article/details/80468446?utm_source=copy
    
    版权声明：本文为博主原创文章，转载请附上博文链接！
---
## 2. shouldComponentUpdate(nextProps, nextState)

     用于优化性能
     返回 一个 bool 值
     ture: 组件进行正常的更新流程
     false: 后面的生命周期函数不会执行, 视图不会更新

## 3. render()

## 4. getSnapshotBeforeUpdate(prevProp, prevState)
 * 它执行的时候, 新的virtual DOM结构已经计算出来了
     但是, 这个时候, 浏览器 DOM 元素还没有更新
      
 *  触发时间: update发生的时候，在render之后，在组件dom渲染之前。 
返回一个值，作为**componentDidUpdate**的第三个参数。 
配合**componentDidUpdate**, 可以覆盖**componentWillUpdate**的所有用法。
 - ### 代码实例：
      ```
      class Example extends React.Component {
      getSnapshotBeforeUpdate(prevProps, prevState) {
         // ...
         }
  }

## 5. componentDidUpdate(pProps, pState, snapshop)

 - 组件初始化时不调用，组件更新完成后调用，此时可以获取DOM节点。
 
 - 除了首次**render**结束之后调用 **componentDidMount**
 
 - 其它**render**结束之后都是调用 **componentDidUpdate** 
 
 - 该结构内setState有可能会触发重复渲染，需要自行判断，否则会进入死循环 
 
 - 一般情况下：里面有定时器和异步请求时不会出现死循环
 
  - ### 代码实例：
             this.setState({..}) // 设置state
            } else {
             // 不再设置state
            } 
           }

----
# Unmounting 卸载

 ## componentWillUnmount()  用于清除定时器、事件绑定
- 只执行一次

React 官方不建议在 **componentWillMount()** 修改 state ，通常建议在 **componentDidMount()**, 如果需要设置 state 的初始状态，可以在 **(es6:)constractor()** 或者 **(es5:)getInitialState()** 中设置。

  组件被卸载的时候调用。一般在**componentDidMount**里面注册的事件需要在这里删除。像在**didmount**里面设置的定时器可以在这里面进行清除。

# 错误处理

 ## componentDidCatch( error, info )
 - 捕获子组件的生命周期抛出的错误


