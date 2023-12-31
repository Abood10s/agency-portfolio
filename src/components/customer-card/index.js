import React from "react";
import "./style.css";

import star from "../../assets/star.png";

const CustomerCard = ({ image }) => {
  const elements = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="customer-card-cont">
      <img src={image} alt="person" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore.
      </p>
      <div className="star-cont">
        {elements.map((element) => (
          <img key={element} src={star} alt="Star" />
        ))}
      </div>
    </div>
  );
};

export default CustomerCard;
