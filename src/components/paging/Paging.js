import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Paging = ({ currentPage, totalPages, totalResults, updatePage }) => {

  const showTotalResults = totalResults > 0;
  const showPlural = totalResults != 1;
  const showPreviousButton = currentPage > 1;
  const showNextButton = currentPage < totalPages;

  return (
    <Fragment>
      {showTotalResults &&
        <div>
          <h3>Found {totalResults} result{showPlural && 's'}</h3>
          <h3>
            {showPreviousButton && <button onClick={() => updatePage(currentPage - 1)}>Previous</button>}
            <span> Page {currentPage} out of {totalPages} </span>
            {showNextButton && <button onClick={() => updatePage(currentPage + 1)}>Next</button>}
          </h3>
        </div>
      }
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
