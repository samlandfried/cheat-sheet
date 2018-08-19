import React, { Component } from 'react';

class CheatStep extends Component {
  render() {
    return (
      <div
        ref={step => this[`stepId${this.props.step.id}`] = step}
        contentEditable={true}
        className="cheat-step"
        onKeyDown={this.props.handleInput}
      ></div>
    );
  }

  componentDidMount() {
    this[`stepId${this.props.step.id}`].focus();
  }
}

export default CheatStep;
