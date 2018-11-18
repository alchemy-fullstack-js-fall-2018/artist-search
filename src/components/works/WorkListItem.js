import React from 'react';
import PropTypes from 'prop-types';

const WorkListItem = ({ work }) => {
  const { title, language } = work;

  return (
    <li>
      {title} - {language}
    </li>
  );

};

WorkListItem.propTypes = {
  work: PropTypes.object.isRequired
};

export default WorkListItem;
