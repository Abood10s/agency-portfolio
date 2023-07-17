import React, { useEffect } from "react";
import "./style.css";
import { Link, useParams } from "react-router-dom";
//  data
import { latestData } from "../../mockData";
//  components
import PrimaryButton from "../../components/primaryButton";
import Heading from "../../components/heading";
import ProjectsCard from "../../components/projects-card";

const SingleBlogPage = () => {
  let { id } = useParams();
  let item = latestData.find((item) => item.id === parseInt(id));
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);
  return (
    <div>
      <div className="main-img">
        <img src={item.image} alt="blog item" />
        <div className="blog-flex">
          <PrimaryButton
            title="Digital Marketing"
            bg={"#0F7AD3"}
            clr={"#fff"}
          />
          <span className="date"> Oct 20, 2022</span>
        </div>
        <div className="blog-text">
          <h2>Lorem Ipsum Dolor Sit Amet</h2>
          <p>
            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Nec Et
            Ipsum Ullamcorper Venenatis Fringilla. Pretium, Purus Eu Nec
            Vulputate Vel Habitant Egestas. Congue Ornare At Ipsum, Viverra.
            Vitae Magna Faucibus Eros, Lectus Sociis. Etiam Nunc Amet Id
            Dignissim. Feugiat Id Tempor Vel Sit In Ornare Turpis Posuere. Eu
            Quisque Integer Non Rhoncus Elementum Vel. Quis Nec Viverra Laoreet
            Mauris Odio Ut Nec. Nisl, Sed Adipiscing D ignissim Arcu Placerat
            Ornare Pharetra Nec In. Ultrices In Nisl Potenti Vitae Tempus.
            Auctor Consectetur Luctus Eu In Amet Sagittis. Dis Urna, Vel
            Hendrerit Convallis Senectus Feugiat Faucibus Commodo Egestas Leo
            Vitae In Morbi. Enim Arcu Dignissim Mauris, Eu, Eget
          </p>
        </div>
      </div>

      <Heading title="Popular Blogs" />
      <div className="latest-grid">
        {latestData.slice(0, 4).map((item, index) => {
          return (
            <Link to={`/blog/${item.id}`} key={index}>
              <ProjectsCard image={item.image} tag={item.role}>
                <small>Techrief Oct 20, 2022</small>
              </ProjectsCard>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default SingleBlogPage;
