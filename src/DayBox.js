import React from 'react';
import PropTypes from 'prop-types';

class DayBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: 0, weatherDescription: "" };
  }

  handleClick = () => {
    console.log("Clicked date:", this.props.date); // Debugging log
    if (this.props.onClick && this.props.date) {
      this.props.onClick(this.props.date);
    }
  };

  render() {
    return (
      <td
        className="calendar-cell"
        onClick={this.handleClick}
      >
        {this.props.date}
      </td>
    );
  }
}

DayBox.propTypes = {
  colIndex: PropTypes.number.isRequired,
  date: PropTypes.number,
  onClick: PropTypes.func.isRequired // Ensure onClick is a required function
};

export default DayBox;