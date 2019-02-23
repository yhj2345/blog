import React, { Component } from "react"
import Tab from "./tab.jsx"
import Www from "./www.jsx"
import Popups from "./Popups.jsx"
import "../common/css/home.css"

export default class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            style: { display: "none" }
        }
    }

    suns() {
        return value => {
            this.setState({
                style: { display: value }
            })
        }
    }

    render() {
        return (
        
            <div className="home">
                <Popups sun={this.suns()} styleData={this.state.style} />
                <Tab sun={this.suns()} />

                <Www />
            </div>
        
        )
    }
}
