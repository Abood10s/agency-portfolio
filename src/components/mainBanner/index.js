import React from "react";
import "./style.css";
import IMAGES from "../../mockData";
const Banner = ({ children }) => {
  return (
    <div className="img-banner">
      {children}
      <img
        src={IMAGES.ballsImg}
        alt="background pic of balls"
        className="balls-img"
      />
    </div>
  );
};

export default Banner;
