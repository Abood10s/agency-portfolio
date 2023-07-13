import React from "react";
import "./style.css";

import Banner from "../../components/mainBanner";
import Heading from "../../components/heading";

const ServicesPage = () => {
  return (
    <div>
      {" "}
      <Banner>
        <Heading
          title="Our Services
"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit

"
        />
      </Banner>
    </div>
  );
};

export default ServicesPage;
