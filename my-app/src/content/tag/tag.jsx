import React, { Component } from "react"
import Tab from "../tab"



import "../tag/tag.css"

export default class On extends Component {
    constructor(props) {
        super(props)
        this.state = {
            classList: ["tagDiv"],
            contentList: [],
            conditions: {}
        }
    }

    render() {
        return (
            <div className="tag" >
               <Tab />
              
         
            <div className="tagCt" >
            
                {this.state.contentList.map((item, index) => {
                    return (
                           
                        <div key={index} className={this.state.classList} >
                        
                            <a className="tags" href={`/detail/${item.pathName}`}>{item.title}  </a>

                        </div>
                    )
                })}
            </div>
            </div>
        )
    }
    componentDidMount() {
        fetch(
            `https://smcat.xyz/api/post?conditions={"isPublic":true,"tags":"日常"}` 
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
