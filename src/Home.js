import React, { Component } from "react";
import app from "./base";

class Home extends Component {
  handleSignOut = async event => {
    event.preventDefault();
    try {
      app.auth().signOut();
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <div onClick={this.handleSignOut}>handleSignOut</div>
      </div>
    );
  }
}

export default Home;
