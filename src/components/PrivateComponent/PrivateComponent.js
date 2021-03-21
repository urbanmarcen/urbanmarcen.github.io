import React from "react";

import { useTranslation } from "react-i18next";

// Materil Ui
import { 
  Typography, 
  Grid 
} from "@material-ui/core";



const PrivateComponent = props => {
  
  const { t } = useTranslation();

  return (
    <Grid container>
      <Grid item xs={12} align="center">
        <Typography variant="h1">
          {t("This page is show only for authenticated users.")}
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
      </Grid>
    </Grid>
  );
};

export default PrivateComponent;
