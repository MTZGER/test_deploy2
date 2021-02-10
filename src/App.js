import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./unnamed/Home"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="https://mtzger.github.io/test_deploy2/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;