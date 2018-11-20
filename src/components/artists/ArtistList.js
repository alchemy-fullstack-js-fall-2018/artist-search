import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import Pageable from '../pageable/Pageable';
import Artist from './Artist';
import { getArtists } from '';

export default class EpisodeList extends Component {
  state = {
    artist: ''
  };

  fetchArtist = () => {
    getArtists(this.state.currentPage)
      .then(({ artists }) => {

        this.setState({ artists });
      });
  };
}
