import React from "react";
import "./style.css";

const EduCard = ({ image }) => {
  return (
    <div className="edu-card">
      <img src={image} alt="people studying" className="edu-img" />
      <p>
        Techrief is transforming and scaling businesses successfully through
        services
      </p>
      <span className="date">Techrief Oct 20, 2022</span>
    </div>
  );
};

export default EduCard;
