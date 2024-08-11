import React from 'react';

class Settings extends React.Component {
  handleToggleForms = () => {
    this.props.setSettings((prevSettings) => ({
      ...prevSettings,
      showForms: !prevSettings.showForms,
    }));
  };

  handleColorChange = (e) => {
    this.props.setSettings((prevSettings) => ({
      ...prevSettings,
      calendarColor: e.target.value,
    }));
  };

  handleBoxLengthChange = (e) => {
    this.props.setSettings((prevSettings) => ({
      ...prevSettings,
      boxLength: e.target.value,
    }));
  };

  saveSettings = () => {
    localStorage.setItem('calendarSettings', JSON.stringify(this.props.settings));
    alert('Settings saved!');
  };

  render() {
    const { showForms, calendarColor, boxLength } = this.props.settings;

    return (
      <div className="settings-container">
        <h1>Settings</h1>
        <div className="settings-option">
          <label>
            Show Forms:
            <input
              type="checkbox"
              checked={showForms}
              onChange={this.handleToggleForms}
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
