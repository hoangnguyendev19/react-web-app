import React from "react";

class MyComponents extends React.Component {
  state = {
    name: "Chris Nguyen",
    class: "DHKHMT17B",
    school: "IUH",
    address: "Binh Dinh Province",
  };
  render() {
    return (
      <>
        <h2>Author: {this.state.name}</h2>
        <div className="className">Class: {this.state.class}</div>
        <div className="schoolName">
          School: Industrial University Ho Chi Minh CiTy - {this.state.school}
        </div>
        <div className="addressName">Address: {this.state.address}</div>
      </>
    );
  }
}

export default MyComponents;
