import React from "react";

import "./collection.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CollectionPage = ({ match }) => {
  console.log(match);
  return (
    <div className="collection-page">
      <h2>COLLECTION</h2>
    </div>
  );
};

export default CollectionPage;
