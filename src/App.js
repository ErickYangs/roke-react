import React, { Component } from 'react'
import './App.css'
import './styles/common.scss'
// import {Button} from 'antd'
import { Route, BrowserRouter as Router } from 'react-router-dom'

// component
import HomeView from './view/home/Home'
import AccountWrap from './view/account/AccountWrap'
import LoginWrap from './components/module/Login/Login'
import RegisterWrap from './components/module/Register/Register'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: true
    }
  }
  render() {
    return (
      <Router>
        <Route path="/" exact component={HomeView}></Route>
        <AccountWrap>
          <Route path="/login" exact component={LoginWrap} />
          <Route path="/register" exact component={RegisterWrap} />
        </AccountWrap>
      </Router>
    )
  }

  switchRoute() {
    return this.state.isLogin ? (
      <Route path="/" exact component={HomeView}></Route>
    ) : (
      <AccountWrap>
        <Route path="/login" exact component={LoginWrap} />
        <Route path="/register" exact component={RegisterWrap} />
      </AccountWrap>
    )
  }
}
