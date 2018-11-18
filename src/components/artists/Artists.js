import React, { Component, Fragment } from 'react';
import QueryArtists from '../queries/QueryArtists';
import Paging from '../paging/Paging';
import Results from '../results/Results';
import { getArtists } from '../../services/fetch';
import ArtistListItem from '../artists/ArtistListItem';

export default class Artists extends Component {

  state = {
    currentPage: 0,
    totalPages: 0,
    totalResults: 0,
    query: {

    }
  };

  onQueryItemChange = ({ target }) => {
    const { query } = this.state;
    this.setState({ currentPage: 1, query:{ ...query, [target.name]: target.value } });
  };

  updatePage = page => {
    this.setState({ currentPage: page });
  };

  updateCounts = (totalPages, totalResults) => {
    this.setState({ totalPages, totalResults });
  };

  render() {

    const { currentPage, totalPages, totalResults, query } = this.state;

    return (
      <Fragment>
        <h2>Search for Artists</h2>
        <QueryArtists query={query}
          onQueryItemChange={this.onQueryItemChange}
        />
        <Paging currentPage={currentPage}
          totalPages={totalPages}
          totalResults={totalResults}
          updatePage={this.updatePage}
        />
        <Results currentPage={currentPage}
          updateCounts={this.updateCounts}
          getResults={getArtists}
          ResultComponent={ArtistListItem}
          query={query}
        />
      </Fragment>
    );
  }
}
