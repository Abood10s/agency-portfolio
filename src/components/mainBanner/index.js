import React from "react";
import "./style.css";
import IMAGES from "../../mockData";
const Banner = ({ children }) => {
  return (
    <div class="img-banner">
      {children}
      <img
        src={IMAGES.ballsImg}
        alt="background pic of balls"
        class="balls-img"
      />
    </div>
  );
};

export default Banner;
