import React, { Component } from 'react'
import AccCss from './account.module.scss'

// import LoginWrap from '../../components/module/Login/Login'
// import RegisterWrap from '../../components/module/Register/Register'

export class AccountWrap extends Component {
  render() {
    return (
      <div className={AccCss.account_wrap}>
        <div className={AccCss.main_title}>用户账户管理页面</div>
        <div className="user_content">
          {/* <LoginWrap></LoginWrap> */}
          {/* <RegisterWrap></RegisterWrap> */}
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default AccountWrap
