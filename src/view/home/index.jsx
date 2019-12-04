import React, { Component } from 'react'
import HomeCss from './index.module.scss'
export class HomeIndex extends Component {
    render() {
        return (
            <div className={HomeCss.home_wrap}>
                Have fun. Stay cool. Change the world!
            </div>
        )
    }
}

export default HomeIndex
