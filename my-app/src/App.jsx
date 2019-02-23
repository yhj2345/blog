import React, { Component } from "react"
import { Switch, Route } from "react-router-dom"
import Home from "./content/home" //首页
import Detail from "./content/detail" //标签页
import Tag from "./content/tag/tag" //标签
import On from "./content/tagContent/on" //关于

import "./common/css/style.css"
import "./common/css/home.css"

class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/detail/:name" exact component={Detail} />
              <Route path="/tag" exact component={Tag} />
              <Route path="/on" exact component={On} />
            </Switch>
        )
    }
}

export default App
