import {
    FETCH_APPLICATION_PROFILE,
    FETCH_APPLICATION_PROFILE_SUCCESS,
    FETCH_APPLICATION_PROFILE_FAILURE,
    APP_SET_ONLINE
  } from "../constants.js";
  
  // initial store.application state
  const initialState = {
    welcomeMessage: 'Please and Thank you.',
    profile: {
      displayName: "Guest",
      initials: "",
      allowLogin: true,
      allowRegister: false
    },
    online: true,
    loading: false,
    error: null
  };
  
  const applicationReducer = (state = initialState, action) => {
  
    switch (action.type) {
      case FETCH_APPLICATION_PROFILE:
        return { ...state, loading: true, error: null };
  
      case FETCH_APPLICATION_PROFILE_SUCCESS:
        return { ...state, profile: action.payload, error: null, loading: false };
  
      case FETCH_APPLICATION_PROFILE_FAILURE:
        return {
          ...state,
          profile: initialState.profile,
          error: action.payload,
          loading: false
        };

      case APP_SET_ONLINE:
        return {
          ...state,
          online: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default applicationReducer;
  