import React, { Component } from 'react'
import FooterCss from './Footer.module.scss'

export class FooterWrap extends Component {
    render() {
        return (
            <div className={FooterCss.footer_wrap}>
                Copyright © 2019 The Ontology Team
            </div>
        )
    }
}

export default FooterWrap
