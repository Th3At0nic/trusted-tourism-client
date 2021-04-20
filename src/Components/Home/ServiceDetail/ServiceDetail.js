import React from "react";
import { Link } from "react-router-dom";
import "./ServiceDetail.css";

const ServiceDetail = ({ service }) => {
  const { _id, packageName, price, detail } = service;

  return (
    <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12 service-card mb-4">
      <div className="card package-box" style={{ width: "100%" }}>
        <div className="img-box">
          <img
            src={`data:image/png;base64, ${service.image.img}`}
            className="card-img-top"
            alt={packageName}
          />
        </div>

        <div className="card-body">
          <h4 className="text-theme">{packageName}</h4>
          <p className="card-text text-secondary">{detail}...</p>
        </div>

        <div className="card-footer d-flex justify-content-between">
          <span>${price}</span>
          <Link className="btn btn-info" to={"/checkout/" + _id}>
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
