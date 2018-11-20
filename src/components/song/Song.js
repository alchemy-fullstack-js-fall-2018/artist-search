import React from 'react';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';

export default function Song({ artistName, songName }) {
    return <Link to={ROUTES.SONG.linkPath(artistName, songName)}>{songName}</Link>;
}
