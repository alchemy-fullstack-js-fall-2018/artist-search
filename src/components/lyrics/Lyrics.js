
import React, { Component } from 'react';
import { getLyrics } from '../../services/musicSearch';

export default class Lyrics extends Component {
  state = {
    artist: this.props.artist,
    song: this.props.song,
    lyrics: ''
  };

  fetchLyrics = () => {
    getLyrics(this.props.match.params.artist, this.props.match.params.song)
      .then(({ lyrics }) => this.setState({ lyrics }));
  };

  componentDidMount = () => {
    this.fetchLyrics();
  };

  render() {
    const { lyrics } = this.state;

    return (
      <p>{lyrics || 'Loading...'}</p>
    );
  }
}
