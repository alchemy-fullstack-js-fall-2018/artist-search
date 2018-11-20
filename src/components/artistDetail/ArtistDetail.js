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
        getArtist(this.props.match.params.id)
            .then(artist => this.setState({ artist }));
    };

    componentDidMount() {
        this.fetchArtist();
    }

    render() {
        if(!this.state.artist) return null;
        const { name, works } = this.state.artist;
        
        const songs = works.map(song => {
            return (
                <Song key={song.id}
                    artistName={name} 
                    songName={song.title} />
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
