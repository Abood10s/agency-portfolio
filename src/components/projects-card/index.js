import React from "react";
import "./style.css";
const ProjectsCard = ({ image, tag, children }) => {
  return (
    <div className="projects-card photo-cover">
      <img className="projects-img" src={image} alt="marketing" />
      <h4>Project Name</h4>
      <p className="tag">{tag}</p>
      {children}
    </div>
  );
};

export default ProjectsCard;
