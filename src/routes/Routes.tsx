import React from "react"
import { Route, Router, Switch } from 'react-router-dom';
import history from './History';
import { App, Header, Footer, ProgressTracker, SyncfusionPertchart, SvgPertchart, StageDetails } from "../components/index";
import PertSample from "../components/pert-sample/pert-sample";
import PertSample2 from "../components/pert-sample/pertsample2";

const Routes = () => {
  return (
    <Router history={history}>
      <Route component={Header} />
      <Switch>
        <Route exact path="/dashboard" component={App} />
        <Route exact path="/progress-tracker" component={ProgressTracker} />
        <Route exact path="/syncfusion-pertcart" component={SyncfusionPertchart} />
        <Route exact path="/p" component={PertSample} />
        <Route exact path="/SvgPertchart" component={SvgPertchart} />
        <Route exact path="/stage-details" component={StageDetails} />
        <Route exact path="/" component={PertSample2} />
      </Switch>
      <Route component={Footer} />
    </Router>
  )
}

export default Routes