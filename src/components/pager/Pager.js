import React from 'react';
import PropTypes from 'prop-types';

import styles from './Pager.css';

function Pager({ currentPage, totalPages, updatePage }) {

  let previousButton = null;
  if(currentPage > 1) {
    previousButton =
      <button
        className={styles.pageButton}
        onClick={() => updatePage(currentPage - 1)}
      >
        Previous
      </button>;
  }

  let nextButton = null;
  if(currentPage < totalPages) {
    nextButton =
      <button
        className={styles.pageButton}
        onClick={() => updatePage(currentPage + 1)}
      >
        Next
      </button>;
  }

  return (
    <div>
      {previousButton}
      <span>{currentPage} out of {totalPages} pages</span>
      {nextButton}
    </div>
  );
}

Pager.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  updatePage: PropTypes.func.isRequired
};

export default Pager;
