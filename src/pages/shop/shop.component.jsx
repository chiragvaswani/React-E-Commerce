import React from "react";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { selectCollections } from "../../redux/shop/shop.selectors";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const ShopPage = ({ collections }) => (
  <div className="shop-page">
    {collections.map(({ id, ...OtherCollectionProps }) => (
      <CollectionPreview key={id} {...OtherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(ShopPage);
