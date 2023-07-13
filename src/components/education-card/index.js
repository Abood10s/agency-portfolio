import React from "react";
import "./style.css";

const EduCard = ({ image }) => {
  return (
    <div class="edu-card">
      <img src={image} alt="people studying" className="edu-img" />
      <p>
        Techrief is transforming and scaling businesses successfully through
        services
      </p>
      <span class="date">Techrief Oct 20, 2022</span>
    </div>
  );
};

export default EduCard;
