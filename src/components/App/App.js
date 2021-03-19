import React from 'react';
import { useSelector, useDispatch } from "react-redux";

// Material UI

import {
  Container, 
  Grid
} from "@material-ui/core";

import {
  APP_VERSION 
} from 'config';

const App = ( props ) => {

  const { application } = useSelector(state => ({
    application: state.application   
  }));

  return (
    <div className="App">
      <Container>
        <Grid>{application.welcomeMessage}</Grid>    
        <Grid>{APP_VERSION}</Grid>    
      </Container>
      
        
      
    </div>
  );
}

export default App;
