import React, { Component } from 'react'
import HomeCss from './index.module.scss'
export class HomeIndex extends Component {
    render() {
        return (
            <div className={HomeCss.home_wrap}>
                {this.props.children}
            </div>
        )
    }
}

export default HomeIndex
