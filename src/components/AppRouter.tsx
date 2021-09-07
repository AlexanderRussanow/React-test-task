import React from "react";
import { Route, Switch } from "react-router";
import { Redirect } from "react-router-dom";
import { useSelectorType } from "../hooks/useSelectorType";
import { privateRoutes, publicRoutes, RouteNames } from "../routes";

const AppRouter = () => {
  const { isAuth } = useSelectorType((state) => state.authReducer);
  return isAuth ? (
    <Switch>
      {privateRoutes.map((r) => (
        <Route key={r.path} {...r} />
      ))}
      <Redirect to={RouteNames.EVENT} />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map((r) => (
        <Route key={r.path} {...r} />
      ))}
      <Redirect to={RouteNames.LOGIN} />
    </Switch>
  );
};

export default AppRouter;
