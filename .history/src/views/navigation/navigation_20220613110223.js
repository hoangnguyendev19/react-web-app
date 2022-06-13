import React from "react";
import "./Navigation.scss";
import { Link, NavLink } from "react-router-dom";

class Navigation extends React.Component {
  render() {
    return (
      <div class="topnav">
        {/* <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link> */}
        <NavLink to="/" activeClassName="active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </div>
    );
  }
}

export default Navigation;
