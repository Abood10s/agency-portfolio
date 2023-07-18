import React from "react";
import "./style.css";
import { useState } from "react";

const ContactForm = () => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true);
  };
  return (
    <form>
      <div className="inputs">
        <input
          type="text"
          className={`input ${isFormSubmitted ? "submitted" : ""}`}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          className={`input ${isFormSubmitted ? "submitted" : ""}`}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          className={`input ${isFormSubmitted ? "submitted" : ""}`}
          placeholder="Email"
          required
        />
        <select name="departments" id="select">
          <option value="">Select A Department</option>
          <option value="Education">Education</option>
          <option value="Health">Health</option>
          <option value="Sport">Sport</option>
          <option value="UI/UX">UI/UX</option>
        </select>
      </div>
      <textarea name="Message" rows="4" placeholder="Message"></textarea>
      <button className="send-btn" type="submit" onClick={handleFormSubmit}>
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
