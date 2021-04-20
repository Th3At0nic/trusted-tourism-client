import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import SplitCardForm from "./SplitCardForm";

const stripePromise = loadStripe(
  "pk_test_51IeMtVLOoD8gn3ipaD1X3yiz7nR2IHVBJY89CK3jVHfaLtiQlnkWqwxcDcBGOUlM5R24QZYyj24iLxv90c4OkoN400IdKd9uWO"
);
const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <SplitCardForm handlePayment={handlePayment}></SplitCardForm>
    </Elements>
  );
};

export default ProcessPayment;
