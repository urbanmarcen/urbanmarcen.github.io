import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// CSS - only main overrides
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


const history = createBrowserHistory();

const render = async (store: any) => {
  
  const target = document.getElementById("root");
  //const App = await loadApp();

  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <BrowserRouter basename="/#/">
          <App />
        </BrowserRouter>
      </ConnectedRouter>
    </Provider>,
    target
  );
};

(async function init() {
  render(configureStore);
})();


reportWebVitals();
