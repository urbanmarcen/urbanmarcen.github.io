import React from 'react';

import { useTranslation } from "react-i18next";

import {  
    Button,
    Grid, Typography
  } from "@material-ui/core";

// Config
import {
    APP_VERSION 
  } from 'config';

const Footer = (props) => {

    const { t, i18n } = useTranslation();

    function handleLanguageChange(lang) {
        i18n.changeLanguage(lang);
        localStorage.setItem("lng", lang);
      }

    return (
        <Grid container>
            <Grid item xs={2} container justify="flex-start" alignItems="center">
                <Typography variant="body2">
                {APP_VERSION}
                </Typography>
            </Grid>
            <Grid item xs={10} justify="flex-end" container>
                <Typography variant="body2">
                 {t('Languages')} {' : '}
                 <Button onClick={()=>handleLanguageChange('en')}>ENG</Button>
                 <Button onClick={()=>handleLanguageChange('si')}>SLO</Button>                
                </Typography>
            </Grid>
        </Grid>    
    )
}

export default Footer;