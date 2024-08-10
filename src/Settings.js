import React from 'react';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showForms: true, // Updated to control forms visibility
      calendarColor: '#0048FF',
      boxLength: 100, // Default box length
    };
  }

  handleToggleForms = () => {
    this.setState({ showForms: !this.state.showForms });
  };

  handleColorChange = (e) => {
    this.setState({ calendarColor: e.target.value });
  };

  handleBoxLengthChange = (e) => {
    this.setState({ boxLength: e.target.value });
  };

  saveSettings = () => {
    const settings = {
      showForms: this.state.showForms, // Updated to reflect new state name
      calendarColor: this.state.calendarColor,
      boxLength: this.state.boxLength,
    };
    localStorage.setItem('calendarSettings', JSON.stringify(settings));
    alert('Settings saved!');
  };

  render() {
    const { showForms, calendarColor, boxLength } = this.state;

    return (
      <div className="settings-container">
        <h1>Settings</h1>
        <div className="settings-option">
          <label>
            Show Forms: {/* Updated label */}
            <input
              type="checkbox"
              checked={showForms}
              onChange={this.handleToggleForms} // Updated handler
            />
          </label>
        </div>
        <div className="settings-option">
          <label>
            Calendar Color:
            <input
              type="color"
              value={calendarColor}
              onChange={this.handleColorChange}
            />
          </label>
        </div>
        <div className="settings-option">
          <label>
            Box Length:
            <input
              type="number"
              value={boxLength}
              onChange={this.handleBoxLengthChange}
              min="50"
              max="200"
            />
          </label>
        </div>
        <button onClick={this.saveSettings}>Save Settings</button>
      </div>
    );
  }
}

export default Settings;
