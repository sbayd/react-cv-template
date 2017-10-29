import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';

import Sidebar from './components/sidebar';

export default class CV extends Component {
  constructor(props) {
    super(props);
  }

  renderCareerProfile() {
    return null;
  }

  render() {
    return (
      <div className="wrapper">
        <Sidebar
          {...this.props.profile}
        />
        {this.renderCareerProfile()}
      </div>
    );
  }
}

CV.propTypes = {
  profile: PropTypes.shape().isRequired,
};

CV.defaultProps = {
  imagePath: null
};
