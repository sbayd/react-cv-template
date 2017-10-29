import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class EducationDetails extends Component {
  renderListItem(item) {
    return (
      <div className="item">
        <h4 className="degree">{item.degree}</h4>
        <h5 className="meta">{item.school}</h5>
        <div className="time">{item.date}</div>
      </div>
    );
  }
  render() {
    return (
      <div className="education-container container-block">
        <h2 className="container-block-title">{this.props.title || 'Education'}</h2>
        {this.props.list.map((item) => {
          return this.renderListItem(item);
        })}
      </div>
    );
  }
}

EducationDetails.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  })).isRequired,
  title: PropTypes.string.isRequired
};

