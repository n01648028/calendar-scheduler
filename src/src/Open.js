import React from 'react';
class Open extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0, weatherDescription: ""};
  }
  render() {
    return <div>
             Here this is the open page
           </div>;
  }
}
export default Open;