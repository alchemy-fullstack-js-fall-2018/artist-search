import React { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import queryString from 'querystring';
import { withRouter } from 'react-router-dom';
import { getArtists } from '../../services/artistSearch';
import { ROUTES } from '../../routes/routes';
import Artist from '../artist/Artist';
import Pageable from '../pageable/Pageable';

