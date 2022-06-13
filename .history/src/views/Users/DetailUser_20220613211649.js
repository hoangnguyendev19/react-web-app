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
    let { User } = this.state;
    let isEmptyObj = Object.keys(User).length === 0;
    return (
      <div className="detail-user">
        <h1 className="detail-user__title">Information User</h1>
        {isEmptyObj === false && (
          <div className="detail-user__item">
            <div>
              Name: {User.first_name} {User.last_name}
            </div>
            <div>Email: {User.email}</div>
            <div className="detail-user__img">
              <img src={User.avatar} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withRouter(DetailUser);
