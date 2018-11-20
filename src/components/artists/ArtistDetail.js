import React, { Component } from 'react';
import { getArtist } from '../../services/musicSearch';

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
    const { id, name, description } = this.state.artist;
    return (
      <div>
        <h3>{name}</h3>
        <h2>{description}</h2>
        <h2>work id:{id}</h2>
      </div>
    );
  }
}
