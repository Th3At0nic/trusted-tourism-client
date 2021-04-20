import React from "react";
import Footer from "../Shared/Footer/Footer";
import Team from "./Team/Team";
import Header from "./Header/Header";
import OurStory from "./OurStory/OurStory";
import Services from "./Services/Services";
import Gallery from "./Gallery/Gallery";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Services></Services>
      <Team></Team>
      <OurStory></OurStory>
      <Gallery></Gallery>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
};

export default Home;

//// sorry to say first i started my project as a beauty parlour website,
//but then for some major issue at the last day i changed it to tourism website, so some name might be odd.
//so please consider my problem
