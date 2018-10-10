import React, { Component } from 'react';
import './Projects.css';

import projectInfo from './projects.json';
import ProjectItem from '../../components/ProjectItem';

export default class Projects extends Component {
  render() {
    return (
      <div id="projects-div">
        <h1>PROJECTS</h1>
        <div id="projects-container">

        {projectInfo.map(i => (
          <ProjectItem 
            src={i.src}
            item1src={i.item1src} 
            item2src={i.item2src} 
            item3src={i.item3src} 
            item4src={i.item4src} 
            item5src={i.item5src} 
            inProduction={i.inProduction}
            title={i.title}
            description={i.description}
            role={i.role}
            info={i.info}
            github={i.github}
            href={i.href}
          />

        ))}


        </div>
      </div>
    )
  }
}
