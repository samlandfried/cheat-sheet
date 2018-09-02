import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CheatStep from 'components/CheatStep';

class CheatSheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stepId: 0,
      steps: [],
      title: 'Cheat Name',
    };
  }

  render() {
    return (
      <div>
        <h4
          className="cheat-sheet-title"
          contentEditable={true}
          onKeyUp={this.changeTitle.bind(this)}
          ref={title => this.title = title}
        />
        <ol className="cheat-steps">
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
        </ol>
      </div>
    );
  }

  componentDidMount() {
    this.title.innerText = this.state.title;
    this.newStep();
  }

  handleInput(focusedId, event) {
    switch (event.key) {
      case 'Enter':
        this.newStep({ after: focusedId });
        break;
      case 'ArrowUp':
        this.navigate({ up: 1, from: focusedId });
        break;
      case 'ArrowDown':
        this.navigate({ down: 1, from: focusedId });
        break;
      case 'Backspace':
        const stepIsEmpty = event.target.innerText.length === 0;
        const isNotLastStep = this.state.steps.length > 1;

        if (stepIsEmpty && isNotLastStep) {
          this.removeStep(focusedId);
        }
        break;
      default:
        const instruction = event.target.innerText;
        const step = this.state.steps.find(step => step.id === focusedId);
        step.instruction = instruction;
    }
  }

  removeStep(id) {
    this.navigate({ up: 1, from: id })
    const steps = [...this.state.steps]

    const indexToRemove = steps.findIndex(step => step.id === id);

    steps.splice(indexToRemove, 1);

    this.setState({ steps });
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

  changeTitle({ target }) {
    this.setState({ title: target.innerText });
  }
}

export default CheatSheet;
