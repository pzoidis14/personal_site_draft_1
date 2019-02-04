import React from 'react'
import {withRouter, Route, Switch} from 'react-router-dom'
import {LandingHome} from './components'
import Routes from './routes'

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingHome} />
      <Routes />
    </Switch>
  )
}

export default withRouter(App)
