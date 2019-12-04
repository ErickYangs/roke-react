import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import App from './App'

import AdminWrap from './view/admin/Admin'

import LoginWrap from './components/login'
import RegisterWrap from './components/register'
import ButtonWrap from './components/ui/button'
import ErrorPage from './components/nomatch'
// Form
import LoginForm from './components/form/login'

export default class IRouter extends React.Component {
  render() {
    return (
      <Router>
        <App>
          <Route path="/login" exact component={LoginWrap}></Route>
          <Route
            path="/admin"
            render={() => (
              <AdminWrap>
                <Switch>
                  <Route
                    path="/admin/ui/buttons"
                    component={ButtonWrap}
                  ></Route>
                  <Route
                    path="/admin/from/loginform"
                    component={LoginForm}
                  ></Route>
                  <Route component={ErrorPage}></Route>
                </Switch>
              </AdminWrap>
            )}
          ></Route>
          <Route path="/register" exact component={RegisterWrap}></Route>
        </App>
      </Router>
    )
  }
}
