import React from "react";
import img from "../../images/passenger.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ShowCheckoutProduct = ({ service }) => {
  console.log(service);
  const { _id, packageName, price, person, detail } = service;
  return (
    <div className="checkout-product-info shadow p-3 mb-5 bg-body rounded">
      <div className="inner-box d-flex align-items-center row">
        <div className="img-box  col ">
          {service.image ? (
            <img
              style={{ height: "300px" }}
              src={`data:image/png;base64, ${service.image.img}`}
              alt=""
            />
          ) : (
            <img
              style={{ height: "300px" }}
              className="img-fluid mb-3"
              src={img}
              alt=""
            />
          )}
        </div>
        <div className="detail col-md-5 ">
          <h4 className="text-secondary">
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
//// sorry to say first i started my project as a beauty parlour website,
//but then for some major issue at the last day i changed it to tourism website, so some name might be odd.
//so please consider my problem
