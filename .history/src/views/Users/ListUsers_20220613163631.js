import React from "react";
import axios from "axios";

class ListUsers extends React.Component {
  componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=1").then((response) => {
    //   console.log("Check response: ", response.data.data);
    // });
    let GetData = async () => {
      const response = await axios.get("https://reqres.in/api/users?page=1");
      console.log("Check response: ", response.data.data);
    };
  }

  render() {
    return <div>List Users For Companies</div>;
  }
}

export default ListUsers;
