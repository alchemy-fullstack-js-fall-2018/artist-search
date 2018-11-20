import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../routes/routes';
import PropTypes from 'prop-types';


function Result({ name, description, id }) {
  let desc = null;
  if(description) {
    desc = ` - ${description}`;
  }

  return (
    <div>
      <h3>{name}{desc}</h3>
      <Link to={ROUTES.ARTIST.linkTo(id)}>Get Details</Link>
    </div>
  );
}

Result.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string
};

export default Result;
