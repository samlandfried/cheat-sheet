import React, { Component } from 'react';
import CheatStep from 'components/CheatStep';

class CheatSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepId: 0,
      steps: [],
    };
  }

  render() {
    return (
      <div>
        <h4 className="cheat-sheet-title">New Cheat Sheet</h4>
        <div className="cheat-steps">
          {
            this.state.steps.map(
              (step) => (
                <CheatStep
                  key={step.id}
                  instruction={step.instruction}
                  handleInput={this.handleInput.bind(this)}
                />
              )
            )
          }
        </div>
        <div className="new-step">+ Next step ...</div>
      </div>
    );
  }

  componentDidMount() {
    this.newStep();
  }

  handleInput(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.newStep();
    }
  }

  newStep() {
    const nextId = this.state.stepId + 1;

    this.setState({
      stepId: nextId,
      steps: [
        ...this.state.steps,
        {
          instruction: '',
          id: nextId,
        }
      ],
    });
  }
}

export default CheatSheet;
