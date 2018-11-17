import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Fragment>
      <h1>I AM APP</h1>
      <Router>
        <Switch>
          {/* <Route path={ROUTES.EPISODES.path} component={ROUTES.EPISODES.Component} /> */}
        </Switch>
      </Router>
    </Fragment>
  );
}