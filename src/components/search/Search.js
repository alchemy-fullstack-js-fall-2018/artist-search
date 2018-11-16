import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';


class Search extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  state = {

  };



  render() {

    return (
      <Fragment>
        <h2>I am search</h2>
      </Fragment>
    );
  }
}

export default withRouter(Search);
