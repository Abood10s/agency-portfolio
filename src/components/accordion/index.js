import React, { useState } from "react";
import "./style.css";

const Accordion = ({ question }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="accordion">
      <div className="header">
        <h5>{question} </h5>
        <p className={`showAcc ${show ? "active" : ""}`}>
          {show ? (
            <i className="fa-solid fa-minus" onClick={() => setShow(!show)}></i>
          ) : (
            <i
              className="fa-regular fa-plus"
              onClick={() => setShow(!show)}
            ></i>
          )}
        </p>
      </div>
      {show && (
        <span className="content">
          Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat aute irure dolor
        </span>
      )}
    </div>
  );
};

export default Accordion;
