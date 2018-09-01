import React, { Component } from 'react';

class CheatStep extends Component {
  render() {
    return (
      <div
        ref={step => this.newStep = step}
        contentEditable={true}
        className="cheat-step"
        onKeyUp={this.props.handleInput}
        onKeyDown={this.preventDefault}
      ></div>
    );
  }

  componentDidMount() {
    this.newStep.focus();
  }

  preventDefault(event) {
    if (event.key === 'Enter') event.preventDefault();
  }
}

export default CheatStep;
