import React, { Component } from 'react';
import CheatStep from 'components/CheatStep';

class CheatSheet extends Component {
  handleEnter(event) {
    console.log(event);
  }

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
}

export default CheatSheet;
