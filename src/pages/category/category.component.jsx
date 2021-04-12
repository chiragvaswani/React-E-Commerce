import React from "react";

import "./category.styles.scss";

import CollectionItem from "../../components/collection-item/collection-item.component";

const CategoryPage = ({ match }) => {
  console.log(match);
  return (
    <div className="category">
      <h2>CATEGORY</h2>
    </div>
  );
};

export default CategoryPage;
