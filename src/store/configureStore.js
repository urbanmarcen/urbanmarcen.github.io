import { 
  createStore, 
  applyMiddleware,  
  compose 
} from "redux";

import { createBrowserHistory } from "history";
import promise from "redux-promise";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import { routerMiddleware } from "connected-react-router";

// Reducers
import createRootReducer from "./reducers";

// Logger Middleware
/*
const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
});*/

const history = createBrowserHistory();


// with logger middleware - optional
//const enhancer = applyMiddleware(thunk, promise, logger, routerMiddleware(history));

// withouth logger middleware
const enhancer = applyMiddleware(thunk, promise, routerMiddleware(history));

const store = createStore(createRootReducer(history), compose(enhancer));

export default store;
