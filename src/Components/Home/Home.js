import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import OurStory from "./OurStory/OurStory";
import Services from "./Services/Services";
import Shop from "./Shop/Shop";
import Team from "./Team/Team";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <OurStory></OurStory>
      <Shop></Shop>
      <Team></Team>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;
