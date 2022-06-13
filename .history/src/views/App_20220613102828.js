import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./About/ChildComponents";
import FormComponents from "./Contact/FormComponents";
import ChildComponents from "./Home/MyComponents";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./navigation/navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <Switch>
        <Route path="/">
          <MyComponents />
        </Route>
        <Route path="/contact">
          <FormComponents />
        </Route>
        <Route path="/about">
          <ChildComponents />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
