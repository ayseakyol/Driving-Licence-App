import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./App.css";
// import { Link, Route, Switch } from "react-router-dom";
// import withAuth from "./withAuth";
import Home from "./Home";
// import Secret from "./Secret";
// import Login from "./Login";
import FreeTest from "./components/freeTest/FreeTest";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/freetest" component={FreeTest} />
          <Redirect to="/" />
        </Switch>

        {/* <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/secret">Secret</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/secret" component={withAuth(Secret)} />
          <Route path="/login" component={Login} />
        </Switch> */}
      </Router>
    );
  }
}

export default App;
