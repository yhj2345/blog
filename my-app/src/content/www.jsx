import React, { Component } from "react"
import { Link } from "react-router-dom"
import Detail from "./detail.jsx"
import "../common/css/tab.css"
import "../common/css/home.css"
import "../common/css/style.css"

export default class Www extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classList: ["ppp1", "ppp2", "ppp3", "ppp4"],
            list: new Array(1).fill(),
            contentList: []
        }
    }

    scroll = () => {
        let www = document.getElementsByClassName("www")[0]
        let wwwH = www ? www.clientHeight : 0
        let scrollTop =
            document.body.scrollTop || document.documentElement.scrollTop

        let offsetH = document.documentElement.offsetHeight
        let nowH = offsetH + scrollTop
        /*  console.log(wwwH, nowH) */
        if (wwwH - nowH < 50) {
            this.setState(state => {
                return {
                    list: state.list.concat(new Array(1).fill())
                }
            })
        }
    }

    render() {
        return (
            <div className="www">
                {this.state.contentList.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={this.state.classList[index % 1]}
                        >
                            <div className="test" className={this.props.test} />
                            <div className="title">
                                <a 
                                    href={`/detail/${item.pathName}`}
                                >{item.title}</a>
                            </div>
                            
                            <div
                                className="summary"
                                dangerouslySetInnerHTML={{
                                    __html: item.summary
                                }}
                            />
                            <h2 className="aText">
                                <Link to={`/detail/${item.pathName}`}>
                                    阅读全文
                                </Link>
                            </h2>
                        </div>
                    )
                })}
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener("scroll", this.scroll)
        fetch(`https://smcat.xyz/api/post?conditions={"isPublic":true,"userName":"niunai"}&sort={"createdAt":-1}`)
      
            .then(res => {
                return res.json()
            })
            .then(res => {
                console.log(res)
                this.setState({
                    contentList: res.result
                })
            })
    }
}
