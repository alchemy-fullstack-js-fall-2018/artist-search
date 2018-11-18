import React, { Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Artists from '../artists/Artists';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Fragment>
      <h1>Recording Artist Search Application</h1>
      <Artists />
      <Router>
        <Switch>
          {/* <Route path={ROUTES.EPISODES.path} component={ROUTES.EPISODES.Component} /> */}
        </Switch>
      </Router>
    </Fragment>
  );
}