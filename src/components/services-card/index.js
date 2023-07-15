import React from "react";
import "./style.css";

const ServicesCard = ({ image, title, className }) => {
  return (
    <div className={`services-card ${className}`}>
      <img className="services-img photo-cover" src={image} alt="marketing" />
      <h4>{title}</h4>

      <ul className="card-tags">
        <li className="tag">Google Ads</li>
        <li className="tag">Facebook Ads</li>
        <li className="tag">Instagram Ads</li>
        <li className="tag">Search Engine Olitimization</li>
        <li className="tag">Influencer Marketing</li>
        <li className="tag">Facebook Ads</li>
        <li className="tag">Instagram Ads</li>
      </ul>
      <a href="#" className="learn-more">
        Learn More
        <i className="fa-solid fa-angle-right"></i>
      </a>
    </div>
  );
};

export default ServicesCard;
