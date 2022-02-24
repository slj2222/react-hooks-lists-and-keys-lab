import React, { useReducer } from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);

  const itemsList =  projects.map(element => {
    console.log(element.id)
   return (<ProjectItem key={element.id} name={element.name} about={element.about} technologies={element.technologies}/>)
  })

  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{itemsList}</div>
    </div>
  );
}

export default ProjectList;
