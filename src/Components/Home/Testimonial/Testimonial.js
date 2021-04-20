import React from "react";
import img from "../../../images/user.png";

const Testimonial = ({ testimonial }) => {
  const { detail, name, from } = testimonial;
  return (
    <div className="card shadow-sm">
      <div className="card-body">
        <p className="card-text ">{detail}</p>
      </div>
      <div className="card-footer d-flex  align-items-center">
        <img className="mx-3" src={img} alt="" width="60" />
        <div>
          <h6 className="text-primary">{name}</h6>
          <p className="m-0 text-secondary">{from}</p>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Testimonial;
