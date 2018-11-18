import React from 'react';
import PropTypes from 'prop-types';

const ArtistListItem = ({ result }) => {
  const { name, description } = result;

  return (
    <li>
      <p>{name} - {description}</p>
    </li>
  );

};

ArtistListItem.propTypes = {
  result: PropTypes.object.isRequired
};

export default ArtistListItem;
