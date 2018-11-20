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

  componentDidMount() {
    this.fetchLyrics();
  }

  render() {
    const { artist, title } = this.props.match.params;
    return (
      <div>
        <h2>{artist}</h2>
        <h3>{title}</h3>
        <pre>{this.state.lyrics}</pre>
      </div>
    );
  }
}
