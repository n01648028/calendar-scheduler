import React from 'react';

class Save extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: JSON.parse(localStorage.getItem('savedPlans')) || [],
      originalPlans: JSON.parse(localStorage.getItem('savedPlans')) || [],
      saveStatus: '',
    };
  }

  handleSave = () => {
    try {
      localStorage.setItem('savedPlans', JSON.stringify(this.state.plans));
      this.setState({
        saveStatus: 'Plans saved successfully!',
        originalPlans: [...this.state.plans],
      });
    } catch (error) {
      this.setState({ saveStatus: 'Failed to save plans. Please try again.' });
    }
  };

  handleDiscard = () => {
    this.setState({
      plans: [...this.state.originalPlans],
      saveStatus: 'Changes discarded.',
    });
  };

  render() {
    return (
      <div>
        <br />
        <button onClick={this.handleSave} className="save-button">
          Save Plans
        </button>
        <button onClick={this.handleDiscard} className="discard-button">
          Discard Changes
        </button>
        <p>This is the save page</p>
        {this.state.saveStatus && <p>{this.state.saveStatus}</p>}
      </div>
    );
  }
}

export default Save;