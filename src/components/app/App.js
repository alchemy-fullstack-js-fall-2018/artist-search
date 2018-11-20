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
        <Redirect to={ROUTES.SEARCH.path} />
      </Switch>
    </Router>
  );
}
