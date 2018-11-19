import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'querystring';
import { withRouter, Link } from 'react-router-dom';
import { getArtists } from '../../services/musicSearch';
import { ROUTES } from '../../routes/routes';
import Artist from '../artist/Artist';
import styles from './search.css';
import Paging from '../paging/Paging';


class Search extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {
    totalPages: null,
    artists: []
  };

    // state = {
  //   currentPage: 1,
  //   totalPages: '',
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   //PureComponent
  //   return nextProps !== this.props && nextState !== this.state;

  //   // Component
  //   return true
  // }

  doSearch = () => {
    const { searchTerm, page } = queryString.parse(this.props.location.search.slice(1));
    if(!searchTerm) return;

    getArtists(searchTerm, page)
      .then(({ pages, artists }) => this.setState({ artists, totalPages: pages }));
  };

  componentDidMount() {
    this.doSearch();
  }

  handlePageUpdate = page => {
    this.updateHistory({ page });
  };

  componentDidUpdate(prevProps, prevState) {
    // if(prevProps.location.search !== this.props.location.search) {
    //   const search = queryString.parse(this.props.location.search.slice(1));
    //   this.setState({ searchTerm: search.searchTerm });
    // }

    if(prevProps.location.search !== this.props.location.search) {
      this.doSearch();
    }
  }

  updateSearchTerm = event => {
    event.preventDefault();
    const searchTerm = document.getElementById('searchTerm').value;
    this.updateHistory({ searchTerm, page: 1 });
  };

updateHistory = search => {
  const { searchTerm: currentSearchTerm, page: currentPage } = queryString.parse(this.props.location.search.slice(1));
  const searchTerm = search.searchTerm || currentSearchTerm;
  const page = search.page || currentPage;
  const searchQuery = queryString.stringify({ searchTerm, page });
    this.props.history.push({
      pathName: ROUTES.SEARCH.path,
      search: searchQuery
    });
}

  render() {
    const { totalPages  } = this.state;
    const { page } = queryString.parse(this.props.location.search.slice(1));
    const artistsComponent = this.state.artists.map(artist => {
      return (
        <li key={artist.id}>
          <Artist id={artist.id}
            name={artist.name}
            description={artist.description} />
        </li>
      );
    });

    return (
      <Fragment>

        <Paging currentPage={page}
          totalPages={totalPages}
          updatePage={this.handlePageUpdate} />
        <Link to={ROUTES.LANDING.linkTo()}>Link!</Link>

        <form onSubmit={this.updateSearchTerm}>
          <input id="searchTerm" type="text" />
          <button type="submit">Search</button>
        </form>
        <ul className={styles.search}>
          {artistsComponent}
        </ul>
      </Fragment >
    );
  }
}

export default withRouter(Search);
