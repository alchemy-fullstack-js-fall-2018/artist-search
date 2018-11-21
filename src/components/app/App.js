import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
// import Artist from '../artist/ArtistDetail';
// import Lyrics from '../artist/ArtistLyrics';

export default function App() {
  return (
    <Router>
      <div>
        <h1>Artist Info</h1>
        <Switch>
          <Route component={ROUTES.SEARCH.Component} path={ROUTES.SEARCH.path} />
          <Route component={ROUTES.LYRICS.Component} path={ROUTES.LYRICS.path} />
          <Route component={ROUTES.ARTIST.Component} path={ROUTES.ARTIST.path} />
          <Route render={ROUTES.LANDING.Component} path={ROUTES.LANDING.path} />
          <Redirect to={ROUTES.SEARCH.path} />
        </Switch>
      </div>
    </Router>
  );
}
