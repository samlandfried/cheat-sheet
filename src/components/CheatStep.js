import React, { Component } from 'react';

class CheatStep extends Component {
  render() {
    return (
      <div
        ref={step => this.newStep = step}
        contentEditable={true}
        className="cheat-step"
        onKeyDown={this.props.handleInput}
      ></div>
    );
  }

  componentDidMount() {
    this.newStep.focus();
  }
}

export default CheatStep;
