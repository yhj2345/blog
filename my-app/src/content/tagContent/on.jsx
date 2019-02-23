import React, { Component } from "react"
import Tab from "../tab"


import "../../common/css/home.css"

export default class On extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classList: ["ppp1"],
            contentList: [],
            conditions: {}
        }
    }

    render() {
        return (
            <div className="on">
              <Tab />
                {this.state.contentList.map((item, index) => {
                    return (
                      
                        <div key={index} className={this.state.classList}>
                            <h2 className="title">{item.title}  </h2>
                            
                            <div
                                className="content"
                                dangerouslySetInnerHTML={{
                                    __html: item.content
                                }}
                            />
                        </div>
                    )
                })}
            </div>
        )
    }
    componentDidMount() {
        fetch(
            `https://smcat.xyz/api/post?conditions={"pathName":"about"}` 
        )
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
