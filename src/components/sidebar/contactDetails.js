import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactDetails extends Component {
  renderListItem(className, data, iconName, type) {
    if (!data) { return null; }
    let href = data;
    switch (type) {
      case 'email':
        href = `mailto: ${data}`;
        break;
      case 'phone':
        href = `tel:${data}`;
        break;
    }
    return (
      <li className={className}>
        <i className={`fa ${iconName}`} />
        <a href={`//${href}`} target="_blank"> {data} </a>
      </li>
    );
  }
  render() {
    return (
      <div className="contact-container container-block">
        <ul className="list-unstyled contact-list">
          {this.renderListItem('email', this.props.mail, 'fa-envelope', 'email')}
          {this.renderListItem('phone', this.props.phoneNumber, 'fa-phone', 'phone')}
          {this.renderListItem('website', this.props.website, 'fa-globe', 'link')}
          {this.renderListItem('linkedin', this.props.linkedin, 'fa-linkedin', 'link')}
          {this.renderListItem('github', this.props.github, 'fa-github', 'link')}
          {this.renderListItem('twitter', this.props.twitter, 'fa-twitter', 'link')}
        </ul>
      </div>
    );
  }
}

ContactDetails.propTypes = {
  mail: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string,
  website: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  twitter: PropTypes.string,
};

ContactDetails.defaultProps = {
  phoneNumber: null,
  website: null,
  linkedin: null,
  github: null,
  twitter: null
};
