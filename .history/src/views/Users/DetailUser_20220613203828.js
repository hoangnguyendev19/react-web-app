import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  componentDidMount() {
    let id = this.props.match.params.id;
    console.log("check id: ", id);
  }

  render() {
    return <div>Detail User</div>;
  }
}

export default withRouter(DetailUser);
