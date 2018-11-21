import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routes/routes';

const Work = ({ title, name }) => {
  return (
    <Fragment>
      <li>
      {title} - <Link to={ROUTES.LYRICS.linkTo(name, title)}>Get Lyrics:</Link>
    </li>
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
