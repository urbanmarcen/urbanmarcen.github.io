import React, { useContext } from "react";

import { FormContext } from "./FormContext";

import { 
    Grid, 
    TextField
} from "@material-ui/core";

// Nested input component
const NestedInput = props => {

    // STATE OF DATA FROM CONTEX
    const formState = useContext(FormContext);
    const { dispatch, form } = formState; // current state and dispatch call
  
    function onChange(evt) {
      dispatch({
        type: 'UPDATE-CONTENT',
        payload: { title: evt.currentTarget.value }
      })
    }
  
    return (<>
      <TextField value={form.title} onChange={onChange} multiline variant="filled" color="secondary" fullWidth/>
      <Grid style={{marginLeft: 100}}>
      {props.children}
      </Grid> 
      </> 
    )
  }

  
  export default NestedInput;