import React from "react";
import "./style.css";

const ContactWidget = ({ image, title, body }) => {
  return (
    <div class="contact-widget">
      <div class="column">
        <h5>{title}:</h5>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default ContactWidget;
