import React from "react";
import "./collections-overview.styles.scss";

import CollectionPreview from "../collection-preview/collection-preview.component";

import { selectCollections } from "../../redux/shop/shop.selectors";

import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

const CollectionsOverview = ({ collections }) => (
  <div className="collections-overview">
    {collections.map(({ id, ...OtherCollectionProps }) => (
      <CollectionPreview key={id} {...OtherCollectionProps} />
    ))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  collections: selectCollections,
});

export default connect(mapStateToProps)(CollectionsOverview);
