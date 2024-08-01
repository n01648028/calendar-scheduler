import React from 'react';
class DailyPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0, weatherDescription: ""};
  }
  render() {
    return <div>
             Make your plan that applies to all days.
           </div>;
  }
}
export default DailyPlan;