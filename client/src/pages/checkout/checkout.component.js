import React from "react";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutComponent from "../../components/stripe-button/stripe-button.component";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <header-block>
        <span>Product</span>
      </header-block>
      <header-block>
        <span>Description</span>
      </header-block>
      <header-block>
        <span>Quantity</span>
      </header-block>
      <header-block>
        <span>Price</span>
      </header-block>
      <header-block>
        <span>Remove</span>
      </header-block>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem id={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>Total: ${total}</span>
    </div>
    <div className="test-warning">
      *Please use the following credit card for test payment
      <br />
      4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
    </div>
    <StripeCheckoutComponent price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckoutPage);
