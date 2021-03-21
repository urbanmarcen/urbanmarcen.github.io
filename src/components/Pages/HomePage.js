import React from "react";
import { useTranslation } from "react-i18next";

import { 
  Typography, 
  Grid 
} from "@material-ui/core";

const HomePage = props => {
  
  const { t } = useTranslation();

  //console.log(i18n);

  return (
    <Grid container justify="center">
      <Grid item xs={6} align="center">
        <Typography variant="h2" gutterBottom>
          {t("Welcome to my demo page.")}
        </Typography>
        {[1,2,3,4,5,6,7,8,9,10].map(c=> {
          return (
          <>
            <Typography variant="h6" key={'c'+c}>{t('Chapter {{chptr}}', {chptr: c})}</Typography>
            <Typography variant="body2" key={'c1'+c} gutterBottom>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s with the release of 
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
          </>
          )
        }
        
        )}
      </Grid>
    </Grid>
  );
};

export default HomePage;
