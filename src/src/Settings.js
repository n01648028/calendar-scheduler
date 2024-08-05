import React from 'react';
class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0, weatherDescription: ""};
  }
  render() {
    return <div>
            <p> Welcome to the settings</p>
             Here this is the settings page
           </div>;
  }
}
export default Settings;