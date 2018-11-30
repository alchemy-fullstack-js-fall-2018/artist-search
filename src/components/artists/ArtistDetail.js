import React, { Component } from 'react';
import { getArtist } from '../../services/artistsAPI';
import Works from '../works/Works';

export default class ArtistDetail extends Component {
  state = {
    artist: {}
  };

  fetchArtist = () => {
    getArtist(this.props.match.params.id)
      .then(artist => {
        console.log(artist);
        this.setState({ artist })
      });
  };
  componentDidMount() {
    console.log('hellllooo');
    this.fetchArtist();
  }

  render() {
    const { id, name, works } = this.state.artist;
    if(works === undefined) {
      return null;
    }

    return (
      <div>
        <h1>HELLOOOOO</h1>
        <h3>{name}</h3>
        <h4>{id}</h4>
        <Works name={name} works={works} />
      </div>
    );
  }
}
