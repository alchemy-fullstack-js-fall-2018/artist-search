import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import styles from './App.css';

export default function App() {

  return (
    <Router>
      <main className={styles.main}>
        <Header />
        <Switch>
          <Route component={ROUTES.ABOUT.Component} path={ROUTES.ABOUT.path} />
          <Route component={ROUTES.SEARCH.Component} path={ROUTES.SEARCH.path} />
          <Route component={ROUTES.ARTIST.Component} path={ROUTES.ARTIST.path} />
          <Route component={ROUTES.LYRICS.Component} path={ROUTES.LYRICS.path} />
          <Redirect to={ROUTES.SEARCH.path} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
}
