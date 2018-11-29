import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (

    <Router>
      <div>
        <h1>Artist Search</h1>
        <Switch>
          <Route component={ROUTES.ARTISTS.Component} path={ROUTES.ARTISTS.path} />
        </Switch>
      </div>
    </Router>
  );
}
