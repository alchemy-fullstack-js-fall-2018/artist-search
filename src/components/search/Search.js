import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

class Search extends Component {
  static propTypes = {
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };


  render() {

    return (
      <Fragment>
        <ul>
          <li>an artist will go here</li>
        </ul>
      </Fragment >
    );
  }
}

export default withRouter(Search);
