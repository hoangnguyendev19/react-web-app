import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

class DetailUser extends React.Component {
  state = {
    Users: [],
  };

  async componentDidMount() {
    let id = this.props.match.params.id;
    let response = await axios.get(`https://reqres.in/api/users?page=${id}`);
    this.setState({
      Users: response.data.data,
    });
  }

  render() {
    let { Users } = this.state;
    let isEmptyObj = Object.keys(Users).length === 0;
    return (
      <div className="detail-user">
        <h1 className="detail-user__title">Information User</h1>
        {isEmptyObj === false &&
          Users.map((item, index) => {
            return (
              <div className="detail-user__item" key={item.id}>
                <div>
                  Name: {item.first_name} {item.last_name}
                </div>
                <div>Email: {item.email}</div>
                <img src={item.avatar} />
              </div>
            );
          })}
      </div>
    );
  }
}

export default withRouter(DetailUser);
