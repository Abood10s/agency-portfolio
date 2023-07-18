import React from "react";
import "./style.css";

import IMAGES from "../../mockData";
//  components
import Banner from "../../components/mainBanner";
import Heading from "../../components/heading";
import MainSection from "../../components/mainSection";
import ContactWidget from "../../components/contact-widget";
import SimpleMap from "../../components/map";
import ContactForm from "../../components/form";

const ContactPage = () => {
  return (
    <div>
      <Banner>
        <Heading
          title="Contact US"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </Banner>
      <MainSection
        image={IMAGES.contactImg}
        title="Contact with us know"
        body="We are with you to help you, just contact us"
      >
        <div className="contact-widgets">
          <ContactWidget
            image={IMAGES.address}
            title="Address"
            body="28 Division St,10002, USA"
          />
          <ContactWidget
            image={IMAGES.email}
            title="Email"
            body="Startnext@Gmail.Com"
          />
          <ContactWidget
            image={IMAGES.phone}
            title="Phone"
            body="+ (321) 984 75413"
          />
        </div>
      </MainSection>
      <Heading
        title="Drop Us a Line
"
        body="Fill out the contact form and we will get back to you shortly."
      />
      <ContactForm />
      <SimpleMap />
    </div>
  );
};

export default ContactPage;
