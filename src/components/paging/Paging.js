import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Paging = ({ currentPage, totalPages, totalResults, updatePage }) => {

  return (
    <Fragment>
      <h3>Found {totalResults} result{totalResults != 1 && 's'}</h3>
      {totalResults > 0 &&
      <h3>
        {currentPage > 1 && <button onClick={() => updatePage(currentPage - 1)}>Previous</button>}
        <span> Page {currentPage} out of {totalPages} </span>
        {currentPage < totalPages && <button onClick={() => updatePage(currentPage + 1)}>Next</button>}
      </h3>}
    </Fragment>
  );
};

Paging.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  totalResults: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
};

export default Paging;
