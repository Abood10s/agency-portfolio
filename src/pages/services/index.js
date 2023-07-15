import React from "react";
import "./style.css";

import Banner from "../../components/mainBanner";
import Heading from "../../components/heading";
import ServicesCard from "../../components/services-card";
import IMAGES from "../../mockData";

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
      <div className="services-cards">
        <ServicesCard
          image={IMAGES.firstImage}
          title={"Digital Marketing"}
          className="shadow-card"
        />
        <ServicesCard
          image={IMAGES.secondImage}
          title={"Website Development & Design"}
          className="shadow-card"
        />
        <ServicesCard
          image={IMAGES.thirdImage}
          title={"Software"}
          className="shadow-card"
        />
        <ServicesCard
          image={IMAGES.fourthImage}
          title={"Graphic Design & Branding"}
          className="shadow-card"
        />
      </div>
    </div>
  );
};

export default ServicesPage;
