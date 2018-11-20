import React, { Component } from 'react';
//import Works from '../works/Works';
import WorkListItem from '../works/WorkListItem'
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
    const { name, works = [] } = this.state.artist;
    return (
      <div>
        <h2>{name}</h2>
        <p>{works.map(work => <WorkListItem key={work.id} artist={name} title={work.title} />)}</p>
      </div>
    );
  }
}
