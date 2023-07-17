import React from "react";
import "./style.css";

import Banner from "../../components/mainBanner";
import Heading from "../../components/heading";
import { latestData } from "../../mockData";
import ProjectsCard from "../../components/projects-card";
import { Link } from "react-router-dom";

const LatestPage = () => {
  const date = new Date().toLocaleDateString("en-GB");

  return (
    <div>
      {" "}
      <Banner>
        <Heading
          title="Latest News
"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit

"
        />
      </Banner>
      <div className="projects-nav">
        <p>All</p>
        <p>Digital Market</p>
        <p>Website Dev.</p>
        <p>Software</p>
      </div>
      <div className="latest-grid">
        {latestData.map((item, index) => {
          return (
            <Link to={`/blog/${item.id}`} key={index}>
              <ProjectsCard image={item.image} tag={item.role}>
                <small>Techreif {date}</small>
              </ProjectsCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LatestPage;
