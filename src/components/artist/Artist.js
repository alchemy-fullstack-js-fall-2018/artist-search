import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function Arist ({ name, description, id }) {
  return (
    <div>
      <h2>{name} - {description} </h2>
      <Link to={ROUTES.ARTIST.linkTo(id)}>Get Details: </Link>
    </div>
  );
}
