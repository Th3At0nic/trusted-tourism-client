import React, { useEffect, useState } from "react";
// import hairCut from "../../../images/haircut.jpg";
// import clipperCut from "../../../images/anna.png";
// import signatureCut from "../../../images/signature.jpg";
// import bangTrim from "../../../images/bangtrim.jpg";
// import kidsHirCut from "../../../images/kidshaircut.jpg";
// import scalpMassage from "../../../images/scalp.jpg";
import ServiceDetail from "../ServiceDetail/ServiceDetail";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  // const services = [
  //   {
  //     service: "Clipper Cut",
  //     cost: 30,
  //     img: clipperCut,
  //     space: 10,
  //     detail:
  //       "A haircut using clippers to achieve an ultra-short design. (30 min)",
  //   },
  //   {
  //     service: "Clipper Cut",
  //     cost: 30,
  //     img: clipperCut,
  //     space: 10,
  //     detail:
  //       "A haircut using clippers to achieve an ultra-short design. (30 min)",
  //   },
  //   {
  //     service: "Clipper Cut",
  //     cost: 30,
  //     img: clipperCut,
  //     space: 10,
  //     detail:
  //       "A haircut using clippers to achieve an ultra-short design. (30 min)",
  //   },
  //   {
  //     service: "Clipper Cut",
  //     cost: 30,
  //     img: clipperCut,
  //     space: 10,
  //     detail:
  //       "A haircut using clippers to achieve an ultra-short design. (30 min)",
  //   },
  //   {
  //     service: "Clipper Cut",
  //     cost: 30,
  //     img: clipperCut,
  //     space: 10,
  //     detail:
  //       "A haircut using clippers to achieve an ultra-short design. (30 min)",
  //   },
  //   {
  //     service: "Clipper Cut",
  //     cost: 30,
  //     img: clipperCut,
  //     space: 10,
  //     detail:
  //       "A haircut using clippers to achieve an ultra-short design. (30 min)",
  //   },
  // ];

  useEffect(() => {
    fetch("http://localhost:5003/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <section className="mt-5 pt-5 mb-5 p-5">
      <div className="text-center pb-5">
        <p className="text-primary">OUR SERVICES</p>
        <h1>Service Menu</h1>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
        <div className="row w-75">
          {services.map((service) => (
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
