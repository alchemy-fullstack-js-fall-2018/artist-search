import React, { Component } from 'react';
import { getLyrics } from '../../services/musicSearch';
import styles from './ArtistLyrics.css';


export default class ArtistLyrics extends Component {
  state = {
    lyrics: '',
    artist: '',
    title: ''
  }

  componentDidMount() {
    console.log(this.props.match)
    const artist = this.props.match.params.artistName;
    const title = this.props.match.params.songName;
    console.log(title)

      getLyrics( artist, title ).then(result => {
      this.setState({ lyrics: result.lyrics, artist, title })
    });
  }

  render() {
    const { title, artist, lyrics } = this.state;
    return (
      <div className={styles.lyric}>
        <h3>{artist}</h3>
        <h4>{title}</h4>
        <p>{lyrics}</p>
      </div>
    );
  }
}
