import React, { Component, Fragment } from 'react';
// import PropTypes from 'prop-types';
// import queryString from 'querystring';
import { withRouter } from 'react-router-dom';
import { getArtists } from '../../services/artistsAPI';
// import { ROUTES } from '../../routes/routes';
import Artist from '../artists/Artist';
import Pageable from '../pageable/Pageable';

class Search extends Component {
  state = {
    currentPage: 1,
    totalPages: null,
    artists: []
  };

  doSearch = () => {
    getArtists()
      .then(({ artists }) => this.setState({ artists }));
  };

  componentDidMount() {
    this.doSearch();
  }
  
  render() {

    const { currentPage, totalPages, artists } = this.state;
    const artistComponents = artists.map(artist => {
      return (

        <Artist
          key={artist.id}
          id={artist.id}
          name={artist.name}
          description={artist.description}
        />
      );
    });
    return (
      <Fragment>
        <form onSubmit={this.updateSearchTerm}>
          <input id="searchTerm" type="text" />
          <button type="submit">Search</button>
        </form>
        <Pageable currentPage={currentPage}
          totalPages={totalPages}
          updatePage={this.handlePageUpdate}
        />
        {artistComponents}
      </Fragment >
    );
  }
}
export default withRouter(Search);