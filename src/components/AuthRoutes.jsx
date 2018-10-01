import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import { Route } from "react-router-dom";
import Page from "./Page";
import Auth from "./Auth";

class AuthRoutes extends Component {
  constructor(props) {
    super(props);
    this.redirectWithAuthentication();
  }
  componentDidUpdate() {
    this.redirectWithAuthentication();
  }
  redirectWithAuthentication = () => {
    if (this.props.location.pathname === "/login" && this.props.isAuthenticated)
      this.props.history.push("/");
    if (
      this.props.location.pathname !== "/login" &&
      !this.props.isAuthenticated
    )
      this.props.history.push("/login");
  };
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

export default withRouter(connect(mapStateToProps)(AuthRoutes));
