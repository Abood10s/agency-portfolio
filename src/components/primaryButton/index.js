import React from "react";
import "./style.css";
const PrimaryButton = ({ title = "Get Started", bg, clr }) => {
  return (
    <button
      style={{ backgroundColor: bg, color: clr }}
      className="get-started-btn"
    >
      {title}
    </button>
  );
};

export default PrimaryButton;
