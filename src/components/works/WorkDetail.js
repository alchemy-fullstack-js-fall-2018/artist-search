import React, { Component } from 'react';
import { getLyrics } from '../../services/fetch';

export default class WorkDetail extends Component {
  state = {
    lyrics: ''
  };

  fetchLyrics = () => {
    const { artist, title } = this.props.match.params;
    getLyrics(artist, title)
      .then(lyrics => this.setState({ lyrics }));
  };

  render() {
    const { artist, title } = this.props.match.params;
    return (
      <div>
        <h3>{title}</h3>
        <h4>{artist}</h4>
        <p>{this.lyrics}</p>
      </div>
    );
  }
}
