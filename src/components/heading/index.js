import React from "react";
import "./style.css";
const Heading = ({ title, body }) => {
  return (
    <div className="heading">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
};

export default Heading;
