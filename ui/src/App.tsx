import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { SampleRoute } from "./containers/SampleRoute";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Link to="/sample">Sample Route</Link>
        <Switch>
          <Route path="/sample">
            <SampleRoute />
          </Route>
          <Route path="/">Here i the start</Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
