import React, { Component, Fragment } from 'react';
import { getLyrics } from '../../services/lyricSearch';

export default class Song extends Component {

  state = {
    lyrics: '',
    artist: '',
    song: ''
  };

  componentDidMount() {
    const artist = this.props.location.pathname.slice(1).split('/')[1];
    const song = this.props.location.pathname.slice(1).split('/')[2];

    getLyrics(artist, song)
      .then(result => {
        this.setState({ lyrics: result.lyrics, artist, song, });
      });
  }

  render() {
    const { artist, song, lyrics } = this.state;

    return (
      <Fragment>
        <h3>{artist}</h3>
        <h4>{song}</h4>
        <p>{lyrics}</p>
      </Fragment>
    );
  }
}