import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'querystring';
import { withRouter } from 'react-router-dom';
import { getArtists } from '../../services/musicSearch';
import { ROUTES } from '../../routes/routes';
import Paging from '../paging/Paging';
import Artist from '../artist/Artist';

class Search extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    currentPage: 1,
    totalPages: null,
    artists: []
  };

  doSearch = () => {
    const { searchTerm } = queryString.parse(this.props.location.search.slice(1));
    const { currentPage } = this.state;
    if(!searchTerm) return;

    getArtists(searchTerm, currentPage)
      .then(({ pages, artists }) => this.setState({ artists, totalPages: pages }));
  };

  componentDidMount() {
    this.doSearch();
  }

  componentDidUpdate(prevProps, prevState) {
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
    this.setState({ currentPage: 1 }, () =>{
      this.props.history.push({           /* <=====TODO: ASK RYAN WHAT'S GOING ON HERE */
        pathName: ROUTES.SEARCH.path,     /* <=====TODO: ASK RYAN WHAT'S GOING ON HERE */
        search: searchQuery               /* <=====TODO: ASK RYAN WHAT'S GOING ON HERE */
      });
    });

  };

  render() {
    const artists = this.state.artists.map(artist => {
      return (
        <li key={artist.id}>
          <Artist
            id={artist.id}
            name={artist.name}
            description={artist.description}
          />
        </li>
      );
    });

    return (
      <Fragment>
        <Paging
          currentPage={this.state.currentPage}
          totalPages={this.state.totalPages}
          updatePage={this.handlePageUpdate}
        />
        <form onSubmit={this.updateSearchTerm}>
          <input id="searchTerm" type="text"/>
          <button>Search!</button>
        </form>

        <ul>
          {artists}
        </ul>
      </Fragment>
    );
  }

}

export default withRouter(Search);
