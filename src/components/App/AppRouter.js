import React, { Fragment } from "react";

import { Route, Switch } from "react-router-dom";


import { PrivateRoute } from "utils";

// Components
import { HomePage, PageNotFound  } from "components/Pages";
import { SpaceX  } from "components/SpaceX";
import { Form  } from "components/Form";
import { PrivateComponent  } from "components/PrivateComponent";

const AppRouter = props => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/spacex" component={SpaceX} />
        <Route path="/form" component={Form} />
        <PrivateRoute path="/privatelink" component={PrivateComponent} />
        <Route component={PageNotFound} />
      </Switch>
    </>
  );
};

export default AppRouter;
