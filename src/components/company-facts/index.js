import React from "react";
import "./style.css";
import Heading from "../heading";

const CompanyFacts = () => {
  return (
    <div className="company-facts grey">
      <Heading
        title="Company Facts"
        body="The service we offer is specifically designed We are proud of our design team"
      />
      <div className="widget-cards">
        <div className="widget-card">
          <p className="number">1000+</p>
          <p>Completed Projects</p>
        </div>
        <div className="widget-card">
          <p className="number">10k</p>
          <p>Completed Projects</p>
        </div>
        <div className="widget-card">
          <p className="number">15k</p>
          <p>Completed Projects</p>
        </div>
      </div>
    </div>
  );
};

export default CompanyFacts;
