import React, { Component, Fragment } from 'react';
import { getSong } from '../../services/api';
import PropTypes from 'prop-types';

export default class SongDetail extends Component {
    static propTypes = {
        artistName: PropTypes.string.isRequired,
        songName: PropTypes.string.isRequired,
    };

    state = {
        song: null
    };

    fetchSong = () => {
        const { artistName, songName } = this.props;
        getSong(artistName, songName)
            .then(song => this.setState({ song }));
    };

    componentDidMount() {
        this.fetchSong();
    }

    render() {
        if(!this.state.song) return null;
        const { lyrics } = this.state.song;
        const { songName } = this.props;

        return (
            <Fragment>
                <h2>Song Detail for {songName}</h2>
                <p>{lyrics}</p>
            </Fragment>
        );
    }
}
