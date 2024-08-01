import React from 'react';
class DayBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0, weatherDescription: ""};
  }
  render() {
    return <td key={this.props.colIndex} className="calendar-cell">
              {this.props.date}
           </td>;
  }
}
export default DayBox;