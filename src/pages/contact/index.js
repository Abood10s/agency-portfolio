import React from "react";
import "./style.css";

import Banner from "../../components/mainBanner";
import Heading from "../../components/heading";

const ContactPage = () => {
  return (
    <div>
      <Banner>
        <Heading
          title="Contact US"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </Banner>
    </div>
  );
};

export default ContactPage;
