import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

// place for all reducers
import account from "./reducers/account";
import application from "./reducers/application";

const hist = history => {
  return combineReducers({
    router: connectRouter(history),
    account,
    application
    // add more reducers
  });
}

export default hist
