import React, { Component, Fragment } from 'react';

import { getLyrics } from '../../services/lyricSearch';


export default class Lyrics extends Component {

  state = {
    lyrics: ''
  };

  fetchLyrics = () => {
    const artist = this.props.location.pathname.slice(1).split('/')[1];
    const title = this.props.location.pathname.slice(1).split('/')[2];
    getLyrics(artist, title)
      .then(({ lyrics }) => this.setState({ lyrics }));
  };

  componentDidMount() {
    this.fetchLyrics();
  }

  render() {
    const { lyrics } = this.state;
    return (
      <div>
        <h3>Lyrics:</h3>
        <p>{lyrics}</p>
      </div>
    );
  }

}
