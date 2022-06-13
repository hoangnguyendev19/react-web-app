import logo from "./logo.svg";
import "./App.scss";
import MyComponents from "./Home/MyComponents";
import About from "./About/About";
import Contact from "./Contact/Contact";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navigation from "./navigation/Navigation";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Switch>
            <Route path="/" exact>
              <MyComponents />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/about">
              <About />
            </Route>
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
