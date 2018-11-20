import React, { Component, Fragment } from 'react';
import { getLyrics } from '../../services/musicSearch';

export default class Lyrics extends Component {

  state = {
    lyrics: '',
    artist: '',
    title: ''
  };

  componentDidMount() {
    const artist = this.props.location.pathname.slice(1).split('/')[1];
    const title = this.props.location.pathname.slice(1).split('/')[2];

    getLyrics(artist, title)
      .then(result => {
        this.setState({ lyrics: result.lyrics, artist, title, });
      });
  }

  render() {
    const { artist, title, lyrics } = this.state;

    return (
      <Fragment>
        <h3>{artist}</h3>
        <h4>{title}</h4>
        <p>{lyrics}</p>
      </Fragment>
    );
  }
}