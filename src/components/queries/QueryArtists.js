import React from 'react';
import PropTypes from 'prop-types';

const QueryArtists = ({ query, onQueryItemChange }) => {

  return (
    <form>
      <label htmlFor="name">Artist name: </label>
      <input type="text" name="name" value={query.name} onChange={onQueryItemChange}/>
    </form>
  );


};

QueryArtists.propTypes = {
  query: PropTypes.object.isRequired,
  onQueryItemChange: PropTypes.func.isRequired
};

export default QueryArtists;
