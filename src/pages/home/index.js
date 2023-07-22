import React, { useState } from "react";
import "./style.css";

//  swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, A11y, EffectCoverflow } from "swiper/modules";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

//  components
import HeroSection from "../../components/heroSection";
import Heading from "../../components/heading";
import ServicesCard from "../../components/services-card";
import Widget from "../../components/company-widget";
import Accordion from "../../components/accordion";
import EduCard from "../../components/education-card";
import CustomerCard from "../../components/customer-card";
import ProjectsCard from "../../components/projects-card";
import StrategyCard from "../../components/strategy-card";
import PrimaryButton from "../../components/primaryButton";

//  images And Mock Data
import IMAGES, {
  customersData,
  educationData,
  projectsData,
} from "../../mockData";
import Modal from "../../components/Modal";

//  Swipers Break points
export const breakpoints = {
  640: {
    width: 640,
    slidesPerView: 1,
  },
  768: {
    width: 768,
    slidesPerView: 2,
  },
  1000: {
    width: 1000,
    slidesPerView: 3,
  },
  2000: {
    width: 2000,
    slidesPerView: 4,
  },
};

const HomePage = () => {
  const Accordions = Array.from({ length: 5 });
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      {showModal ? (
        <Modal showModal={showModal} setShowModal={setShowModal} />
      ) : null}

      <HeroSection image={IMAGES.heroImage}>
        <button className="get-started-btn" onClick={() => setShowModal(true)}>
          Get Started
        </button>
      </HeroSection>
      <Heading
        title={"Our services"}
        body={
          "The service we offer is specifically designed to meet your needs."
        }
      />

      <div className="services-cards">
        <ServicesCard image={IMAGES.firstImage} title={"Digital Marketing"} />
        <ServicesCard
          image={IMAGES.secondImage}
          title={"Website Development & Design"}
        />
        <ServicesCard image={IMAGES.thirdImage} title={"Software"} />
        <ServicesCard
          image={IMAGES.fourthImage}
          title={"Graphic Design & Branding"}
        />
      </div>
      <Heading title={"Our projects"} body={"you can see our projects"} />
      <div className="projects-nav">
        <p>All</p>
        <p>Digital Market</p>
        <p>Website Dev.</p>
        <p>Software</p>
      </div>
      <div className="swiper-cont">
        <Swiper
          className="swiper"
          breakpoints={breakpoints}
          style={{ padding: " 1rem" }}
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          effect="fade"
        >
          {projectsData.map((slide, index) => (
            <SwiperSlide key={index}>
              <ProjectsCard tag={slide.role} image={slide.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Heading
        title={"OUR STRATEGY"}
        body={"Amet minim mollit non deserunt ullamco est sit aliqua dolor"}
      />
      <div className="strategy-cards">
        <StrategyCard num="1" classtype="num1" />
        <StrategyCard num="2" classtype="num2" />
        <StrategyCard num="3" classtype="num3" />
        <StrategyCard num="4" classtype="num4" />
      </div>
      <div className="widgets-wrapper">
        <Heading
          title={"Company Facts"}
          body={
            "The service we offer is specifically designed We are proud of our design team"
          }
        />
        <div className="widgets">
          <Widget
            number="1000+"
            desc="Completed projects"
            image={IMAGES.widgetimg1}
          />
          <Widget
            number="50k+"
            desc="Happy Customers"
            image={IMAGES.widgetimg2}
          />
          <Widget number="20+" desc="awards won" image={IMAGES.widgetimg3} />
        </div>
      </div>
      <Heading
        title={"Happy customer"}
        body={"We are proud of our design team"}
      />
      <div className="swiper-cont">
        <Swiper
          spaceBetween={10}
          style={{ padding: "0 1rem" }}
          breakpoints={breakpoints}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        >
          {customersData.map((slide, index) => (
            <SwiperSlide key={index}>
              <CustomerCard image={slide.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Heading
        title={"Frequently asked questions"}
        body={
          "The service we offer is specifically designed We are proud of our design team"
        }
      />
      <div className="accordions">
        {Accordions.map((_, index) => (
          <Accordion
            key={index}
            question={"Amet minim mollit non deserunt ullamco"}
          />
        ))}
      </div>
      <Heading
        title={"This just happened"}
        body={
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint."
        }
      />
      <div className="swiper-cont">
        <Swiper
          spaceBetween={20}
          style={{ padding: "0 1rem" }}
          breakpoints={breakpoints}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        >
          {educationData.map((data, index) => (
            <SwiperSlide key={index}>
              <EduCard image={data.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
