import React from "react";
import "./Navigation.scss";

class Navigation extends React.Component {
  render() {
    return (
      <div class="topnav">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/about">About</Link>
      </div>
    );
  }
}

export default Navigation;
