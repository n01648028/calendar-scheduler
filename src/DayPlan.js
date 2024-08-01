import React from 'react';
class DayPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0, weatherDescription: ""};
  }
  render() {
    return <div>
             Make your day plan.
           </div>;
  }
}
export default DayPlan;