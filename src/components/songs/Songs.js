import React, { Fragment } from 'react';

//turn this guy into a link to a song detail, passing the artist's name along

const Song = ({ title, artist }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      {artist}
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
