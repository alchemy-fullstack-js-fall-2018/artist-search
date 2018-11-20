import React, { Component } from 'react';
import { getArtist } from '../../services/musicSearch';
// import styles from './ArtistDetail.css';
import Songs from '../songs/Songs';

export default class ArtistDetail extends Component {
  state = {
    artist: {}
  };

  fetchArtist = () => {
    getArtist(this.props.match.params.id)
      .then(artist => this.setState({ artist }));
  };

  componentDidMount() {
    this.fetchArtist();
  }

  render() {
    const { id, name, songs = [] } = this.state.artist;

    return (
      // <div className={styles.artist}>
      <div>
        <h3>{name}</h3>
        <h4>BAND ID: {id}</h4>
        <Songs artist={name} songs={songs} />
      </div>
    );
  }
}
