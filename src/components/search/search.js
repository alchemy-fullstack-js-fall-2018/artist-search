import React { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'querystring';
import { withRouter } from 'react-router-dom';
import { getArtists } from '../../services/artistSearch';
import { ROUTES } from '../../routes/routes';
import Artist from '../artist/Artist';
import Pageable from '../pageable/Pageable';

class Search extends Component {
  state = {
    currentPage: 1,
    totalPages: null,
    artists: []
  };

  onSearch = () => {
    const { searchTerm } = queryString.parse(this.props.location.search.slice(1));
    if(!searchTerm) return this.setState({ artists: [] });

    getArtists(searchTerm, this.state.currentPage)
      .then(({ pages, artists }) => this.setState({ artists, totalPages: pages }));
  };

  componentDidMount() {
    this.doSearch();
  }

  componentDidUpdate(prevProps) {

    if(prevProps.location.search !== this.props.location.search) {
      this.doSearch();
    }
  }

  handlePageUpdate = page => {
    this.setState({ currentPage: page }, () => {
      this.doSearch();
    });
  };

  updateSearchTerm = event => {
    event.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;
    const searchQuery = queryString.stringify({ searchTerm });
    this.props.history.push({
      pathName: ROUTES.SEARCH.path,
      search: searchQuery
    });
  };

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