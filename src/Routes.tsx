import React from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import App from "./App";
import Header from './Header/Header'

const Routes = () => {
  return (
    <div>
      <Router>
        <Route component={Header} />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/dashboard" component={App} />
        </Switch>
        {/* <Route component={Footer}/> */}
      </Router>
    </div>
  )
}

export default Routes