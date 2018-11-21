import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';


export default function App() {
  return (
    <Router>
      <div>
        <header>&iexcl;hola, mundo!</header>
        <Switch>
          <Route component={ROUTES.SEARCH.Component} path={ROUTES.SEARCH.path} />
          <Route component={ROUTES.ARTIST.Component} path={ROUTES.ARTIST.path} />
          <Route component={ROUTES.LYRICS.Component} path={ROUTES.LYRICS.path} />
          <Redirect to={ROUTES.SEARCH.path} />
        </Switch>
      </div>
    </Router>
  );
}
