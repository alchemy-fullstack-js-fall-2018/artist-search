import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import PropTypes from 'prop-types';

const Song = ({ artist, title }) => {
  return (
    <Fragment>
      <h4><em>{title}</em></h4>
      <Link to={ROUTES.LYRICS.linkTo(artist, title)}>Get Lyrics</Link>
    </Fragment>
  );
};

function Songs({ artist, works }) {
  return (
    <Fragment>
      <h3>Songs:</h3>
      {works.map(work =>
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

Songs.propTypes = {
  artist: PropTypes.string.isRequired,
  works: PropTypes.array.isRequired
};

export default Songs;
