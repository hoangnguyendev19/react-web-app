import React from "react";
import axios from "axios";

class ListUsers extends React.Component {
  state = {
    ListUsers: [],
  };

  async componentDidMount() {
    // axios.get("https://reqres.in/api/users?page=1").then((response) => {
    //   console.log("Check response: ", response.data.data);
    // });
    const response = await axios.get("https://reqres.in/api/users?page=1");
    this.setState({
      ListUsers:
        response && response.data && response.data.data
          ? response.data.data
          : [],
    });
  }

  render() {
    let { ListUsers } = this.state;
    return (
      <div className="list-users">
        <h1 className="list-users__title">List Users For Companies</h1>
        <div className="list-users__content">
          {ListUsers &&
            ListUsers.length > 0 &&
            ListUsers.map((item, index) => {
              <div className="list-users__item" key={item.id}>
                {index + 1} - {item.first_name} {item.last_name}
              </div>;
            })}
        </div>
      </div>
    );
  }
}

export default ListUsers;
