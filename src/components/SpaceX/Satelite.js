import React, { useState } from "react";


import { 
  ListItem, ListItemSecondaryAction, ListItemText, Typography
} from "@material-ui/core";


const Satelite = props => {
  
  const [ satdata, setSatdata ] = useState(props.satdata)  
  
  //console.log(loading, data);

  return (
    <ListItem button>
        <ListItemText>
            {props.idx}{' - '}{satdata.spaceTrack.OBJECT_NAME} {" "}
            <Typography component="span" color="secondary" variant="caption">({satdata.version})</Typography>
        </ListItemText>
        <ListItemSecondaryAction>
            <Typography variant="caption">
                {satdata.spaceTrack.LAUNCH_DATE}</Typography>
                </ListItemSecondaryAction>
    </ListItem>
  );
};

Satelite.defaultProps = {
  satdata: {}
}


export default Satelite;
