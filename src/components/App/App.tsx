import React from 'react';
import logo from 'assets/media/logo.svg';
import 'assets/css/App.css';

import {
  APP_VERSION 
} from 'config';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Demo React project
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn to react
        </a>
      </header>
      <footer  className="App-footer">
        {APP_VERSION}
      </footer>
    </div>
  );
}

export default App;
