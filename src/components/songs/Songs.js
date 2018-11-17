import React, { Fragment } from 'react';

const Song = ({ title }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
    </Fragment>
  );
};
export default function Songs ({ songs }) {
  return (
    <Fragment>
      {songs.map(song => <Song key={song.id} title={song.title} />)}
    </Fragment>
  );
}
