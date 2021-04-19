import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ShowCheckoutProduct = ({ service }) => {
  const { _id, packageName, price, person, detail } = service;
  return (
    <div className="checkout-product-info shadow p-3 mb-5 bg-body rounded">
      <div className="inner-box d-flex align-items-center row">
        {/* <div className="img-box col-lg-4 col-md-4 col-sm-4 col-xs-12">
          <img
            src={`data:image/png;base64, ${service.image.img}`}
            className="card-img-top img-fluid"
            alt={packageName}
          />
        </div> */}
        <div className="detail col-lg-6 col-md-6 col-sm-6 col-xs-12">
          <h4 className="text-theme">
            {packageName} | {person} person{" "}
            <small className="text-secondary">| ${price}</small>{" "}
          </h4>
          <p className="text-secondary">{detail}</p>
        </div>
        <div className="close text-danger col-lg-2 col-md-2 col-sm-2 col-xs-12">
          <FontAwesomeIcon
            icon={["fas", "trash-alt"]}
            onClick={() => alert("Its for demo purposes")}
          />
        </div>
      </div>
    </div>
  );
};

export default ShowCheckoutProduct;
