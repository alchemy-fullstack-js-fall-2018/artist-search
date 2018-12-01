import React, { Fragment, Component } from 'react';
import { getLyrics } from '../../services/artistsAPI';

export default class Lyrics extends Component {
  state = {
    lyrics: ''
  };

  fetchLyrics = () => {
    const { artist, title } = this.props.match.params;
    getLyrics(artist, title)
      .then(lyrics => {
       
        this.setState({ lyrics });
      });
  };
  componentDidMount() {
    this.fetchLyrics();
  }

  render() {
    console.log(this.state.lyrics);
    return (
      <Fragment>
        <h1>{ this.state.lyrics }</h1>
      </Fragment>
    );
  }
}
