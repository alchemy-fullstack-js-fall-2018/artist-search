import React, { Component } from 'react';
import { getLyrics } from '../../services/musicSearch';
import styles from './ArtistLyrics.css';


export default class Lyrics extends Component {
  state = {
    lyrics: '',
    artist: '',
    title: ''
  }

  componentDidMount() {
    const artist = this.props.location.pathname.slice(1).split('/')[1];
    const title = this.props.location.pathname.slice(1).split('/')[2];

      this.getLyrics( artist, title ).then(result => {
      this.setState({ lyrics: result.lyrics, artist, title })
    });
  }

  render() {
    const { title, artist, lyrics } = this.state();
    return (
      <div className={styles.lyric}>
        <h3>{artist}</h3>
        <h4>{title}</h4>
        <p>{lyrics}</p>
      </div>
    );
  }
}
