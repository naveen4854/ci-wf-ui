import React from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { App, Header, Footer, ProgressTracker } from "../components/index";
import PertSample from "../components/pert-sample/pert-sample";

const Routes = () => {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route exact path="/" component={PertSample} />
        <Route exact path="/dashboard" component={App} />
        <Route exact path="/progress-tracker" component={ProgressTracker} />
        <Route exact path="/p" component={PertSample} />
      </Switch>
      <Route component={Footer} />
    </Router>
  )
}

export default Routes