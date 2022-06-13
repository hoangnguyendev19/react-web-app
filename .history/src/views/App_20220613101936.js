import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./About/ChildComponents";
import FormComponents from "./Contact/FormComponents";
import ChildComponents from "./Home/MyComponents";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Hello World from Viet Nam</p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MyComponents />
        </header>
      </div>
    </Router>
  );
}

export default App;
