import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function Arist ({ name, description, id }) {
  return (
    <div>
      <h3>{name} - {description} <Link to={ROUTES.ARTIST.linkTo(id)}>Get Details: </Link> </h3>
    </div>
  );
}
