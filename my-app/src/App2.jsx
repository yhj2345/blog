import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"


class Appl extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <button onClick={this.props.funs}>更新消息</button>
                <div>{this.props.text || "消息未更新"}</div>
            </div>
        )
    }
}

class Appo extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        console.log(this.props)

        return <div>{this.props.text || "消息未更新"}</div>
    }
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    funs() {
        return () => {
            this.setState({
                text: "消息更新啦~~"
            })
        }
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <h2>信息跟新频道</h2>
                <Appl funs={this.funs()} text={this.state.text} />
                <Appo text={this.state.text} />
            </div>
        )
    }
}

export default App
