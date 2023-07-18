import React from "react";
import "./style.css";

const MainSection = ({ title, image, body, children }) => {
  return (
    <div className="main-flex">
      <img src={image} alt="people talking" className="people-svg" />
      <div className="main-text">
        <h2 className="main-title">{title}</h2>
        <p className="main-body">{body}</p>
        {children}
      </div>
    </div>
  );
};

export default MainSection;
