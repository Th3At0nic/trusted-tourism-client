import React from "react";
import "./OurStory.css";
import storyImg from "../../../images/smile.jpg";

const OurStory = () => {
  return (
    <div className="row d-flex align-items-center story-container">
      <div className="col">
        <img style={{ height: "900px" }} src={storyImg} alt="" />
      </div>
      <div className="col offset-md-1 story">
        <h1>Our Story</h1>
        <br />
        <p className="w-75">
          We started as a small beauty studio in Islington, London. Our main
          idea was to create the best beauty studio in the world. Can there be
          compromises in the best studio in the world? Our answer is always no,
          we care about the best quality, we hire the best specialists and
          provide the best customer service. This approach allowed us to grow
          and create awesome team that is passionate about everything we do.
        </p>
        <br />
        <a
          href="https://firstsight.design/cherie/hair/our-story/"
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" class="btn btn-outline-dark pe-5 ps-5">
            LEARN MORE
          </button>
        </a>
      </div>
    </div>
  );
};

export default OurStory;
