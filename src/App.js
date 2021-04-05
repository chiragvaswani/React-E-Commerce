import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    // onAuthStateChanged takes a function as a parameter. The parameter of that function is the state of the user on auth or on our application
    // This connection is always open until the component is unmounted
    // It establishes a connection between the application anf Firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // Listen to the userRef for the changes in the data. But, we also get the first state of the data which in this case is "snapShot"
        userRef.onSnapshot((snapShot) => {
          this.setState(
            {
              currentUser: {
                id: snapShot.id, // Getting the id from the snapshot
                ...snapShot.data(), // Getting the data from the snapshot
              },
            },
            () => {
              console.log(this.state);
            }
          );
        });
      } else
        this.setState({ currentUser: userAuth }, () => console.log(this.state)); // Setting the current user to null in the state if the user logs out
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

export default App;
