import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import PropTypes from "prop-types"

/* //1.父组件向子组件通信
//子组件
class Child extends Component {
    render() {
      return (
        <div>
          <div>子组件：</div>
          <div>名称：{this.props.name}</div>
        </div>
      );
    }
  }

// 父组件
class App extends Component {
    constructor() {
      super();
      this.state = {
        name: ""
      };
    }
  
    handleChange = e => {
      this.setState({
        name: e.target.value
      });
    };
  
    render() {
      return (
        <div>
          <div>父组件</div>
          <input type="text" onChange={this.handleChange} />
          <Child name={this.state.name} />
        </div>
      );
    }
  }
 */

/* //2. 子组件向父组件通讯

// 子组件
class Child extends Component {

    childCont = e => {
        this.props.childCont(e.target.value)
    }

    render() {
        return (
            <div>
                <div>子组件</div>
                <input type="text" onChange={this.childCont} />
            </div>
        )
    }
}

//父组件
class App extends Component {
    constructor() {
        super()
        this.state = {
            context: ""
        }
    }
    childCont = (e) => {
        this.setState({
            context: e
        })
    }
    render() {
        return (
            <div>
                <div>父组件</div>
                <div>
                    名称：
                    {this.state.context}
                </div>
                <Child childCont={this.childCont} />
            </div>
        )
    }
} */

//3. 跨级组件通信
//父组件
class App extends Component {
    constructor() {
        super()
        this.state = {
            name: ""
        }
    }

    //设置context数据
    getChildContext() {
        return { name: this.state.name }
    }

    onChange = e => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    父组件：
                    <input type="text" onChange={this.onChange} />
                </div>
                <ChildOne childCont={this.getChildContext} />
            </div>
        )
    }
}
//childContextTypes必须得设置，不设置在各下级组件中无法获取到数据，这项是必须项；
App.childContextTypes = {
    name: PropTypes.string
}

//子组件
class ChildOne extends Component {
    render() {
        return (
            <div>
                <div>
                    子组件： <div>我是子组件，我不需要任何组件给我传值</div>
                    <ChildTwo />
                </div>
            </div>
        )
    }
}

//孙子组件
class ChildTwo extends Component {
    render() {
        return (
            <div>
                孙子组件：
                <div>我是孙子组件，我需要拿到最外层组件的值</div>
                <div>
                    孙子组件：
                    {this.context.name}
                </div>
            </div>
        )
    }
}

//contextTypes必须得设置不然无法获取数据
ChildTwo.contextTypes = {
    name: PropTypes.string
}

export default App
