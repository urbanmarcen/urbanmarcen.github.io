import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// place for all reducers
import application from "./reducers/application";

const hist = history => {
  return combineReducers({
    router: connectRouter(history),
    application
    // add more reducers
  });
}

export default hist
