import React from 'react';
class ItemList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {day: 0, dayName: ""};
  }
  render() {
    return <div>
      Calendar 1
      <table>
        <tr>
          <td style={{"border-style": "solid"}}>
            Sunday
          </td>
          <td style={{"border-style": "solid"}}>
            Monday
          </td>
          <td style={{"border-style": "solid"}}>
            Tuesday
          </td>
          <td style={{"border-style": "solid"}}>
            Wednesday
          </td>
          <td style={{"border-style": "solid"}}>
            Thursday
          </td>
          <td style={{"border-style": "solid"}}>
            Friday
          </td>
          <td style={{"border-style": "solid"}}>
            Saturday
          </td>
        </tr>
        <tr>
          <td style={{"border-style": "solid"}}>
          </td>
          <td style={{"border-style": "solid"}}>
            day 1
          </td>
          <td style={{"border-style": "solid"}}>
            day 2
          </td>
          <td style={{"border-style": "solid"}}>
            day 3
          </td>
          <td style={{"border-style": "solid"}}>
            day 4
          </td>
          <td style={{"border-style": "solid"}}>
            day 5
          </td>
          <td style={{"border-style": "solid"}}>
            day 6
          </td>
        </tr>
        <tr>
          <td style={{"border-style": "solid"}}>
            day 7
          </td>
          <td style={{"border-style": "solid"}}>
            day 8
          </td>
          <td style={{"border-style": "solid"}}>
            day 9
          </td>
          <td style={{"border-style": "solid"}}>
            day 10
          </td>
          <td style={{"border-style": "solid"}}>
            day 11
          </td>
          <td style={{"border-style": "solid"}}>
            day 12
          </td>
          <td style={{"border-style": "solid"}}>
            day 13
          </td>
        </tr>
        <tr>
          <td style={{"border-style": "solid"}}>
            day 14
          </td>
          <td style={{"border-style": "solid"}}>
            day 15
          </td>
          <td style={{"border-style": "solid"}}>
            day 16
          </td>
          <td style={{"border-style": "solid"}}>
            day 17
          </td>
          <td style={{"border-style": "solid"}}>
            day 18
          </td>
          <td style={{"border-style": "solid"}}>
            day 19
          </td>
          <td style={{"border-style": "solid"}}>
            day 20
          </td>
        </tr>
        <tr>
          <td style={{"border-style": "solid"}}>
            day 21
          </td>
          <td style={{"border-style": "solid"}}>
            day 22
          </td>
          <td style={{"border-style": "solid"}}>
            day 23
          </td>
          <td style={{"border-style": "solid"}}>
            day 24
          </td>
          <td style={{"border-style": "solid"}}>
            day 25
          </td>
          <td style={{"border-style": "solid"}}>
            day 26
          </td>
          <td style={{"border-style": "solid"}}>
            day 27
          </td>
        </tr>
        <tr>
          <td style={{"border-style": "solid"}}>
            day 28
          </td>
          <td style={{"border-style": "solid"}}>
            day 29
          </td>
          <td style={{"border-style": "solid"}}>
            day 30
          </td>
          <td style={{"border-style": "solid"}}>
            day 31
          </td>
        </tr>
      </table>
           </div>;
  }
}
export default ItemList;