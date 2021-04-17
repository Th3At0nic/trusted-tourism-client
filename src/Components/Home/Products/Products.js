import React from "react";

const Products = ({ product }) => {
  return (
    <div className="col-md-3 text-center p-5">
      <img style={{ height: "400px" }} src={product.img} alt="" />
      <div className="pt-5">
        <h5>{product.name}</h5>
        <small className="text-secondary">${product.price}</small>
      </div>
    </div>
  );
};

export default Products;
