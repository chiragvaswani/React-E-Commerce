// import React from "react";

// import "./collection-item.styles.scss";
// import { connect } from "react-redux";
// import { addItem } from "../../redux/cart/cart.actions";
// import CustomButton from "../custom-button/custom-button.component";

// const CollectionItem = ({ item, addItem }) => {
//   const { imageUrl, name, price } = item;
//   return (
//     <div className="collection-item">
//       <div
//         className="image"
//         style={{
//           backgroundImage: `url(${imageUrl})`,
//         }}
//       />
//       <div className="collection-footer">
//         <span className="name">{name}</span>
//         <span className="price">{price}</span>
//       </div>
//       <CustomButton onClick={() => addItem(item)} inverted>
//         Add to cart
//       </CustomButton>
//     </div>
//   );
// };
// // This component will get the addItem function as a prop.
// // Then we'll use this function by giving it the item argument that'll be the item we added to the cart
// // The addItem function will be executed with the item we passed in
// // This function is an action so it'll return an object with a type and payload
// // Then dispatch function will pass in that object with regular redux flow i.e. the reducer
// const mapDispatchToProps = (dispatch) => ({
//   addItem: (item) => dispatch(addItem(item)),
// });

// export default connect(null, mapDispatchToProps)(CollectionItem);

import React from "react";
import { connect } from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer,
} from "./collection-styles.styles";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;

  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addItem(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
