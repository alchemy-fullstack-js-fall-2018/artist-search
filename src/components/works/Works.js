import React, { Fragment } from 'react';
import WorkListItem from '../works/WorkListItem';

export default function Works({ works }) {
  return (
    <Fragment>
      {works.map(work => <WorkListItem key={work.id} work={work} />)}
    </Fragment>
  );
}
