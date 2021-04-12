import React from "react";

import "./collection.styles.scss";

import { connect } from "react-redux";
import { selectCollection } from "../../redux/shop/shop.selectors";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match }) => {
  console.log(match.params.collectionId);
  return (
    <div className="collection-page">
      <h2>COLLECTION</h2>
    </div>
  );
};

// ownProps here are the props that the CollectionPage component gets
// selectCollection(ownProps.match.params.collectionId) returns another function ie a selector and then we pass the state to that selector
const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default CollectionPage;
