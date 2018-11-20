import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import PropTypes from 'prop-types';

const ArtistListItem = ({ result }) => {
  const { name, type, description, id } = result;

  return (
    <li>
      <p>{name} ({type}) - {description}</p>
      <Link to={ROUTES.ARTIST.linkTo(id)}>Get Details</Link>
    </li>
  );

};

ArtistListItem.propTypes = {
  result: PropTypes.object.isRequired
};

export default ArtistListItem;
