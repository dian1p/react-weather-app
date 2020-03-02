import React from 'react';
import Weather from './Weather';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
        <a className="Source"href="https://github.com/dian1p/react-weather-app"
        target="_blank" rel="noopener noreferrer">Open Source GitHub</a>by Dian 
        </footer>
      </div>
    </div>
  );
}

export default App;
