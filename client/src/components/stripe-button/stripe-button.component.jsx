import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IfidgSJBws3dWVDWIrbAoGWB97aMVkm6Pz8C26LuCUI3JTOzA9EjDcByXOmO5nRadeAFSFtMXjaoARKe8TWjAoX00Hv6OHZlx";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful!");
  };

  //
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN clothing"
      billingAddress
      shippingAddress
      img="https://svgshare.com/i/CUz.png"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken} // We pass this to the backend to process the payment
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
