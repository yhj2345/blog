import React, { Component } from "react"

export default class APP extends Component {
    constructor(props) {
        super(props)            // 声明constructor时必须调用super方法
        console.log(this.props) // 可以正常访问this.props，因为传入的props
    }

    render() {
        return (
            <div>
                <Sub title="今年过节不收礼" />
            </div>
        )
    }
}

class MyClass extends React.component {
    constructor(props) {
        super(props) // 声明constructor时必须调用super方法
        console.log(this.props) // 可以正常访问this.props，因为传入的props
    }
}
