import React, { Component } from 'react';
import { getArtist } from '../../services/musicSearch';
import Works from '../works/Works';

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
    const { id, name, works } = this.state.artist;
    if(works === undefined) {
      return null;
    }

    return (
      <div>
        <h2>{name}</h2>
        <h4>{id}</h4>
        <Works works={works} />
      </div>
    );
  }
}
