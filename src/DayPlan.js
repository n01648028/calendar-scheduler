import React from 'react';
import { useParams } from 'react-router-dom';
class DayPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {temperature: 0, weatherDescription: ""};
  }
  render() {
    var i;
    var periods;
    var { day } = this.props.params;
    if(this.props.plans[day-1].length == 0){
      for(i=0;i!=30;i++){
        this.props.plans[day-1].push(["", 0]);
      }
    }
    periods = [<tr>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   12:00 am<br />
                   1:00 am
                 </td>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   Type here
                 </td>
               </tr>];
    for(i=0;i!=11;i++){
      periods.push(<tr>
                     <td style={{"border-style": "solid", "border-color": "black"}}>
                       {i+1}:00 am<br />
                       {i+2}:00 am
                     </td>
                     <td style={{"border-style": "solid", "border-color": "black"}}>
                       Type here
                     </td>
                   </tr>);
    }
    for(i=0;i!=10;i++){
      periods.push(<tr>
                     <td style={{"border-style": "solid", "border-color": "black"}}>
                       {i+1}:00 pm<br />
                       {i+2}:00 pm
                     </td>
                     <td style={{"border-style": "solid", "border-color": "black"}}>
                       Type here
                     </td>
                   </tr>);
    }
    periods.push(<tr>
                   <td style={{"border-style": "solid", "border-color": "black"}}>
                     11:00 pm<br />
                     12:00 am
                   </td>
                   <td style={{"border-style": "solid", "border-color": "black"}}>
                     Type here
                   </td>
                 </tr>);
    return <div>
             Make your day plan for day {day}.
             <table>
               {periods}
             </table>
           </div>;
  }
}
export default DayPlan;