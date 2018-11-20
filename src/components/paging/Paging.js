import React from 'react';
import styles from './Paging.css';

export default function Paging({ currentPage, totalPages, updatePage }) {
 
  let previousButton = null;
  if(currentPage > 1) {
    previousButton = <button onClick={ () => updatePage(currentPage - 1)}>&lt;</button>;
  }
  let nextButton = null;
  if(currentPage < totalPages) {
    nextButton = <button onClick={ () => updatePage(currentPage + 1)}>&gt;</button>;
  }
  return (
    <div className={styles.paging}>
      {previousButton}
      <span>
        {currentPage} out of {totalPages}
      </span>
      {nextButton}
    </div>
  );
}
