import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

export default class Projects extends Component {
  renderListItem(item) {
    return (
      <div className="item">
        {this.renderProjectTitle(item)}
         -
        <span
          style={{ marginLeft: 5 }}
          className="project-tagline"
          dangerouslySetInnerHTML={{ __html: item.description }}
        />
      </div>
    );
  }
  renderProjectTitle(project) {
    let inner = project.title;
    if (project.url) {
      inner = <a href={project.url} target="_blank">{project.title}</a>;
    }
    return (<span className="project-title" style={{ marginRight: 5 }}>{inner}</span>);
  }
  renderIntro(description) {
    if (!description) { return null; }
    return (
      <div className="intro">
        <p dangerouslySetInnerHTML={{ __html: description }} />
      </div>);
  }
  renderCategory(category) {
    return (
      <div className="category-item">
        <h5>{category.name}</h5>
        <hr />
        {
          category.list.map(item => this.renderListItem(item))
        }
      </div>
    );
  }
  render() {
    const {
      icon,
      sectionTitle,
      categories,
      description
    } = this.props;
    console.log('th', this.props);
    return (
      <Section
        className="projects-section"
        icon={icon || 'archive'}
        title={sectionTitle || 'Projects'}
      >
        { this.renderIntro(description) }
        <div className="projects">
          {
            categories.map((c) => {
              return this.renderCategory(c);
            })
          }
        </div>
      </Section>
    );
  }
}

Projects.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    school: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired
  })).isRequired,
  description: PropTypes.string.isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

