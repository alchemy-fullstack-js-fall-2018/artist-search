import React, { Component } from 'react';
import { getArtists } from '../../services/api';
import PropTypes from 'prop-types';
import Artist from '../artist/Artist';

export default class Artists extends Component {
    static propTypes = {
        artistName: PropTypes.string
    };

    state = {
        artists: []
    };

    updateResults = () => {
        const { artistName } = this.props;
        console.log('artistName update', artistName);
        getArtists(artistName)
            .then(results => {
                this.setState({ artists: results });
                console.log('results', results);
            });
    };

    componentDidMount() {
        this.updateResults();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.artistName !== this.props.artistName) {
            this.updateResults();
        }
    }

    render() {
        const { artists } = this.state;
        const artistsComponents = artists.map(artist => {
            return <Artist key={artist.id} artist={artist} />;
        });

        return (
            <div>
                {artistsComponents}
            </div>
        );
    }
}
