import React, { useEffect, useState } from "react";

const ShowMyOrders = (props) => {
  const {
    _id,
    name,
    email,
    productName,
    quantity,
    totalPrice,
    discount,
    deliveryCharge,
    orderDate,
    orderNumber,
    status,
  } = props.dataObject;

  const [productInfo, setProductInfo] = useState({});

  //Formating Date
  const dateFormating = (theDate) => {
    return new Date(theDate).toDateString("dd/MM/YY");
  };

  return (
    <tr>
      <td className="text-left">{dateFormating(orderDate)} </td>
      <td className="text-right">${productName} </td>
      <td className="text-right">${productName} </td>
      <td className="text-right">${productName} </td>
      <td className="text-center">${productName}</td>
      <td className="text-center">{productName}</td>
      <td className="text-center">
        <span class="badge bg-primary">Cash on Delivery</span>
      </td>
      <td className="text-center">
        <span class="badge bg-secondary">Delivery Pending</span>
      </td>
    </tr>
  );
};

export default ShowMyOrders;
