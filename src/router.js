import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import history from "./services/history";

import Landing from "./pages/Landing";

export default function Routes() {
  return (
    <Router history={history}>
      <Route exact path="/" component={Landing} />
    </Router>
  );
}
