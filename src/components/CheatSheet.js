import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
                  ref={`stepId${step.id}`}
                  step={step}
                  handleInput={this.handleInput.bind(this, step.id)}
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

  handleInput(focusedId, event) {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        this.newStep({ after: focusedId });
        break;
      case 'ArrowUp':
        this.navigate({ up: 1, from: focusedId });
        break;
      case 'ArrowDown':
        this.navigate({ down: 1, from: focusedId });
        break;
      default: break;
    }
  }

  navigate({ up = 0, down = 0, from } = {}) {
    if (!from || (!up && !down)) {
      console.warn('Required params: { from: stepId AND up: number of steps OR down: number of steps');
      return;
    }

    const { steps } = this.state;

    const focusedStepIndex = steps.findIndex(step => from === step.id);
    const stepsToMove = up - down;
    let newStepToFocus = focusedStepIndex - stepsToMove;
    if (newStepToFocus < 0) {
      newStepToFocus = 0;
    }
    else if (newStepToFocus >= steps.length) {
      newStepToFocus = steps.length - 1;
    }
    const idOfStepToFocus = steps[newStepToFocus].id;

    const reactStep = this.refs[`stepId${idOfStepToFocus}`];
    const domStep = ReactDOM.findDOMNode(reactStep);

    domStep.focus();
  }

  newStep({ after } = {}) {
    const nextId = this.state.stepId + 1;
    if (after && this.state.steps.length) {
      const steps = [...this.state.steps];
      const indexToInsertAfter = this.state.steps.findIndex(step => step.id === after);

      steps.splice(indexToInsertAfter + 1, 0, {
        instruction: '',
        id: nextId,
      })

      this.setState({
        stepId: nextId,
        steps,
      });
    }
    else {
      this.setState({
        stepId: nextId,
        steps: [{
          instruction: '',
          id: nextId,
        }],
      });
    }
  }
}

export default CheatSheet;
