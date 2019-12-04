import React, { Component } from 'react'
import CssWrap from './index.module.scss'
import MenuConfig from '../../config/menuConfig'

import { Menu, Icon } from 'antd'
const { SubMenu } = Menu

export class NavLeft extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuTreeNode: ''
    }
  }
  UNSAFE_componentWillMount() {
    const menuTreeNode = this.renderMenu(MenuConfig)
    this.setState({
      menuTreeNode
    })
  }
  //<Icon type="wallet" />
  renderMenu = data => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu
            title={
              <span>
                <Icon type={item.type} />
                <span>{item.title}</span>
              </span>
            }
            key={item.key}
          >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return (
        <Menu.Item title={item.title} key={item.key}>
          {item.title}
        </Menu.Item>
      )
    })
  }
  render() {
    return (
      <div className={CssWrap.nav_left_wrap}>
        <div className={CssWrap.home_logo}>
          <h1>Moc Ms</h1>
        </div>
        <Menu theme="dark">{this.state.menuTreeNode}</Menu>
      </div>
    )
  }
}

export default NavLeft
