import React, { Component } from 'react';
import CheatSheet from 'components/CheatSheet';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Add a Cheat Sheet</h1>
        </header>
        <CheatSheet />
      </div>
    );
  }
}

export default App;
