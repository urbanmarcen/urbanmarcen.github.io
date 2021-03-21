
import apiAccount from "services";

import {
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  UPDATE_USER_DATA 
} from "../constants.js";

const AccountActions = {
  // update account date - after some local changes
  updateUserData: userData => {
    return {
      type: UPDATE_USER_DATA,
      payload: userData
    };
  },
  // fetch user data from API service
  fetchAccount: () => {
    return (dispatch, getState) => {
      
      const { account } = getState();

      dispatch({
        type: FETCH_ACCOUNT,
        payload: {}
      });

      apiAccount.get({}).then( request=> {
          if (!request.result.error) {
            // update  data
            if (
              JSON.stringify(account.data) !==
              JSON.stringify(request.result.account)
            ) {
              dispatch(AccountActions.fetchAccountSuccess(request.result.account));
            }
          } else {
            dispatch(AccountActions.fetchAccountFailure(request.result));
          }
        })
        .catch(() => {
          dispatch(AccountActions.fetchAccountFailure('Error fetching data!'));
        });
    };
  },
  // account fetching success
  fetchAccountSuccess: account => {
    return {
      type: FETCH_ACCOUNT_SUCCESS,
      payload: account
    };
  },
  // account fetching error
  fetchAccountFailure: error => {
    return {
      type: FETCH_ACCOUNT_FAILURE,
      payload: error
    };
  },
 
};

export default AccountActions;
