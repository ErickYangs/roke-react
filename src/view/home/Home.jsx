import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import homeClass from './home.module.scss'
import IndexWrap from '../../components/module/Index/IndexWrap'
import MovieWrap from '../../components/module/Movie/Movie'
import AboutWrap from '../../components/module/About/About'
import { Button } from 'antd'

// import * as Http from '../../api/movies'
import fetchJsonp from 'fetch-jsonp'

import { Layout, Menu } from 'antd'
const { Header, Content, Footer } = Layout

export class HomeView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentKey: ''
    }
  }
  UNSAFE_componentWillMount() {
    console.log(this.props)
    let str = 'home'
    let path = this.props.location.pathname
    switch (path) {
      case '/':
        str = 'home'
        break
      case '/movie':
        str = 'movie'
        break
      case '/about':
        str = 'about'
        break
      default:
        str = 'home'
        break
    }
    this.setState({
      currentKey: str
    })
  }
  componentDidMount() {
    // Http.getMovieList()
    this.getMovieList()
  }

  render() {
    return (
      <div className={homeClass.home_layout}>
        <Layout className={homeClass.layout}>
          <Header>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[this.state.currentKey]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to="/">Home</Link>
              </Menu.Item>
              <Menu.Item key="movie">
                <Link to="/movie">Add-ons</Link>
              </Menu.Item>
              <Menu.Item key="about">
                <Link to="/about">Apps</Link>
              </Menu.Item>
            </Menu>
            <Button
              type="primary"
              onClick={() => {
                this.toLogin()
              }}
            >
              Login
            </Button>
          </Header>
          <Content style={{ padding: '0 50px' }}>
            <div className="content_layout">
              <Route exact path="/" component={IndexWrap}></Route>
              <Route path="/movie" component={MovieWrap}></Route>
              <Route path="/about" component={AboutWrap}></Route>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Ant Design ©2018 Created by Ant UED
          </Footer>
        </Layout>
      </div>
    )
  }

  getMovieList() {
    fetchJsonp(
      'https://video.eastday.com/json/index_topr6.json?t=1575097985088'
    )
      .then(response => response.json())
      .then(res => {
        console.log(res)
      })
  }

  toLogin() {
    console.log(this.props)
    this.props.history.push('/login')
  }
}

export default HomeView
