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
          <li
            tabIndex="1"
            onClick={this.newSheet.bind(this)}
            onKeyUp={this.newSheet.bind(this)}
          >
            + Cheat Sheet
          </li>
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

  newSheet(event) {
    if (event && event.key && event.key !== ' ' && event.key !== 'Enter') return;

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
