import React from 'react';
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0, weatherDescription: ""};
  }
  render() {
    return <div>
             This is the save page
           </div>;
  }
}
export default Save;