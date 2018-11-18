import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
  return (
    <Router>
      <div>
        <h1>Recording Artist Search Application</h1>
        <Switch>
          <Route component={ROUTES.ARTIST_SEARCH.Component} path={ROUTES.ARTIST_SEARCH.path} />
          <Route component={ROUTES.ARTIST.Component} path={ROUTES.ARTIST.path} />
          <Redirect to={ROUTES.ARTIST_SEARCH.path} />
        </Switch>
      </div>
    </Router>
  );
}
