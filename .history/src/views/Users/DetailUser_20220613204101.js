import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  async componentDidMount() {
    let id = this.props.match.params.id;
    let response = await axios.get(`https://reqres.in/api/users?page=${id}`);
    console.log("check response: ", response);
  }

  render() {
    return <div>Detail User</div>;
  }
}

export default withRouter(DetailUser);
