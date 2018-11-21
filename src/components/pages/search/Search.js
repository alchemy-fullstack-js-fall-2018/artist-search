import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import Result from './result/Result';
import Pager from '../../lib/pager/Pager';

import styles from './Search.css';

import queryString from 'querystring';
import { getArtists } from '../../../services/musicSearch';
import { ROUTES } from '../../../routes/routes';

class Search extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    totalPages: null,
    artists: []
  };

  componentDidMount() {
    this.doSearch();
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.location.search !== this.props.location.search) {
      this.doSearch();
    }
  }

  doSearch = () => {
    const { q, page } = queryString.parse(this.props.location.search.slice(1));
    if(!q) return;

    getArtists(q, page)
      .then(({ artists, totalPages }) => {
        this.setState({ artists, totalPages });
      });
  };

  updateHistory = (options) => {
    const { page: urlPage, q: urlSearchTerm } = queryString.parse(this.props.location.search.slice(1));
    const q = options.q || urlSearchTerm;
    const page = options.page || urlPage;
    const searchQuery = queryString.stringify({ q, page });
    this.props.history.push({
      pathName: ROUTES.SEARCH.path,
      search: searchQuery
    });
  };


  updateSearch = event => {
    event.preventDefault();
    const q = document.getElementById('q').value;
    this.updateHistory({ q, page: 0 });
  };

  updatePage = page => {
    this.updateHistory({ page });
    this.doSearch();
  };

  render() {
    const { totalPages } = this.state;

    const { page } = queryString.parse(this.props.location.search.slice(1));
    const pageNum = parseInt(page);

    const results = this.state.artists.map(artist => {
      return (
        <li key={artist.id}>
          <Result
            id={artist.id}
            name={artist.name}
            description={artist.description}
          />
        </li>
      );
    });

    return (
      <Fragment>
        <h2>Search the Music Database</h2>
        <form
          onSubmit={this.updateSearch}
        >
          <input id="q" type="text" />
          <button type="submit">Search</button>
        </form>
        <ul
          className={styles.resultList}
        >
          {results}
        </ul>
        {
          totalPages &&
          <Pager
            currentPage={pageNum}
            totalPages={totalPages}
            updatePage={this.updatePage}
          />
        }
      </Fragment>
    );
  }
}

export default withRouter(Search);
