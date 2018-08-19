import React, { Component } from 'react';
import CheatStep from 'components/CheatStep';

class CheatSheet extends Component {
  render() {
    return (
      <div>
        <h4 className="cheat-sheet-title">New Cheat Sheet</h4>
        <div className="cheat-steps">
          <CheatStep handleEnter={this.handleEnter}/>
        </div>
        <div className="new-step">+ Next step ...</div>
      </div>
    );
  }

  handleEnter(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  }
}

export default CheatSheet;
