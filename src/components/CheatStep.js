import React, { Component } from 'react';

class CheatStep extends Component {
  render() {
    return (
      <li
        ref={step => this.newStep = step}
        contentEditable={true}
        className="cheat-step"
        onKeyUp={this.props.handleInput}
        onKeyDown={this.preventDefault}
      ></li>
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
