import React, { Component } from 'react'
import { Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import { Home } from '../containers/authen/home'
import  Login  from '../containers/guest/login'
import Change from './guest/change_password'
import Find from './guest/forgot_password'
import { browserHistory } from '../utils/history'
import   PrivateRoute   from './private-route'
import { store, persistor } from '../store/custom-store'

export default class Root extends Component {

  componentDidMount() {

  }
  render() {
    return (
      <Provider store={persistor}>
        <Router history={browserHistory}>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/changepassword" component={Change}/>
            <Route path="/findpassword" component={Find}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}
