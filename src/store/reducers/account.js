import {
  LOGIN_USER,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  FETCH_ACCOUNT,
  FETCH_ACCOUNT_SUCCESS,
  FETCH_ACCOUNT_FAILURE,
  ME_FROM_TOKEN,
  ME_FROM_TOKEN_SUCCESS,
  ME_FROM_TOKEN_FAILURE,
  RESET_ME,
} from "../constants.js";

const initialState = {
  data: {}, 
  error: null,
  loading: false,
  isAuthenticated: false,  
  acl: {},
  token: null
};

const accountReducer = (state = initialState, action) => {
  

  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loading: true, error: null };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        token: action.payload,
        error: null,
        loading: false
      };

    case LOGIN_USER_FAILURE: // return error and make loading = false
      return {
        ...state,
        token: null,
        error: action.payload,
        loading: false,
        isAuthenticated: false
      };

    case RESET_ME:
      return {
        ...state,
        acl: {},
        data: {},
        token: null,
        error: null,
        loading: false,
        isAuthenticated: false
      };

    case ME_FROM_TOKEN:
      return { ...state, loading: true };

    case ME_FROM_TOKEN_SUCCESS:
      
      return {
        ...state,       
        data: action.payload.user,
        error: null,
        isAuthenticated: true,
        loading: false
      };

    case ME_FROM_TOKEN_FAILURE: // return error and make loading = false
      
      return {
        ...state,
        data: {},
        acl: {},
        token: null,
        error: action.payload,
        isAuthenticated: false,
        loading: false
      };

    case FETCH_ACCOUNT:
      return { ...state, loading: true };

    case FETCH_ACCOUNT_SUCCESS:
      return { ...state, data_full: action.payload.user };

    case FETCH_ACCOUNT_FAILURE: // return error and make loading = false
      return { ...state, data: {}, error: action.payload };


    default:
      return state;
  }
};

export default accountReducer;
