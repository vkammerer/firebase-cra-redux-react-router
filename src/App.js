import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import { listenToAuth } from "./actions/auth";
import { listenToArticles } from "./actions/articles";
import Routes from "./components/Routes";

export class App extends Component {
  componentWillMount() {
    store.dispatch(listenToAuth());
    store.dispatch(listenToArticles());
  }
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}
