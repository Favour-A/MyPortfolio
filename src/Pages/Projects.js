import React from 'react'
import ProjectItem from '../Components/ProjectItem.js';
import ProjectList from '../helpers/ProjectList';
import ProjectDisplay  from './ProjectDisplay.js';


import "../styles/Projects.css";

function Projects() {
  return (
    <div className='projects'>
      <h1> My Personal Projects </h1>
      <div className='projectList'>
        {ProjectList.map((project, idx) => {
          return <ProjectItem id={idx} name={project.name} image={project.image} />;
    
         
        } )};
      </div>
    </div>
  )
}

export default Projects