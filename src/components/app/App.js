import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function App() {
    return (
        <Fragment>
            <Router>
                <Switch>
                    <Route path={ROUTES.ARTIST.path} component={ROUTES.ARTIST.Component} />
                    <Route path={ROUTES.SONG.path} component={ROUTES.SONG.Component} />
                    <Route path={ROUTES.SEARCH.path} component={ROUTES.SEARCH.Component} />
                </Switch>
            </Router>
        </Fragment>
    );
}
