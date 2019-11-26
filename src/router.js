import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./services/history";

import Home from "./pages/Home";

export default function Routes() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Home} />
    </Router>
  );
}
