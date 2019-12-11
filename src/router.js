import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'
import App from './App'

import AdminWrap from './view/admin/Admin'

import LoginWrap from './components/login'
import RegisterWrap from './components/register'
import ButtonWrap from './components/ui/button'
import ErrorPage from './components/nomatch'
// Form
import LoginForm from './components/form/login'
// table
import BaseTable from './components/table/BaseTable'
// Edit
import WangEdit from './components/fullpage/detail'
// UserRights
import UserRights from './components/rights'

import HomeWrap from './components/home'

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Switch>
            <Route path="/login" exact component={LoginWrap}></Route>
            <Route path="/register" exact component={RegisterWrap}></Route>
            <Route
              path="/"
              render={() => (
                <AdminWrap>
                  <Switch>
                    <Route exact path="/" component={HomeWrap}></Route>
                    <Route path="/home" component={HomeWrap}></Route>
                    <Route path="/ui/buttons" component={ButtonWrap}></Route>
                    <Route path="/from/loginform" component={LoginForm}></Route>
                    <Route
                      path="/table/tablelist"
                      component={BaseTable}
                    ></Route>
                    <Route path="/fullpage/detail" component={WangEdit}></Route>
                    <Route path="/rights" component={UserRights}></Route>
                    <Route path="/notFound" component={ErrorPage}></Route>
                    <Redirect to="/notFound" />
                  </Switch>
                </AdminWrap>
              )}
            ></Route>
          </Switch>
        </App>
      </Router>
    )
  }
}
