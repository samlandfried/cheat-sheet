import React, { Component } from 'react';

class CheatStep extends Component {
  render() {
    return (
      <div
        ref={newStep => this.newStep = newStep}
        contentEditable={true}
        className="cheat-step"
        onKeyPress={this.props.handleInput}
      ></div>
    );
  }

  componentDidMount() {
    this.newStep.focus();
  }
}

export default CheatStep;
