import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import PropTypes from 'prop-types';

const Artist = ({ name, description, id }) => {
  return (
    <div>
      <h3>
        {name} - {description}
      </h3>
      <Link to={ROUTES.ARTIST.linkTo(id)}>Get Works by {name}.</Link>
    </div>
  );
};

Artist.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
  id: PropTypes.string.isRequired
};

export default Artist;
