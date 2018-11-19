import React, { Component, Fragment } from 'react';
import Artists from '../artists/Artists';
export default class App extends Component {
    state = {
        results: [],
        artistName: ''
    };

    onChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };

    render() {
        const { artistName } = this.state;
        return (
            <Fragment>
                <h2>Artist Search</h2>
                <div>
                    <form>
                        <label> Search for Artists By Name: 
                            <input type="text" name="artistName" value={artistName} onChange={this.onChange} />
                        </label>
                    </form>
                    { artistName && <Artists artistName={artistName} /> }
                </div>
            </Fragment>
        );
    } 
}
