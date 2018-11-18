import React, { Component } from 'react';
import Works from '../works/Works';
import { getArtist } from '../../services/fetch';

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
    const { id, name, works = [] } = this.state.artist;
    return (
      <div>
        <h2>{name}</h2>
        <Works works={works} />
      </div>
    );
  }
}
