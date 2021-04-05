import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { setCurrentUser } from "./redux/user/user.actions";

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    // onAuthStateChanged takes a function as a parameter. The parameter of that function is the state of the user on auth or on our application
    // This connection is always open until the component is unmounted
    // It establishes a connection between the application anf Firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Listen to the userRef for the changes in the data. But, we also get the first state of the data which in this case is "snapShot"
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id, // Getting the id from the snapshot
            ...snapShot.data(), // Getting the data from the snapshot
          });
        });
      } else setCurrentUser(userAuth); // Setting the current user to null in the state if the user logs out
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth(); // closes the subscription
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

// dispatch is a way for redux to know that whatever action we're passing to it is an action object that it'll pass to every reducer
const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
