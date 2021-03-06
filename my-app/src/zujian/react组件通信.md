###  react组件之间传递信息方式，总体可分为以下几种：

   * 1.（父组件）向（子组件）传递信息

     > parent组件传给child组件，符合react的单向数据流理念，自上到下传递props。
        >
        >>### 父组件向子组件通信
        >>   
        >>![1](http://smcat.xyz/images/1539690606857-1fbeeb59ce22da40.png)
        >>
        >>
        >>      
        >>![2](http://smcat.xyz/images/1539690610723-76b0aa1d341fdc0e.png)
        >>
      > > <div align=center><div/>
        >>
      >>> ![3](http://smcat.xyz/images/1539690613152-951af982c5a08c56.png)
   
    

   

   * 2.（父组件）向更深层的（孙子组件） 进行传递信息

     >使用context来实现，context提供后，React自动地向下传递信息，并且子树中的任何组件都可以通过定义 contextTypes 去访问它。 
     >
     >如果 contextTypes 没有定义， context是一个空对象。
     >
      >>### 跨级组件通信
      >>
      >>   ![7](http://smcat.xyz/images/1539690623196-eb8fcb9a200f8fbf.png)
     >>   ![8](http://smcat.xyz/images/1539690624982-49ff5e167ac93f9e.png)
     >>    ![9](http://smcat.xyz/images/1539690626991-804b3ae1158f3e3b.png)
     >>
     >>    <div align=center><div/>
     >>
     >>>    ![10](http://smcat.xyz/images/1539690628463-e06b36ab7fd2355b.png)



   * 3.（子组件）向（父组件）传递信息 

     > 利用回调函数，可以实现子组件向父组件通信：父组件将一个函数作为 props 传递给子组件，子组件调用该回调函数，便可以向父组件通信。  

     >> ### 父组件向子组件通信
     >>
     >>  ![4](http://smcat.xyz/images/1539690615378-c0483e8628ab2862.png)
     >>  ![5](http://smcat.xyz/images/1539690619551-b1fcab855e254130.png)
     >>
     >>  <div align=center><div/>
     >>
     >>>  ![6](http://smcat.xyz/images/1539690621329-052b508bd891d7ed.png)

   * 4.没有任何嵌套关系的组件之间传值（比如：兄弟组件之间传值）

     > 若没有父组件，可以通过影响全局的一些机制去考虑，比如说自定义事件，通过事件去传递。

   * 5.利用react-redux进行组件之间的状态信息共享

    


## 总结
>>
> React 中组件的几种通信方式，分别是：
>>
>>  父组件向子组件通信：使用 props
>>
>>  子组件向父组件通信：使用 props 回调
>>
>>  跨级组件间通信：使用 context 对象
>>
>>  非嵌套组件间通信：使用事件订阅(自定义事件)
>>
>>  事实上，在组件间进行通信时，这些通信方式都可以使用，区别只在于使用相应的通信方式的复杂程度和个人喜好，选择最合适的那一个。比如，通过事件订阅模式通信不止可以应用在非嵌套组件间，还可以用于跨级组件间，非嵌套组件间通信也可以使用 context 等。关键是选择最合适的方式。
>>
>>    当然，自己实现组件间的通信还是太难以管理了，因此出现了很多状态管理工具，如 flux、redux 等，使用这些工具使得组件间的通信更容易追踪和管理。
