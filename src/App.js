import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./unnamed/Home"

function App() {
  return (
    <div className="App">
      <Router path="/test_deploy2">
        <Switch>
          <Route path="/">
            <Home />
            <Link to="/hello">Link</Link>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;