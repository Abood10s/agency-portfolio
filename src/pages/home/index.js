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
import HeroSection from "../../components/heroSection";
import Heading from "../../components/heading";
import ServicesCard from "../../components/services-card";
import Widget from "../../components/company-widget";
import Accordion from "../../components/accordion";
import EduCard from "../../components/education-card";
import CustomerCard from "../../components/customer-card";
import ProjectsCard from "../../components/projects-card";
import StrategyCard from "../../components/strategy-card";

//  images
import IMAGES from "../../mockData";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
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
          breakpoints={{
            768: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
          }}
          spaceBetween={10}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
          effect="fade"
        >
          <SwiperSlide>
            <ProjectsCard tag={"UI/UX"} image={IMAGES.firProjectImg} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              tag={"Digital Marketing"}
              image={IMAGES.secProjectImg}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              tag={"Digital Marketing"}
              image={IMAGES.thirstProjectImg}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard
              tag={"Digital Marketing"}
              image={IMAGES.fourtProjectImg}
            />
          </SwiperSlide>
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
          breakpoints={{
            768: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        >
          <SwiperSlide>
            <CustomerCard image={IMAGES.man1} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard image={IMAGES.woman} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard image={IMAGES.man3} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard image={IMAGES.woman} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard image={IMAGES.man1} />
          </SwiperSlide>
        </Swiper>
      </div>
      <Heading
        title={"Frequently asked questions"}
        body={
          "The service we offer is specifically designed We are proud of our design team"
        }
      />
      <div className="accordions">
        <Accordion question={"Amet minim mollit non deserunt ullamco"} />
        <Accordion question={"Amet minim mollit non deserunt ullamco"} />
        <Accordion question={"Amet minim mollit non deserunt ullamco"} />
        <Accordion question={"Amet minim mollit non deserunt ullamco"} />
        <Accordion question={"Amet minim mollit non deserunt ullamco"} />
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
          breakpoints={{
            768: { slidesPerView: 2 },
            500: { slidesPerView: 1 },
          }}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination, A11y, EffectCoverflow]}
        >
          <SwiperSlide>
            <EduCard image={IMAGES.edu1} />
          </SwiperSlide>
          <SwiperSlide>
            <EduCard image={IMAGES.edu2} />
          </SwiperSlide>
          <SwiperSlide>
            <EduCard image={IMAGES.edu3} />
          </SwiperSlide>
          <SwiperSlide>
            <EduCard image={IMAGES.edu4} />
          </SwiperSlide>
          <SwiperSlide>
            <EduCard image={IMAGES.edu2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
