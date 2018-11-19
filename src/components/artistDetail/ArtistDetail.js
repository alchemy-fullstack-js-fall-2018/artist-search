import React, { Component, Fragment } from 'react';
import { getArtist } from '../../services/api';
import PropTypes from 'prop-types';
import Song from '../song/Song';

export default class Artist extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
    };

    state = {
        artist: null
    };

    fetchArtist = () => {
        console.log('match.params.id', this.props.match.params.id);
        getArtist(this.props.match.params.id)
            .then(artist => this.setState({ artist }));
    };

    componentDidMount() {
        console.log('!!!!')
        this.fetchArtist();
    }

    render() {
        if(!this.state.artist) return null;
        console.log('state.artist', this.state.artist);
        const { name, works } = this.state.artist;

        const songs = works.map(song => {
            return (
                <Song key={song.id}
                    title={song.title} />
            );
        });

        return (
            <Fragment>
                <h2>Artist Detail for {name}</h2>
                {songs}
            </Fragment>
        );
    }
}
