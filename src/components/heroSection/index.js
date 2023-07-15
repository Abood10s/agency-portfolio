import React from "react";
import "./style.css";

const HeroSection = ({ children, image, reverse = false }) => {
  return (
    <div
      className="hero-section"
      style={{ flexDirection: reverse ? "row-reverse" : "row" }}
    >
      <div className="desc">
        <h2 className="hero-heading">
          Secure <span className="red-txt">IT Solutions</span>for a more secure
          environment
        </h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
        {children}
      </div>
      <div className="img">
        <img src={image} alt="hero section illustration" className="hero-img" />
      </div>
    </div>
  );
};

export default HeroSection;
