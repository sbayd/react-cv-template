import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

export default class Tags extends Component {
  renderListItem(item, i) {
    return (
      <li className="item" key={`tag_item_${i}`}>
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
        id="tags"
        title={sectionTitle || 'Skills & Proficiency'}
      >
        <div className="skills">
          <ul className="skillset">
            {list.map((item, i) => {
              return this.renderListItem(item, i);
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
  icon: PropTypes.string
};

