import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/index";
import Priv from "./pages/privacy";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route path="/privacy" exact component={Priv} />
          <Route path="/" exact component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
