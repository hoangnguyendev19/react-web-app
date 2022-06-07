import React from "react";

class MyComponents extends React.Component {
  state = {
    name: "Chris Nguyen",
    class: "DHKHMT17B",
    school: "IUH",
    address: "Binh Dinh Province",
  };

  handleChangePress = (event) => {
    this.setState({
      name: event.target.value,
    });
  };

  handleClickButton = () => {
    alert("Clicked me !");
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
        <div>
          <input
            type="text"
            onChange={(event) => this.handleChangePress(event)}
          />
          <button type="Submit" onClick={() => this.handleClickButton()}>
            Click me
          </button>
        </div>
      </>
    );
  }
}

export default MyComponents;
