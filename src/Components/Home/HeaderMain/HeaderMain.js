import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/appointment">
          <button type="button" class="btn btn-outline-dark pe-5 ps-5">
            BOOK APPOINTMENT
          </button>
        </Link>
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
