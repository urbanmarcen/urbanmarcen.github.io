import { apiAccount } from "services";

// 
import {
  FETCH_APPLICATION_PROFILE_SUCCESS,
  FETCH_APPLICATION_PROFILE_FAILURE
} from "../constants.js";

const ApplicationActions = {
  fetchApplicationProfile: () => {
    return dispatch => {
        
      apiAccount.get().then(request => {
        if (request.status !== 400 && !request.result.error) {
          dispatch(
            ApplicationActions.fetchApplicationProfileSuccess(
              request.result.profile
            )
          );
        } else {
          dispatch(
            ApplicationActions.fetchApplicationProfileFailure(request.result)
          );
        }    
      })
        
    }
  },

  fetchApplicationProfileSuccess: account => {
    return {
      type: FETCH_APPLICATION_PROFILE_SUCCESS,
      payload: account
    };
  },

  fetchApplicationProfileFailure: error => {
    return {
      type: FETCH_APPLICATION_PROFILE_FAILURE,
      payload: error
    };
  }
};

export default ApplicationActions;
