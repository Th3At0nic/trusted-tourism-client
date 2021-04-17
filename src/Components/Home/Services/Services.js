import React from "react";
import hairCut from "../../../images/haircut.jpg";
import clipperCut from "../../../images/clippercut.jpg";
import signatureCut from "../../../images/signature.jpg";
import bangTrim from "../../../images/bangtrim.jpg";
import kidsHirCut from "../../../images/kidshaircut.jpg";
import scalpMassage from "../../../images/scalp.jpg";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { Link } from "react-router-dom";

const Services = () => {
  const serviceData = [
    {
      name: "Clipper Cut",
      price: 30,
      img: clipperCut,
      description:
        "A haircut using clippers to achieve an ultra-short design. (30 min)",
    },
    {
      name: "Hair Cut",
      price: 39,
      img: hairCut,
      description:
        "A haircut, trim or shape on anyone over the age of 10. (60 min)",
    },
    {
      name: "Signature Haircut",
      price: 49,
      img: signatureCut,
      description:
        "A haircut, trim, shape on anyone over the age of 10 with a customized conditioning treatment. (1 hr 15 min)",
    },
    {
      name: "Bang Trim",
      price: 19,
      img: bangTrim,
      description:
        "A trim on the bang area. Shampoo, conditioner and scalp massage not included. (15 min)",
    },
    {
      name: "Bang Trim & massage",
      price: 19,
      img: scalpMassage,
      description:
        "A trim on the bang area. Shampoo, conditioner and scalp massage. (15 min)",
    },
    {
      name: "Kids HairCut",
      price: 20,
      img: kidsHirCut,
      description: "A haircut on a child age 10 & under. (30 min)",
    },
  ];

  return (
    <section className="mt-5 pt-5 mb-5 p-5">
      <div className="text-center pb-5">
        <p className="text-primary">OUR SERVICES</p>
        <h1>Service Menu</h1>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {serviceData.map((service) => (
            <ServiceDetail service={service}></ServiceDetail>
          ))}
        </div>
      </div>
      <div className="text-center">
        <Link to="/appointment">
          <button type="button" class="btn btn-outline-dark pe-5 ps-5 m-5">
            BOOK APPOINTMENT
          </button>
        </Link>
      </div>
      <hr />
    </section>
  );
};

export default Services;
