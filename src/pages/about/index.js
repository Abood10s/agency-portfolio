import React from "react";
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
import Banner from "../../components/mainBanner";
import Heading from "../../components/heading";
import HeroSection from "../../components/heroSection";
import IMAGES, { customersData, teamData } from "../../mockData";
import { breakpoints } from "../home";
import CustomerCard from "../../components/customer-card";
import ProjectsCard from "../../components/projects-card";

const AboutPage = () => {
  return (
    <div>
      <Banner>
        <Heading
          title="About Us"
          body="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        />
      </Banner>
      <HeroSection image={IMAGES.aboutImage} reverse={true} />
      <Heading
        title="Our Awesome Team
"
        body="you can see our projects
"
      />
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
          {teamData.map((slide, index) => (
            <SwiperSlide key={index}>
              <ProjectsCard image={slide.image} tag={slide.role} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <Heading
        title="Happy Customers
"
        body="Clients Reviews
"
      />
      <div className="swiper-cont">
        <Swiper
          spaceBetween={10}
          style={{ padding: "0 1rem" }}
          breakpoints={breakpoints}
          modules={[Navigation, A11y, EffectCoverflow]}
        >
          {customersData.map((slide, index) => (
            <SwiperSlide key={index}>
              <CustomerCard image={slide.image} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default AboutPage;
