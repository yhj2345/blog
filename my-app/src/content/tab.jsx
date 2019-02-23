import React, { Component } from "react"
import { link } from "react-router-dom"
import "../common/css/tab.css"
import "../common/css/popups.css"


export default class Tab extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    open = () => {
        this.props.sun("block")
    }

    render() {
        return (
            <article className="sidebar">
                <div className="">
                    <img
                        className="sidebarImg"
                        src={require("../common/img/TX.jpg")}
                        alt=""
                    />
                    <h2 className="sidebarName">爱喝牛奶</h2>
                    <span className="sidebarSynopsis">
                        前端入门中，想用学习到的前端知识解决问题，想要成为前端的一份子。
                    </span>
                    <a
                        className="sidebarJJ"
                        href="Javascript:;"
                        onClick={this.open}
                    >
                        详情简介
                    </a>
                </div>
                <nav>
                    <a href="/">
                        <span>首页</span>
                    </a>
                    <a href="/Tag">
                        <span>标签</span>
                    </a>
                    <a href="/On">
                        <span>关于</span>
                    </a>
                </nav>
            </article>
        )
    }
}
