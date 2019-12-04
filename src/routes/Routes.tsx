import React from "react"
import { Route, Router, Switch, useRouteMatch, Link } from 'react-router-dom';
import history from './History';
import Dashboard from 'src/dashboard/dashboard';
import { Header, Footer } from 'src/shared-components';
import { SyncfusionPertchart, SvgPertchart, ProgressTracker } from 'src/project-details/pert';

import { UserMangementHome } from 'src/user-management';

const Routes = () => {
  return (
    <Router history={history}>
      <Route component={Header} />
      <div style={{ marginTop: 50, paddingTop: 20 }}>
        <Switch>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/progress-tracker" component={ProgressTracker} />
          <Route exact path="/syncfusion-pertcart" component={SyncfusionPertchart} />
          <Route exact path="/SvgPertchart" component={SvgPertchart} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/user-management" component={Dashboard} >
            <UserManagementRoutes />
          </Route>
        </Switch>
      </div>
      <Route component={Footer} />
    </Router>
  )
}

const UserManagementRoutes = () => {
  let routeMatch: any = useRouteMatch(); // optionial parameter ""/users""
  console.log(routeMatch, 'test')
  const { path, url } = routeMatch
  return (
    <Switch>
      <Route exact path={path}>
        <UserMangementHome />
      </Route>
      <Route path={`${path}/users`}>
        <UserMangementHome />
      </Route>
    </Switch>
  )
}

export default Routes