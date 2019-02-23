/* 弹窗 */
import React, { Component } from "react"
import { link } from "react-router-dom"
import "../common/css/popups.css"

export default class Popups extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: true
        }
    }

    close = () => {
        this.props.sun("none")
    }

    render() {
        return (
            <article
                className={this.state.name ? "popups" : ""}
                style={this.props.styleData}
            >
                <div className="popupsContent">
                    <img
                        className="popupsImg"
                        src={require("../common/img/TX.jpg")}
                        alt=""
                    />
                    <h2 className="popupsName">爱喝牛奶</h2>
                    <span className="popupsSynopsis">
                        前端入门中，想用学习到的前端知识解决问题，想要成为前端的一份子。
                    </span>
                </div>
                <a className="popupsX" onClick={this.close} href="Javascript:;">
                    X
                </a>
            </article>
        )
    }
}
