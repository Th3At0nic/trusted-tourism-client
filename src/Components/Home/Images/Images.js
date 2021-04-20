import React from "react";

const Images = ({ product }) => {
  return (
    <div className="col-md-3 text-center p-4">
      <img style={{ height: "400px" }} src={product.img} alt="" />
      <div className="pt-4">
        <h5>{product.name}</h5>
      </div>
    </div>
  );
};

export default Images;
