import * as React from 'react';
import './App.css';
import { Login } from './components/pages/Consumer/Login/Login';

function App() {
  return (
    <div className="web-app">
      <Login />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Addresser House
        </a>
      </header> */}
    </div>
  );
}

export default App;
