# React-E-commerece

This application consists some of the most commoon features of an e-commerce website. Users will be able to sign in, sign up, add or remove items from the cart, view the cart, and also use demo payment method integrated using Stripe.

As the application is a little complex, I used Redux in order to use the state (or store) "globally".
The following reducers are merged in the root reducer which forms the global store - 
1. Cart reducer
2. Directory reducer
3. Shop reducer
4. User reducer

These reducers are also accompanied with selecters that are used to get items out of the store in individual components using mapStateToProps method

For handling asynchronous requests, used redux-thunk initially to get the shop data from firestore. Next, used redux-saga to handle the same. The following sagas handle the asynchronous requests in the application - 
1. Fetch Collections: Fetches the data from Firestore and dispatches actions depending upon the state of the asynchronous call
2. Sign In: Listens for email sign in or google sign in and dispatches actions that represent the state of the sign in process


