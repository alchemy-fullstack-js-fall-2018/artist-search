import React, { Fragment } from 'react';

import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Song = ({ artist, title }) => {
  return (
    <Fragment>
      <h4><em>{title}</em></h4>
      <Link to={ROUTES.LYRICS.linkTo(artist, title)}>Get Details</Link>
    </Fragment>
  );
};

export default function Songs({ artist, works }) {
  return (
    <Fragment>
      <h3>Songs:</h3>
      {
        works.map(work =>
          <Song
            key={work.id}
            artist={artist}
            title={work.title}
            id={work.id}
          />)
      }
    </Fragment>
  );
}
