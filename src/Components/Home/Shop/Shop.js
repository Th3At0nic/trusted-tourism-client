import React from "react";
import Products from "../Products/Products";
import facialBG from "../../../images/facialb.png";
import wonderGlow from "../../../images/wondergel.png";
import pureShine from "../../../images/pureshine.png";
import gelWonder from "../../../images/gelwonder.png";
import powerGloss from "../../../images/powergloss.png";
import springB from "../../../images/springB.png";
import brightF from "../../../images/brightF.png";
import nordicW from "../../../images/nordicW.png";

const Shop = () => {
  const productsData = [
    {
      name: "Facial Balancing Gel",
      price: 32,
      img: facialBG,
    },
    {
      name: "Wonderglow",
      price: 18,
      img: wonderGlow,
    },
    {
      name: "Pure Shine",
      price: 8,
      img: pureShine,
    },
    {
      name: "Gel Wonder",
      price: 19,
      img: gelWonder,
    },
    {
      name: "Power Gloss",
      price: 36,
      img: powerGloss,
    },
    {
      name: "Spring Beauty",
      price: 9,
      img: springB,
    },
    {
      name: "Nordic Water",
      price: 22,
      img: nordicW,
    },
    {
      name: "Bright Formula",
      price: 10,
      img: brightF,
    },
  ];
  return (
    <section className="row p-5 mt-5 text-center">
      <h1>Shop</h1>
      <hr />
      {productsData.map((product) => (
        <Products product={product}></Products>
      ))}
      <a
        href="https://firstsight.design/cherie/hair/shop/"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" class="btn btn-outline-dark pe-5 ps-5 mb-5">
          SHOP ALL
        </button>
      </a>{" "}
      <hr />
    </section>
  );
};

export default Shop;
