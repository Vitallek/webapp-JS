import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import Main from "./Main";
import Registration from "./Registration";
import GuestPanel from "./generalPanels/GuestPanel";

function App() {
  return (
    <Router>
      <Route path="/guest" exact render={(props) => <GuestPanel />} />
      <Route path="/registration" exact render={(props) => <Registration />} />
      <Route path="/" exact render={(props) => <Main />} />
    </Router>
  );
}

export default App;