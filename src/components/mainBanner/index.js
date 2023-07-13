import React from "react";
import "./style.css";
import BallsImage from "../../assets/balls.png";
const Banner = ({ children }) => {
  return (
    <div class="img-banner">
      {children}
      <img src={BallsImage} alt="background pic of balls" class="balls-img" />
    </div>
  );
};

export default Banner;
