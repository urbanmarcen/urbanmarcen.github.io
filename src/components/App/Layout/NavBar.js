
import React from 'react';

import { useTranslation } from "react-i18next";

import { 
  useSelector
  //, useDispatch 
} from "react-redux";

import { Link as RouterLink } from 'react-router-dom';

// Material UI
import { 
  makeStyles 
} from '@material-ui/core/styles';

import {
    AppBar,
    Button,
    Grid,
    IconButton,
    Toolbar,
    Typography
} from "@material-ui/core";

import {
  IconMenu
} from 'utils/Icons'

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1
  },
  link: {
    marginRight: 30
  },
  toolbar: {}
}));

const NavBar = props => {

  const { t } = useTranslation();

  const { profile } = useSelector(state => ({
    profile: state.application.profile,
  }));

  const classes = useStyles();

  return (
    <AppBar position="absolute">
      <Toolbar className={classes.toolbar}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
        >
          <IconMenu />
        </IconButton>
        <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
          {t('Welcome, {{name}}', {name: profile.displayName} )}
        </Typography>

        <Grid>
          <Button component={RouterLink} to="/" className={classes.link} color="inherit">
            {t('Home')}
          </Button>
          <Button component={RouterLink} to="/spacex" className={classes.link}  color="inherit">
          {t('SPACEX feed')}
          </Button>
          <Button component={RouterLink} to="/form" className={classes.link}  color="inherit">
          {t('Form')}
          </Button>
          <Button component={RouterLink} to="/pagenotfound" className={classes.link}  color="inherit">
          {t('PageNotFound')}
          </Button>
          <Button component={RouterLink} to="/privatelink" className={classes.link}  color="inherit">
          {t('PrivateLink')}
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
    )
}


export default NavBar;
