import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

// To select all the collections
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// To select one collection based on the provided collection id
// This function returns another function
export const selectCollection = (collectionUrlParam) =>
  createSelector(
    [selectCollections],
    (collections) => collections[collectionUrlParam]
  );
