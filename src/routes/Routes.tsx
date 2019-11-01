import React from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { App, Header, Footer } from "../components/index";

const Routes = () => {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/dashboard" component={App} />
      </Switch>
      <Route component={Footer} />
    </Router>
  )
}

export default Routes