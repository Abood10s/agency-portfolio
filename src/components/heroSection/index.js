import React from "react";
import "./style.css";

import HeroImage from "../../assets/herosection.jpg";

import PrimaryButton from "../primaryButton/index";

const HeroSection = () => {
  return (
    <div className="hero-section">
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
        <PrimaryButton
          bg={"#4A3AFF"}
          clr={"#fff"}
          classNameName="get-started-btn"
        />
      </div>
      <div className="img">
        <img
          src={HeroImage}
          alt="hero section illustration"
          className="hero-img"
        />
      </div>
    </div>
  );
};

export default HeroSection;
