import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LanguageDetails extends Component {
  renderListItem(item) {
    return (
      <li>
        {item.name}
        <span className="lang-desc">  ({item.level})</span>
      </li>
    );
  }
  render() {
    return (
      <div className="languages-container container-block">
        <h2 className="container-block-title">{this.props.title || 'Languages'}</h2>
        <ul className="list-unstyled interests-list">
          {this.props.list.map((item) => {
            return this.renderListItem(item);
          })}
        </ul>
      </div>
    );
  }
}

LanguageDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  })).isRequired,
  title: PropTypes.string.isRequired
};

