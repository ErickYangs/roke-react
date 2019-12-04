import React, { Component } from 'react'
import './App.css'
import './styles/common.scss'
// import { Route, BrowserRouter as Router } from 'react-router-dom'

export default class App extends Component {
  // constructor(props) {
  //   super(props)
  // }
  render() {
    return (
      <div id="App">
        {/* <AdminWrap></AdminWrap> */}
        {this.props.children}
      </div>
    )
  }
}
