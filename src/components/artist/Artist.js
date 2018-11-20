import React, { Component } from 'react';
import Songs from '../songs/Songs';
import { getArtist } from '../../services/musicSearch';

export default class Artist extends Component {
  state = {
    artist: {}
  };

  fetchArtist = () => {
    const { id } = this.props.match.params;
    getArtist(id)
      .then(artist => this.setState({ artist }));
  };

  componentDidMount() {
    this.fetchArtist();
  }

  render() {
    const { name, works = [] } = this.state.artist;

    return (
      <div>
        <h2>{name}</h2>
        <Songs
          works={works}
          artist={name}
        />
      </div>
    );
  }
}
