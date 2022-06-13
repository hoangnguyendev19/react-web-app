import React from "react";
import "./Navigation.scss";

class Navigation extends React.Component {
  render() {
    return (
      <div class="topnav">
        <a class="active" href="/">
          Home
        </a>
        <a href="/contact">Contact</a>
        <a href="/about">About</a>
      </div>
    );
  }
}

export default Navigation;
