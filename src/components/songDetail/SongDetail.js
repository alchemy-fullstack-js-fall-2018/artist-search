import React, { Component, Fragment } from 'react';
import { getSong } from '../../services/api';
import PropTypes from 'prop-types';

export default class SongDetail extends Component {
    static propTypes = {
        match: PropTypes.object.isRequired
    };

    state = {
        songName: '',
        lyrics: ''
    };

    fetchSong = () => {
        getSong(
            this.props.match.params.artistName,
            this.props.match.params.songName
        ).then(song => this.setState({ lyrics: song.lyrics, songName: this.props.match.params.songName }));
    };

    componentDidMount() {
        this.fetchSong();
    }

    render() {
        const { lyrics, songName } = this.state;
        if(!songName || !lyrics) return null;

        return (
            <Fragment>
                <h2>Song Lyrics for {songName}</h2>
                <p>{lyrics}</p>
            </Fragment>
        );
    }
}
