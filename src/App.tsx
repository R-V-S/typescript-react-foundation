import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store'
import { Intro } from './interfaces/screens/Intro'
import { Login } from './interfaces/screens/Login'

ReactDOM.render(
  <Provider store={store}>
    App!
    <Router>
      <Switch>
        <Route exact path='/' render={() => <Intro text='hello world!' />} />
        <Route exact path='/login' component={Login} />
      </Switch>
    </Router>
  </Provider>,
  document.querySelector('App'),
)
