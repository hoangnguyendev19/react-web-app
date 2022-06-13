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

          <MyComponents />
        </header>
      </div>
    </Router>
  );
}

export default App;
