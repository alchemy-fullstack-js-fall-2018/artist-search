import React from 'react';
import PropTypes from 'prop-types';

const QueryArtists = ({ query, onQueryItemChange }) => {

  return (
    <form>
      <fieldset>
        <legend>Query Artists Here</legend>
      </fieldset>
    </form>
  );


};

QueryArtists.propTypes = {
  query: PropTypes.object.isRequired,
  onQueryItemChange: PropTypes.func.isRequired
};

export default QueryArtists;
