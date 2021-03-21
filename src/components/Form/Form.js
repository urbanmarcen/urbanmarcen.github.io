import React, { useContext } from "react";
import { useTranslation } from "react-i18next";

import { 
  Typography, 
  Grid
} from "@material-ui/core";

// Content Context
import { FormProvider, FormContext } from "./FormContext";
import { NestedInput } from "./";

const FormContainer = props => {
  
  const { t } = useTranslation();

  // STATE OF DATA FROM CONTEX
  const formState = useContext(FormContext);
  const { dispatch, form } = formState;

  return (
    <Grid container>
      <Grid item xs={12} align="center">
        <Typography variant="h4">
          {t("Internal Context API example")}
        </Typography>
        
        <Typography variant="body2">
          {t('All complex multi level UI components can use separate Context API with internal dispatch. No need to use Redux if the state is not needed globaly by the application. All subccomponents have access to the same data instance in dispatch options!')}
        </Typography>

        <Typography variant="body1">{t('7 nested components using the same context data as source')}</Typography>
        
      </Grid>
      <Grid item xs={12} align="">
        <NestedInput>
          <NestedInput>
            <NestedInput>
              <NestedInput>
                <NestedInput>
                  <NestedInput>
                    <NestedInput>
                      <NestedInput />
                    </NestedInput>
                  </NestedInput>
                </NestedInput>
              </NestedInput>
            </NestedInput>
          </NestedInput>
        </NestedInput>
      </Grid>
    </Grid>
  );
};


const Form = props => {
  return (
    <FormProvider>
      <FormContainer {...props} />
    </FormProvider>
  );
};

export default Form;
