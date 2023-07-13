import React from "react";
import "./style.css";

const Widget = ({ number, desc, image }) => {
  return (
    <div class="widget">
      <img src={image} alt="Completed Projects" />
      <p class="number">{number}</p>
      <p>{desc}</p>
    </div>
  );
};

export default Widget;
