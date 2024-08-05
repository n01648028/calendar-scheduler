import React from 'react';
import PropTypes from 'prop-types';

class Save extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      temperature: 0,
      weatherDescription: "",
    };
  }

  handleSave = () => {
    const { plans, date } = this.props;
    if (date !== null && date !== undefined) {
      const savedPlans = JSON.parse(localStorage.getItem('calendarPlans')) || {};
      savedPlans[date] = plans;
      localStorage.setItem('calendarPlans', JSON.stringify(savedPlans));
      alert('Plans saved successfully!');
    } else {
      alert('No date selected to save plans.');
    }
  };

  render() {
    return (
      <div>
        <br></br>
        <button onClick={this.handleSave} className="save-button">
          Save Plans
        </button>
        <p>This is the save page</p>
      </div>
    );
  }
}

Save.propTypes = {
  plans: PropTypes.arrayOf(
    PropTypes.shape({
      plan: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    })
  ).isRequired,
  date: PropTypes.number, // Optional, since date might be null or undefined
};

export default Save;
