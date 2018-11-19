import React from 'react';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function Artist({ artist }) {
    console.log('artist', artist);
    return (
        <Link to={ROUTES.ARTIST.linkPath(artist.id)}>{artist.name}</Link>
    );
}
