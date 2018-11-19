import React, { Component, Fragment } from 'react';

import { getArtist } from '../../services/musicSearch';


import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default class Artist extends Component {
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

    const Work = ({ title }) => {
      return (
        <Fragment>
          <h4><em>{title}</em></h4>
        </Fragment>
      );
    };


    return (
      <div>
        <h2>{name}</h2>

        <h3>Songs:</h3>
        {works.map(work =>
          <Work key={work.id} title={work.title} />)
        }
      </div>
    );
  }
}
