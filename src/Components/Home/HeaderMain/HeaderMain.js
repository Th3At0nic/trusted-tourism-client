import React from "react";
import bigRoom from "../../../images/roombig1.jpg";

const HeaderMain = () => {
  return (
    <main style={{ height: "800px" }} className="row d-flex align-items-center">
      <div className="col-md-4 offset-md-1">
        <h1>
          It Doesn’t Matter <br /> If Your Life is Perfect <br /> as Long as
          Your Hair Color is.
        </h1>
        <br />
        <p className="text-secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,
          praesentium aliquid! Quam consequatur, temporibus enim, laudantium eos
          ab ut quos quisquam iure sapiente voluptatem itaque. Eaque, ex. Nobis,
          nisi libero!
        </p>
        <button className="btn btn-primary">Book Appointment</button>
      </div>
      <div className="col-md-6 offset-md-1">
        <img
          style={{ height: "600px" }}
          src={bigRoom}
          alt=""
          className="img-fluid"
        />
      </div>
    </main>
  );
};

export default HeaderMain;
