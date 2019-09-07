# 说明

一个react leaflet demo 参考此项目[https://github.com/duxianwei520/react](https://github.com/duxianwei520/react)，顺便学学react和leaflet

## 一些react的学习资料

[react文档](https://react.docschina.org/tutorial/tutorial.html)
[react小书](http://huziketang.mangojuice.top/books/react/)
[react入门教程](https://hulufei.gitbooks.io/react-tutorial/content/index.html)
[react后台Demo](https://github.com/duxianwei520/react)

## react的生命周期

[官方文档地址](https://reactjs.org/docs/react-component.html#the-component-lifecycle)

### init阶段

init阶段包括以下几个过程,mount阶段：

1. constructor 构造函数，因为是类所以构造函数会先于生命周期执行
2. static getDerivedStateFromProps() 这个是一个静态方法，当在组件中接收到新属性，想去修改组件中的state的时候调用这个方法
3. getInitialState 这个是获取初始化的状态
4. componentWillMount 组件将要挂载  （在react16之后要废弃但是尚未删除）
5. render 这个阶段是渲染虚拟dom，render是一个纯函数避免在此函数中编写业务代码，只返回必要的渲染的东西即可，比如：原生DOM，react组件，以及一些基本类型。
6. componentDidMount 组件已经渲染完毕此时是可以访问到虚拟dom的，和服务器的交互逻辑代码也可以写在此处，但是挂载的方法和大对象记得在componentWillUnmount销毁就可以了

运行时状态和函数，数据更新等方法; update时的一些钩子函数：

static getDerivedStateFromProps() 这个方法在更新和挂载阶段都可能会调用

1. componentWillReceiveProps 组件将要接受参数时调用此方法 （在react16之后要废弃但是尚未删除）
2. shouldComponentUpdate 组件是否要更新 可以传两个参数nextProps和nextState， 返回true代表可以渲染反之不可，常常可以利用这个函数来优化一些没必要的渲染。
3. 需要更新的话就会走componentWillUpdate这个方法，不需要的话还是正常的运行 （在react16之后要废弃但是尚未删除）
4. render 更新之后再次出发render方法
5. getSnapshotBeforeUpdate 此方法在render函数之后，componentDidUpdate 之前会调用，可以传两个参数prevProps和prevState，表示之前属性和状态，此函数有返回值会作为第三个参数传给componentDidUpdate. 必须和componentDidUpdate一起来使用
6. componentDidUpdate 组件已经更新完毕了,此函数有三个参数prevProps, prevState, snapshot，表示之前的参数之前的装填和snapshot, 如果涉及到触发一些DOM元素的状态就需要对比活着计算的处理放到getSnapshotBeforeUpdate，然后批量的在componentDidUpdate中调用

卸载组件和虚拟dom的阶段，unmount的阶段：

1. componentWillUnmount 即代表组件将要卸载，在组件上绑定的方法或者用到的一些全局事件和变量可以释放了，也可以取消网络请求，清理无效的DOM等事件的处理

## 优化以及一些注意事项

1. 在合适的时候出发setState。在promise或者settimeout等异步回调中减少setState的触发。setState在正常运行机制下会是批量更新，而在promise或者settimeout等异步中是非批量更新的。
2. 尽量使用shouldComponent这个方法来触发子组件的更新而避免使用父组件的render方法触发子组件的更新
3. 注意使用diff算法的时机（待补充。。。）

## 组件通信如何实现

1. 父组件向子组件通信: props
2. 子组件向父组件通信: props+callback,因为props在父组件的作用域中子组件可以通过调用props把需要传递的信息传递给父组件
3. 兄弟组件： 通过父节点来进行通信
4. 跨层级组件:Context 上下文
5. 发布订阅者模式（Events对象主线自己定义）
6. 全局状态管理工具 Redux, Mobox
