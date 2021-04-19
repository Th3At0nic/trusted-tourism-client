import React from "react";
import { Link } from "react-router-dom";
import img from "../../../images/bob.png";

const ServiceDetail = ({ service }) => {
  return (
    <div className="col-md-6 pb-5 text-center border border-1">
      <Link to="/appointment">
        <h4>
          <div className="row">
            <div className="col">{service.service}</div>
            <small className="col text-secondary">${service.cost}</small>
            <small className="col text-secondary">
              {service.space} space available
            </small>
          </div>
        </h4>{" "}
        <br />
        <div>
          {service.image ? (
            <img
              style={{ height: "350px" }}
              src={`data:image/png;base64, ${service.image.img}`}
              alt=""
            />
          ) : (
            <img
              style={{ height: "350px" }}
              className="img-fluid mb-3"
              src={img}
              alt=""
            />
          )}
        </div>
        <p className="pt-2 text-secondary">{service.detail}</p>
      </Link>
    </div>
  );
};

export default ServiceDetail;
