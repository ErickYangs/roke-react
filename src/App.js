import React from 'react'
import './App.css'
import './styles/common.scss'
// import {Button} from 'antd'
import { HashRouter, Route } from 'react-router-dom'

// component
import HomeView from './view/home/Home'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route path="/" component={HomeView}></Route>
      </div>
    </HashRouter>
  )
}

export default App
