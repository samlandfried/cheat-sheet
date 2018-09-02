import React, { Component } from 'react';
import CheatSheet from 'components/CheatSheet';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sheetId: 0,
      sheets: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Cheat Sheets</h1>
        </header>
        <ul style={{ listStyle: 'none' }}>
          {
            this.state.sheets.map( sheet => (
              <li key={sheet.id}>
                <CheatSheet />
              </li>
            ))
          }
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.newSheet();
  }

  newSheet() {
    const nextId = this.state.sheetId + 1;

    if (this.state.sheets.length) {
      const sheets = [...this.state.sheets];

      sheets.unshift({
        id: nextId,
      })

      this.setState({
        sheetId: nextId,
        sheets,
      });
    }
    else {
      this.setState({
        sheetId: nextId,
        sheets: [{
          id: nextId,
        }],
      });
    }
  }
}

export default App;
