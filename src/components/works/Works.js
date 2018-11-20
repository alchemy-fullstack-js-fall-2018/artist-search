import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Work = ({ name, title }) => {
  return (
    <Fragment>
      <h3>{title}</h3>
      <Link to={ROUTES.LYRICS.linkTo(name, title)}>Get Lyrics</Link>
    </Fragment>
  );
};

export default function Works({ works, name }) {
  return (
    <Fragment>
      {works.map(work => <Work key={work.id} title={work.title} name={name} />)}
    </Fragment>
  );
}
