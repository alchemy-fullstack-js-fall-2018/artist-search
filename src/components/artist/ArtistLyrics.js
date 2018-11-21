import React, { Component } from 'react';
import { getLyrics } from '../../services/musicSearch';
import styles from './ArtistLyrics.css';


export default class ArtistLyrics extends Component {
  state = {
    lyrics: '',
    artist: '',
    title: ''
  }

  fetchLyrics = () => {
    const artist = this.props.match.params.artistName;
    const title = this.props.match.params.songName;
    getLyrics( artist, title ).then(result => {
      this.setState({ lyrics: result.lyrics, artist, title })
    });
  }


  componentDidMount() {
    // const artist = this.props.match.params.artistName;
    // const title = this.props.match.params.songName;

    //   getLyrics( artist, title ).then(result => {
    //   this.setState({ lyrics: result.lyrics, artist, title })
    // });
    this.fetchLyrics();
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
