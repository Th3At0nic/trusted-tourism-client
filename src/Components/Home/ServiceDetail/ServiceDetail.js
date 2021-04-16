import React from "react";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-6 pb-5 text-center">
      <h4>
        <div className="row">
          <div className="col">{service.name}</div>
          <small className="col text-secondary">${service.price}</small>
        </div>
      </h4>{" "}
      <br />
      <img style={{ height: "350px" }} src={service.img} alt="" />
      <p className="pt-2 text-secondary">{service.description}</p>
    </div>
  );
};

export default ServiceDetail;
