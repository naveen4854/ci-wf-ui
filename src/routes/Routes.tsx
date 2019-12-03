import React from "react"
import { Route, Router, Switch } from 'react-router-dom';
import history from './History';
import Dashboard from 'src/dashboard/dashboard';
import { Header, Footer } from 'src/shared-components';
import { SyncfusionPertchart, SvgPertchart, ProgressTracker } from 'src/project/pert';

const Routes = () => {
  return (
    <Router history={history}>
      <Route component={Header} />
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/progress-tracker" component={ProgressTracker} />
        <Route exact path="/syncfusion-pertcart" component={SyncfusionPertchart} />
        <Route exact path="/SvgPertchart" component={SvgPertchart} />
        <Route exact path="/" component={Dashboard} />
      </Switch>
      <Route component={Footer} />
    </Router>
  )
}

export default Routes