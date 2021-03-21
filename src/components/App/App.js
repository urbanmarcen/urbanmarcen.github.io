import React from 'react';

import { BrowserRouter } from "react-router-dom";


// Material UI
import { 
  makeStyles ,
  MuiThemeProvider
} from '@material-ui/core/styles';

import {  
  Grid
} from "@material-ui/core";


// Components
import {
  NavBar, 
  Footer
} from './Layout';

import {
  ToolbarSpacer
} from 'utils';

// Main application router
import AppRouter from './AppRouter';

// Load custom theme
import myTheme from "./Theme";

const useStyles = makeStyles((theme) => ({
  root: {   
    
  },
  main: {
    height: "calc(100vh - 105px)",
    flexGrow: 1,
    overflow: 'hidden',
    overflowY: 'scroll'
  },
  footer: {
    flexGrow: 0, 
    flexBasis: 30,   
    backgroundColor: "#ebebeb",
    textAlign: 'center'
  }
}));

const App = ( props ) => {

  const classes = useStyles();

  React.useEffect(()=>{
    return () => {}
  },[])

  return (
    <div className={classes.root}>
      <MuiThemeProvider theme={myTheme}>      
        <BrowserRouter basename="/#/">
        <NavBar />
        <ToolbarSpacer/>
        
          <Grid className={classes.main}>
            <AppRouter />
          </Grid>
        </BrowserRouter>
        <Grid className={classes.footer}>
          <Footer />
        </Grid>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
