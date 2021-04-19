import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

// To select all the collections
export const selectCollections = createSelector(
  [selectShop],
  (shop) => shop.collections
);

// Since SHOP_DATA is now an object, we cannot map over it. So we define a new selector
// that takes in the normalised data object, gets all the keys out of it, and returns an array with
// all the items of that particular key so that collections-overview component can iterate
// over the array of collections and render CollectionPreview component by mapping on the
// array of collections
export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  (collections) =>
    collections ? Object.keys(collections).map((key) => collections[key]) : []
);

// To select one collection based on the provided collection id
// This function returns another function
export const selectCollection = (collectionUrlParam) =>
  createSelector([selectCollections], (collections) =>
    collections ? collections[collectionUrlParam] : null
  );

export const selectIsCollectionFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
);
