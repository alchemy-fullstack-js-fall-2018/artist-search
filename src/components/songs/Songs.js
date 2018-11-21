import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Song = ({ title, artist }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      <Link to={ROUTES.LYRICS.linkTo(title, artist)}>Get the lyrics!</Link>
    </Fragment>
  );
};
export default function Songs({ songs, artist }) {
  return (
    <Fragment>
      {songs.map(song => <Song key={song.id} title={song.title} artist={artist}/>)}
    </Fragment>
  );
}
