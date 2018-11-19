import React, { Component, Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
    return (
        <Fragment>
            <h1>Artist Search</h1>

            <Router>
                <Switch>
                    <Route path={ROUTES.SEARCH.path} component={ROUTES.SEARCH.Component} />
                    <Redirect path={ROUTES.SEARCH.path} />
                </Switch>
            </Router>
        </Fragment>
    );
}
