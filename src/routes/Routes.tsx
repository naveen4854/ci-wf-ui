import React from "react"
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { App, Header, Footer, ProgressTracker, SyncfusionPertchart } from "../components/index";
import PertSample from "../components/pert-sample/pert-sample";
import SvgPert from "../components/SvgPert";
import PertSample2 from "../components/pert-sample/pertsample2";

const Routes = () => {
  return (
    <Router>
      <Route component={Header} />
      <Switch>
        <Route exact path="/dashboard" component={App} />
        <Route exact path="/progress-tracker" component={ProgressTracker} />
        <Route exact path="/syncfusion-pertcart" component={SyncfusionPertchart} />
        <Route exact path="/p" component={PertSample} />SvgPert
        <Route exact path="/SvgPert" component={SvgPert} />
        <Route exact path="/" component={PertSample2} />
      </Switch>
      <Route component={Footer} />
    </Router>
  )
}

export default Routes