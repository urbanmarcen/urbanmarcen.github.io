import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { 
  Typography, 
  Grid, 
  LinearProgress,
  List,
  ListSubheader,
  Paper
} from "@material-ui/core";

// Services
import { apiSpacex } from 'services';

import { Satelite } from './'

const SpaceX = props => {
  
  const { t } = useTranslation();

  const [ data, setData ] = useState(props.data)
  const [ loading, setLoading ] = useState(false)

  // initial effect
  useEffect(()=>{
    loadData();
  }, [])


  function loadData() {
    setLoading(true);
    apiSpacex.get({}).then(request => {
      if(!request.error) {
        setData(request);
      }
      setLoading(false);
    }).catch(()=>{});
  }

  return (
    <Grid container justify="center">
      <Grid item xs={6} align="center">
        <Typography variant="h4">
          {t("SpaceX Starlink Satelites")}
        </Typography>
        {loading && <LinearProgress/>}

        {!loading && data.length === 0  && <Typography color="error">{t('Data not loaded')}</Typography>}
        
        {!loading && data.length > 0  && <>
          <Typography color="secondary" variant="body2">
              {t('The list contains {{num}} satelites.', {num: data.length})}
          </Typography>
          <Paper>
            <List dense
              subheader={
                <ListSubheader component="div" id="nested-list-subheader">
                  {t('Satelite name, version & launch date')}
                </ListSubheader>
              }
            >
              {data.map((sat, idx)=><Satelite key={sat.id} satdata={sat} idx={idx+1}/>)}
            </List>
          </Paper>
          </>}
      </Grid>
    </Grid>
  );
};

SpaceX.defaultProps = {
  data: []
}


export default SpaceX;
