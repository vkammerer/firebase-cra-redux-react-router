import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Page from "./Page";
import Auth from "./Auth";

class Routes extends Component {
  componentDidMount() {
    if (this.props.location.pathname === "/login" && this.props.isAuthenticated)
      this.props.history.push("/");
    if (this.props.location.pathname === "/" && !this.props.isAuthenticated)
      this.props.history.push("/login");
  }
  componentDidUpdate(prevProps) {
    if (!prevProps.isAuthenticated && this.props.isAuthenticated)
      this.props.history.push("/");
    if (prevProps.isAuthenticated && !this.props.isAuthenticated)
      this.props.history.push("/login");
  }
  render() {
    return (
      <div>
        <Route exact path="/" component={Page} />
        <Route exact path="/login" component={Auth} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
});

export default withRouter(connect(mapStateToProps)(Routes));
