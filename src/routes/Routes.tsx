import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route exact path="/" render={() => <Redirect to="/movies" />} />
    <Route exact path="/movies" render={() => <div>Movies</div>} />
    <Route exact path="/snacks" render={() => <div>Snacks</div>} />
    <Route exact path="/error" render={() => <div>Error</div>} />
    <Route
      render={() => (
        <Redirect
          to={{
            pathname: "/error"
          }}
        />
      )}
    />
  </Switch>
);

export default Routes;
