import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

export default function Artist({ name, description, id }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{description}</h4>
      
    </div>
  )
}