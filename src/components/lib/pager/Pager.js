import React from 'react';
import PropTypes from 'prop-types';

import styles from './Pager.css';

function Pager({ currentPage, totalPages, updatePage }) {

  const page = (currentPage) ? currentPage : 0;

  let previousButton = null;
  if(page > 0) {
    previousButton =
      <button
        className={styles.pageButton}
        onClick={() => updatePage(page - 1)}
      >
        Previous
      </button>;
  }

  let nextButton = null;
  if(page < totalPages - 1) {
    nextButton =
      <button
        className={styles.pageButton}
        onClick={() => updatePage(page + 1)}
      >
        Next
      </button>;
  }

  return (
    <div>
      {previousButton}
      <span>{page + 1} out of {totalPages} pages</span>
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
