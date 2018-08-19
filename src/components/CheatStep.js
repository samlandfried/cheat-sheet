import React, { Component } from 'react';

class CheatStep extends Component {
  render() {
    return (
      <div contentEditable="true" className="cheat-step" onKeyPress={this.props.handleEnter}></div>
    );
  }
}

export default CheatStep;
