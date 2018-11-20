import React from 'react';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function Song({ song }) {
    return <Link to={ROUTES.SONG.linkPath(song.id)}>{song.title}</Link>;
}
