import React from 'react';
import ReactDOM from 'react-dom';

// CSS import - remove
import 'assets/css/index.css';

// Components
import { App } from 'components';

import reportWebVitals from './reportWebVitals';

// Translations
import "./i18n";

// Redux
import { Provider } from "react-redux";
import { configureStore } from "./store";

// Router & history
import { ConnectedRouter } from "connected-react-router";
import { createBrowserHistory } from "history";




/*const loadApp = async () => {
  const module = await import("./components/App");
  return module.default;
};*/

const history = createBrowserHistory();

const render = async (store: any) => {
  
  const target = document.getElementById("root");
  //const App = await loadApp();

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
          <App />
      </ConnectedRouter>
    </Provider>,
    target
  );
};

(async function init() {
  render(configureStore);
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
