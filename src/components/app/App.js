import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SEARCH.path} component={ROUTES.SEARCH.Component} />
        <Route component={ROUTES.ARTIST.Component} path={ROUTES.ARTIST.path} />
        <Route component={ROUTES.LYRICS.Component} path={ROUTES.LYRICS.path} />
        <Redirect to={ROUTES.SEARCH.path} />
      </Switch>
    </Router>
  );
}
