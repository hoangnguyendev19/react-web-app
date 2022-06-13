import React from "react";
import ChildComponents from "./ChildComponents";
import FormComponents from "./FormComponents";

class MyComponents extends React.Component {
  state = {
    name: "Chris Nguyen",
    class: "DHKHMT17B",
    school: "IUH",
    address: "Binh Dinh Province",
    student: [
      { mssv: "A1", class: "DHTH17A", branch: "CNTT" },
      { mssv: "B2", class: "DHMK17B", branch: "Marketing" },
      { mssv: "C3", class: "DHOT17C", branch: "IOT" },
    ],
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
        <h2 key={this.state.name}>Author: {this.state.name}</h2>
        <div className="className" key={this.state.class}>
          Class: {this.state.class}
        </div>
        <div className="schoolName">
          School: Industrial University Ho Chi Minh CiTy - {this.state.school}
        </div>
        <div className="addressName" key={this.state.address}>
          Address: {this.state.address}
        </div>
        <div>
          <input
            type="text"
            value={this.state.name}
            onChange={(event) => this.handleChangePress(event)}
          />
          <button type="Submit" onClick={() => this.handleClickButton()}>
            Click me
          </button>
        </div>
        <FormComponents list={this.state.student} />
        <ChildComponents list={this.state.student} />
      </>
    );
  }
}

export default MyComponents;
