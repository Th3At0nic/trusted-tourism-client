import React from "react";
import Images from "../Images/Images";
import facialBG from "../../../images/bandarban.jpg";
import wonderGlow from "../../../images/sundarban.jpg";
import pureShine from "../../../images/kaptailake.jpg";
import gelWonder from "../../../images/saintMartin.jpg";
import powerGloss from "../../../images/sajekvalley.jpg";
import springB from "../../../images/teaPlant.jpg";
import brightF from "../../../images/ratargul.jpg";
import nordicW from "../../../images/sompur.jpg";

const Gallery = () => {
  const productsData = [
    {
      name: "Bandarban",
      img: facialBG,
    },
    {
      name: "Sundarban",
      img: wonderGlow,
    },
    {
      name: "Kaptai Lake",
      img: pureShine,
    },
    {
      name: "Saint Martin",
      img: gelWonder,
    },
    {
      name: "Sajek Valley",
      img: powerGloss,
    },
    {
      name: "Sylhet Tea Plant",

      img: springB,
    },
    {
      name: "Shompur Bihar",

      img: nordicW,
    },
    {
      name: "Ratargul",

      img: brightF,
    },
  ];
  return (
    <section id="gallery" className="row mt-5 text-center">
      <h1 className="text-primary">Gallery</h1>
      <hr />
      {productsData.map((product) => (
        <Images product={product}></Images>
      ))}
      <div>
        <button type="button" class="btn btn-outline-dark pe-5 ps-5 mb-5">
          See All
        </button>
      </div>{" "}
      <hr />
    </section>
  );
};

export default Gallery;

//// sorry to say first i started my project as a beauty parlour website,
//but then for some major issue at the last day i changed it to tourism website, so some name might be odd.
//so please consider my problem
