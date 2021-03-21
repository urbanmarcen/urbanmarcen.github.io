import React from "react";
import { useTranslation } from "react-i18next";

import { 
  Typography, 
  Grid 
} from "@material-ui/core";

import { IconVeryDissatisfied } from "utils/Icons";

const PageNotFound = props => {
  
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12} align="center">
        <Typography variant="h6">
          {t("The page you requested was not found!")}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <IconVeryDissatisfied />
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
