import React, { Component } from "react"
import Tab from "./tab.jsx"

import "./../common/css/detail.css"

export default class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            details: null,
            loading: true
        }
    }

    fetchData = () => {
        let name = this.props.match.params.name
        this.mounted = true
        fetch(
            `https://smcat.xyz/api/post?conditions={"pathName":"${name}"}`
        )
            .then(res => {
                return res.json()
            })
            .then(res => {
                if (!this.mounted) return
                this.setState({
                    details: res.result[0],
                    loading: false
                })
            })
    }

    detailsDOM(details) {
        if (details) {
            return (
                <div className="detail">
                   <Tab   />
                   <div id="toc">
                        <p class="toc-title">
                            <strong>文章目录</strong>
                        </p>
                        <div class="toc-content" 
                         dangerouslySetInnerHTML={{
                            __html: details.toc
                        }} />
                    </div>
                    <h2>{details.title}</h2>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: details.content
                        }}
                    />
                   
                </div>
                
            )
        } else {
            return (
                <div className="detail">
                    <h2>404!!</h2>
                    <div>本篇文章不存在</div>
                </div>
            )
        }
    }

    render() {
      

        let { details, loading } = this.state
        if (loading) {
            return <div>loading</div>
            
        } else {
            return this.detailsDOM(details)
        }
    }

    componentDidMount() {
        this.fetchData()
    }

    componentWillUnmount() {
        this.mounted = false
    }
}
