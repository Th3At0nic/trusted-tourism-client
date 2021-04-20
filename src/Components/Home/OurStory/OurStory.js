import React from "react";
import "./OurStory.css";
import storyImg from "../../../images/tour5.jpg";

const OurStory = () => {
  return (
    <div className="row d-flex align-items-center story-container mt-5">
      <div className="col">
        <img style={{ height: "900px" }} src={storyImg} alt="" />
      </div>
      <div className="col offset-md-1 story">
        <h1>Our Story</h1>
        <br />
        <p className="w-75">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae
          sequi officiis necessitatibus. Voluptatibus facere aut ipsam animi
          nemo repudiandae cum, minus odio tempora recusandae nesciunt porro
          nulla quod placeat consectetur.
        </p>
        <br />

        <button type="button" class="btn btn-outline-dark pe-5 ps-5">
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default OurStory;
