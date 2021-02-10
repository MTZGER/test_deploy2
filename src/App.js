import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./unnamed/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/test_deploy2/">
            <Home />
          </Route>

          <Route path="/hello">
            <h1>HELLO</h1>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;