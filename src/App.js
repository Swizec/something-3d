import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import SpinningCube from './SpinningCube';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div className="App-intro">
          <SpinningCube width={800} height={600} />
        </div>
      </div>
    );
  }
}

export default App;
