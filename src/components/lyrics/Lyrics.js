import React, { Component } from 'react';

import { getLyrics } from '../../services/lyricSearch';

import styles from './Lyrics.css';

export default class Lyrics extends Component {

  state = {
    lyrics: ''
  };

  fetchLyrics = () => {
    const [, artist, title] = this.props.location.pathname.slice(1).split('/');
    getLyrics(artist, title)
      .then(({ lyrics }) => this.setState({ lyrics }));
  };

  componentDidMount() {
    this.fetchLyrics();
  }

  render() {
    const { lyrics } = this.state;
    const [, artist, title] = this.props.location.pathname.slice(1).split('/');
    return (
      <div>
        <h3>{artist} - {title}</h3>
        <pre className={styles.lyrics}>{lyrics}</pre>
      </div>
    );
  }

}
