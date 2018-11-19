import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function Result({ name, description, id }) {
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
