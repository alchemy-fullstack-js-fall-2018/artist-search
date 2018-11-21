import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';
import PropTypes from 'prop-types';

const Work = ({ name, title }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      <Link to={ROUTES.LYRICS.linkTo(name, title)}>Get Lyrics</Link>
    </Fragment>
  );
};

const Works = ({ works, name }) => {
  return (
    <Fragment>
      {works.map(work => (
        <Work key={work.id} title={work.title} name={name} />
      ))}
    </Fragment>
  );
};

Works.propTypes = {
  works: PropTypes.array.isRequired,
  name: PropTypes.string
};

export default Works;
