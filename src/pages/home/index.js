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

//  images
import firstImage from "../../assets/1.jpg";
import secondImage from "../../assets/2.png";
import thirdImage from "../../assets/3.png";
import fourthImage from "../../assets/4.png";
import ProjectsCard from "../../components/projects-card";
import firProjectImg from "../../assets/1.svg";
import secProjectImg from "../../assets/2.svg";
import thirstProjectImg from "../../assets/3.svg";
import fourtProjectImg from "../../assets/4.svg";
import StrategyCard from "../../components/strategy-card";
import widgetimg1 from "../../assets/widget1.png";
import widgetimg2 from "../../assets/widget2.png";
import widgetimg3 from "../../assets/widget3.png";
import man1 from "../../assets/man1.png";
import woman from "../../assets/woman.png";
import man3 from "../../assets/man3.png";
import edu1 from "../../assets/edu1.png";
import edu2 from "../../assets/edu2.png";
import edu3 from "../../assets/edu3.png";
import edu4 from "../../assets/edu4.png";

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

      <div class="services-cards">
        <ServicesCard image={firstImage} title={"Digital Marketing"} />
        <ServicesCard
          image={secondImage}
          title={"Website Development & Design"}
        />
        <ServicesCard image={thirdImage} title={"Software"} />
        <ServicesCard image={fourthImage} title={"Graphic Design & Branding"} />
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
            <ProjectsCard tag={"UI/UX"} image={firProjectImg} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard tag={"Digital Marketing"} image={secProjectImg} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard tag={"Digital Marketing"} image={thirstProjectImg} />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectsCard tag={"Digital Marketing"} image={fourtProjectImg} />
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
          <Widget number="1000+" desc="Completed projects" image={widgetimg1} />
          <Widget number="50k+" desc="Happy Customers" image={widgetimg2} />
          <Widget number="20+" desc="awards won" image={widgetimg3} />
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
            <CustomerCard image={man1} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard image={woman} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard image={man3} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard image={woman} />
          </SwiperSlide>
          <SwiperSlide>
            <CustomerCard image={man1} />
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
            <EduCard image={edu1} />
          </SwiperSlide>
          <SwiperSlide>
            <EduCard image={edu2} />
          </SwiperSlide>
          <SwiperSlide>
            <EduCard image={edu3} />
          </SwiperSlide>
          <SwiperSlide>
            <EduCard image={edu4} />
          </SwiperSlide>
          <SwiperSlide>
            <EduCard image={edu2} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomePage;
