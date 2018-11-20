import React, { Component } from 'react';
import { getArtist } from '../../services/musicSearch';
import Works from '../works/Works';
import PropTypes from 'prop-types';


export default class ArtistDetail extends Component {
  static propTypes = {
    match: PropTypes.object.isRequired
  };

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
    const { name, description, works } = this.state.artist;
    if(works === undefined) {
      return null;
    }

    return (
      <div>
        <h3>{name}</h3>
        <h2>{description}</h2>
        <Works works={works} name={name} />
      </div>
    );
  }
}
