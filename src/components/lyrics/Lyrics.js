
import React, { Component } from 'react';
import { getLyrics } from '../../services/musicSearch';

export default class Lyrics extends Component {
  state = {
    artist: this.props.artist,
    song: this.props.song,
    lyrics: ''
  }

  fetchLyrics = () => {
    console.log(this.props.match);
    getLyrics(this.props.match.params.artist, this.props.match.params.song)
      .then(({ lyrics }) => this.setState({ lyrics }));
  };

  componentDidMount = () => {
    this.fetchLyrics();
  }

  render() {
    const { lyrics } = this.state;
    console.log(lyrics);

    return (
      <p>{lyrics}</p>
    );
  }

}
