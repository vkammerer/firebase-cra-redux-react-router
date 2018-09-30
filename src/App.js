import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import app from "./base";

class App extends Component {
  state = { currentUser: null, isAuthenticated: true, isLoading: false };

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (!!user) {
        this.setState({
          currentUser: user,
          isAuthenticated: true,
          isLoading: false,
        });
      } else {
        this.setState({
          currentUser: null,
          isAuthenticated: false,
          isLoading: false,
        });
      }
    });
  }

  render() {
    const { isAuthenticated, isLoading } = this.state;

    if (isLoading) {
      return <p>Loading..</p>;
    }

    return (
      <Router>
        <div>
          <PrivateRoute
            exact
            path="/"
            component={Home}
            isAuthenticated={isAuthenticated}
          />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
        </div>
      </Router>
    );
  }
}

export default App;
