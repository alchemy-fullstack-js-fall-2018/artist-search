import React, { Component, Fragment } from 'react';
import { getArtists } from '../../services/api';

export default class App extends Component {
    state = {
        results: [],
        artistName: ''
    };

    onChange = ({ target }) => {
        console.log('name', target.name, 'value', target.value);
        this.setState({ [target.name]: target.value });
        getArtists(target.value)
            .then((results) => {
                this.setState({ results });
                console.log({ results });
            });
    };

    render() {
        const { artistName } = this.state;
        return (
            <Fragment>
                <div>
                    <form>
                        <label> Search for Artists By Name: 
                            <input type="text" name="artistName" value={artistName} onChange={this.onChange} />
                        </label>
                    </form>
                </div>
            </Fragment>
        );
    } 
}


