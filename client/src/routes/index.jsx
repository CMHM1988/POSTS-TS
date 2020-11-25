import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routes";

export const Pages = () => {
   return (
      <Switch>
         {
            routes.map((route, index) =>
               <Route
                  exact
                  key={index}
                  path={route.path}
                  component={route.component}
               />
            )
         }
      </Switch>
   );
};
