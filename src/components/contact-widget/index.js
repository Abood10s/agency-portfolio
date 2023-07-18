import React from "react";
import "./style.css";

const ContactWidget = ({ image, title, body }) => {
  return (
    <div className="contact-widget">
      <img src={image} alt="svg" className="svg-flex" />
      <div className="column">
        <h5>{title}:</h5>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ContactWidget;
