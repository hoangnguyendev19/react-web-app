import React from "react";
import axios from "axios";

class ListUsers extends React.Component {
  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=2").then((response) => {
      console.log("Check response: ", response);
    });
  }

  render() {
    return <div>List Users For Companies</div>;
  }
}

export default ListUsers;
