import React, { Component } from 'react'
import HeaderCss from './Header.module.scss'
import Utils from '../../utils/utils'
// import FetchJsonp from 'fetch-jsonp'
// import { getWeather } from '../../api/movies'
import JSONP from 'jsonp'

import { Row, Col } from 'antd'

export class HeaderWrap extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: 'EricYangc',
      systermTime: ''
    }
  }
  componentDidMount() {
    setInterval(() => {
      const systermTime = Utils.formateDate(new Date().getTime())
      this.setState({
        systermTime
      })
    }, 1000)
    // this.getWeatherData()
  }
  // new Date.getTime()
  getWeatherData = () => {
    JSONP(
      'http://apis.juhe.cn/simpleWeather/query?city=%E4%B8%8A%E6%B5%B7&key=6f4a99e24ef5f50db6de04124cd80a29',
      { param: 'callback' },
      function(res) {
        console.log(res)
      }
    )

    // getWeather().then(res => console.log(res))
  }
  render() {
    return (
      <div className={HeaderCss.header_wrap}>
        <Row className={HeaderCss.header_top}>
          <Col span={24} className={HeaderCss.top_wrap}>
            <span className={HeaderCss.welcome}>
              Welcome, {this.state.username}
            </span>
            <a href="http://www.baidu.com">Sign up</a>
          </Col>
        </Row>
        <Row className={HeaderCss.breadcrumb}>
          <Col span={4} className={HeaderCss.breadItem}>Home</Col>
          <Col span={20} className={HeaderCss.weather}>
            <span className={HeaderCss.date_span}>
              {this.state.systermTime}
            </span>
            <span>warm</span>
          </Col>
        </Row>
      </div>
    )
  }
}

export default HeaderWrap
