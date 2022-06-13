import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    User: {},
  };

  async componentDidMount() {
    let id = this.props.match.params.id;
    let response = await axios.get(`https://reqres.in/api/users/${id}`);
    this.setState({
      User:
        response && response.data && response.data.data
          ? response.data.data
          : {},
    });
  }

  render() {
    let { Users } = this.state;
    let isEmptyObj = Object.keys(Users).length === 0;
    return (
      <div className="detail-user">
        <h1 className="detail-user__title">Information User</h1>
        return (
        {isEmptyObj === false && (
          <div className="detail-user__item">
            <div>
              Name: {user.first_name} {user.last_name}
            </div>
            <div>Email: {user.email}</div>
            <img src={user.avatar} />
          </div>
        )}
        )
      </div>
    );
  }
}

export default withRouter(DetailUser);
