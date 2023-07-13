import React from "react";
import "./style.css";

import Banner from "../../components/mainBanner";
import Heading from "../../components/heading";

const AboutPage = () => {
  return (
    <div>
      <Banner>
        <Heading
          title="About Us"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </Banner>
    </div>
  );
};

export default AboutPage;
