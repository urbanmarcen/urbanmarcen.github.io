import { 
  createStore, 
  applyMiddleware,  
  compose 
} from "redux";
import promise from "redux-promise";
import thunk from "redux-thunk";

import { createBrowserHistory } from "history";

import { routerMiddleware } from "connected-react-router";
import { createLogger } from "redux-logger";

// Reducers
import createRootReducer from "./reducers";

// Config
import { ENABLE_REDUX_LOGGER } from 'config';

// Logger Middleware
const logger = createLogger({
  collapsed: (getState, action, logEntry) => !logEntry.error
});


const history = createBrowserHistory();

const enhancer = (ENABLE_REDUX_LOGGER === true) 
  ? applyMiddleware(thunk, promise, logger, routerMiddleware(history))
  : applyMiddleware(thunk, promise, routerMiddleware(history));

/*if(ENABLE_REDUX_LOGGER === true) {
  const enhancer = applyMiddleware(thunk, promise, logger, routerMiddleware(history));
}
else {
  const enhancer = applyMiddleware(thunk, promise, routerMiddleware(history));
}*/


const store = createStore(createRootReducer(history), compose(enhancer));

export default store;
