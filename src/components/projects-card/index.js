import React from "react";
import "./style.css";
const ProjectsCard = ({ image, tag }) => {
  return (
    <div class="projects-card photo-cover">
      <img class="projects-img" src={image} alt="marketing" />
      <h4>Project Name</h4>
      <p class="tag">{tag}</p>
    </div>
  );
};

export default ProjectsCard;
