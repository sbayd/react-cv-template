import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

export default class Tags extends Component {
  renderListItem(item) {
    return (
      <li className="item">
        {item}
      </li>
    );
  }
  render() {
    const { icon, sectionTitle, list } = this.props;
    return (
      <Section
        className="tags-section"
        icon={icon || 'rocket'}
        title={sectionTitle || 'Skills & Proficiency'}
      >
        <div className="skills">
          <ul className="skillset">
            {list.map((item) => {
              return this.renderListItem(item);
            })}
          </ul>
        </div>
      </Section>
    );
  }
}

Tags.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

