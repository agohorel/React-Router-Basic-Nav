import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";

import { Home, About, Contact, Navigation } from "./components";

const App = () => (
  <Router>
    <Navigation />
    <Switch>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/">
        <Home></Home>
      </Route>
    </Switch>
  </Router>
);

export default App;
