import React, { Component } from 'react'
// import IndexCss from './Admin.module.scss'

import { Row, Col } from 'antd'
import Header from '../../components/header/HeaderWrap'
import Footer from '../../components/footer/FooterWrap'
import NavLeft from '../../components/navLeft'

export class AdminWrap extends Component {
  render() {
    return (
      <Row className="container">
        <Col span={3} className="nav_left">
          <NavLeft></NavLeft>
        </Col>
        <Col span={21} className="main">
          <Header></Header>
          <Row className="content">Content</Row>
          <Footer></Footer>
        </Col>
      </Row>
    )
  }
}

export default AdminWrap
