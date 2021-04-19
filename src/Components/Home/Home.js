import React from "react";
import Footer from "../Shared/Footer/Footer";
import Beauticians from "./Beauticians/Beauticians";
import Header from "./Header/Header";
import OurStory from "./OurStory/OurStory";
import Services from "./Services/Services";
import Shop from "./Shop/Shop";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Beauticians></Beauticians>
      <OurStory></OurStory>
      <Shop></Shop>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
