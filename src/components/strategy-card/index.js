import React from "react";
import "./style.css";

const StrategyCard = ({ num, classtype }) => {
  return (
    <div className="strategy-card">
      <div className={`num ${classtype}`}>{num}</div>
      <h4 className="ideas">Collect Ideas</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam
      </p>
    </div>
  );
};

export default StrategyCard;
