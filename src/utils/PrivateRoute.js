import React from "react";
import { Route, useHistory } from "react-router-dom";
import { Grid, LinearProgress, Typography } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  
  const { t } = useTranslation();
  const history = useHistory();

  // get data form redux
  const { isAuthenticated, loading, token } = useSelector(state => ({
    isAuthenticated: state.account.isAuthenticated,
    loading: state.account.loading,
    token: state.account.token
  }));

  console.log(token);

  if (loading === true && isAuthenticated === false) return null;

  if (loading === false && isAuthenticated === false && token === null) {
    
    setTimeout( ()=>history.push("/"), 3000);
  }

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Grid container>
            <Grid item xs={12} style={{ marginTop: 30 }}>
              <LinearProgress />
            </Grid>
            <Grid item align="center" xs={12}>
              <Typography>
              {t("Validation in progress ... If the user is logged-in, process the link else redirect to login!")}
              </Typography>
            </Grid>
          </Grid>
        )
      }
    />
  );
};

export default PrivateRoute;
