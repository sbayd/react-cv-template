import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProfileContainer extends Component {
  renderProfilePicture(imagePath) {
    if (imagePath) {
      return (<img className="profile" src={imagePath} alt="" style={{ maxWidth: 185 }} />);
    }
    return null;
  }
  render() {
    return (
      <div className="profile-container">
        {this.renderProfilePicture(this.props.imagePath)}
        <h1 className="name" style={{ fontSize: 25 }}>{ this.props.name }</h1>
        <h3 className="tagline"> { this.props.title } </h3>
      </div>
    );
  }
}

ProfileContainer.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string
};

ProfileContainer.defaultProps = {
  imagePath: null
};
