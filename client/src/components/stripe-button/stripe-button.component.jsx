import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51IfidgSJBws3dWVDWIrbAoGWB97aMVkm6Pz8C26LuCUI3JTOzA9EjDcByXOmO5nRadeAFSFtMXjaoARKe8TWjAoX00Hv6OHZlx";

  const onToken = (token) => {
    axios({
      url: "http://localhost:5000/payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
        description: "This was a test payment.",
      },
    })
      .then((response) => {
        alert("Payment Successful!");
      })
      .catch((error) => {
        console.log("Payment Error", error);
        alert(
          "There was an issue with your payment. Please make sure your credentials are correct."
        );
      });
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
