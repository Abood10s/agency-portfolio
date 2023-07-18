import React from "react";
import "./style.css";

const Widget = ({ number, desc, image }) => {
  return (
    <div className="widget">
      <img src={image} alt="Completed Projects" />
      <p className="number">{number}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Widget;
