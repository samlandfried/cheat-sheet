import React, { Component } from 'react';
import CheatSheet from 'components/CheatSheet';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cheat Sheets</h1>
        </header>
        <ul style={{ listStyle: 'none' }}>
          <li>
            <CheatSheet />
          </li>
        </ul>
      </div>
    );
  }
}

export default App;
