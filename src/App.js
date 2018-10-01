import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { listenToAuth } from "./actions/auth";
import { listenToArticles } from "./actions/articles";
import AuthRoutes from "./components/AuthRoutes";

export class App extends Component {
  componentWillMount() {
    store.dispatch(listenToAuth());
    store.dispatch(listenToArticles());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AuthRoutes />
        </Router>
      </Provider>
    );
  }
}
