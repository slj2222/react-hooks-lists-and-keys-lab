import React from "react";

function ProjectItem({ name, about, technologies }) {

  const addTechnologies = technologies.map(element => {
    return <span key={element}>{element}</span>
  })


  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {/* render a <span> for each technology in the technologies array */}
        {addTechnologies}
        
      </div>
    </div>
  );
}

export default ProjectItem;
