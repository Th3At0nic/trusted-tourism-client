import React from "react";

const ShowMyOrders = (props) => {
  console.log(props);
  const {
    _id,
    name,
    quantity,
    totalPrice,
    discount,
    orderDate,
  } = props.dataObject;

  //Formating Date
  const dateFormating = (theDate) => {
    return new Date(theDate).toDateString("dd/MM/YY");
  };

  return (
    <tr>
      <td className="text-right">{name} </td>
      <td className="text-right">{_id} </td>
      <td className="text-left">{dateFormating(orderDate)} </td>
      <td className="text-right">${totalPrice} </td>
      <td className="text-right">${discount} </td>
      <td className="text-right">${totalPrice} </td>
      <td className="text-center">{quantity}</td>
      <td className="text-center">Cash</td>
      <td className="text-center">
        <span class="badge bg-primary">Cash on arrival</span>
      </td>
      <td className="text-center">
        <span class="badge bg-secondary">Booking Pending</span>
      </td>
    </tr>
  );
};

export default ShowMyOrders;
//// sorry to say first i started my project as a beauty parlour website,
//but then for some major issue at the last day i changed it to tourism website, so some name might be odd.
//so please consider my problem
