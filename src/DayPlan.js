import React from 'react';
import { useParams } from 'react-router-dom';
class DayPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0, weatherDescription: ""};
  }
  render() {
    var { day } = this.props.params;
    if(this.props.plans[day].length == 0){
      alert("a");
      this.props.plans[day].push("a");
    }
    return <div>
             Make your day plan.
             <table>
               <tr>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   12:00 am<br />
                   1:00 am
                 </td>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   Type here
                 </td>
               </tr>
               <tr>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   1:00 am<br />
                   2:00 am
                 </td>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   Type here
                 </td>
               </tr>
               <tr>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   2:00 am<br />
                   3:00 am
                 </td>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   Type here
                 </td>
               </tr>
               <tr>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   3:00 am<br />
                   4:00 am
                 </td>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   Type here
                 </td>
               </tr>
             </table>
           </div>;
  }
}
export default DayPlan;