import React from 'react';
import PropTypes from 'prop-types';
import { ROUTES } from '../../routes/routes';
import { Link } from 'react-router-dom';

const WorkListItem = ({ artist, title }) => {

  return (
    <li>
      <Link to={ROUTES.WORK.linkTo(artist, title)}>{title}</Link>
    </li>
  );

};

WorkListItem.propTypes = {
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default WorkListItem;
