import React from "react";
import "./style.css";

import Banner from "../../components/mainBanner";
import Heading from "../../components/heading";

const LatestPage = () => {
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
    </div>
  );
};

export default LatestPage;
