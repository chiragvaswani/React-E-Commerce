import React from "react";

import "./checkout-item.styles.scss";

// Will be passing the entire item instead of parts of it as props because we need the user to be able to add and remove items and the action to add items need the entire item as payload
const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => (
  <div className="checkout-item">
    <div className="image-container">
      <img src={imageUrl} alt="item" />
    </div>
    <span className="name">{name}</span>
    <span className="quantity">{quantity}</span>
    <span className="price">{price}</span>
    <div className="remove-button">&#10005;</div>
  </div>
);

export default CheckoutItem;