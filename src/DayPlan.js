import React from 'react';
import { useParams } from 'react-router-dom';
import checkmark from './checkmark.svg';
import reset from './reset.svg';
import close from './close.svg';
import TextBox from './TextBox';
import ImgOnClickArgument from './ImgOnClickArgument';
class DayPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = {day: 0, plan: [], debug: 0};
    this.SetPlan = this.SetPlan.bind(this);
    this.Done = this.Done.bind(this);
    this.ClearDone = this.ClearDone.bind(this);
    this.CloseDone = this.CloseDone.bind(this);
  }
  SetPlan(event, plan) {//alert(plan[0]);
    plan[0]=event.target.value;
    this.setState(prevState => (this.state));
  }
  Done(plan) {
    plan[1]="green";
    this.setState(prevState => (this.state));
  }
  ClearDone(plan) {
    plan[1]="";
    this.setState(prevState => (this.state));
  }
  CloseDone(plan) {
    plan[0]="";
    plan[1]="";
    this.setState(prevState => (this.state));
  }
  render() {
    var i;
    var periods;
    var SetPlan;
    var { day } = this.props.params;
    if(this.props.plans[day-1].length == 0){
      for(i=0;i!=30;i++){
        this.props.plans[day-1].push(["", ""]);
      }
    }
    if(this.state.day != day){
      this.state.day = day;
      this.state.plan = this.props.plans[day-1];
    }
    periods = [<tr>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   12:00 am<br />
                   1:00 am
                 </td>
                 <td style={{"border-style": "solid", "border-color": "black"}}>
                   <input style={{backgroundColor:this.state.plan[0][1]}} type="text" onChange={(event) => {this.SetPlan(event, this.state.plan[0])}} value={this.state.plan[0][0]} />
                   <img src={checkmark} onClick={() => {this.Done(this.state.plan[0])}} />
                   <img src={reset} onClick={() => {this.ClearDone(this.state.plan[0])}} />
                   <img src={close} onClick={() => {this.CloseDone(this.state.plan[0])}} />
                 </td>
               </tr>];
    for(i=1;i!=11;i++){//alert(JSON.stringify(plan));
      periods.push(<tr>
                     <td style={{"border-style": "solid", "border-color": "black"}}>
                       {i}:00 am<br />
                       {i+1}:00 am
                     </td>
                     <td style={{"border-style": "solid", "border-color": "black"}}>
                       <TextBox backgroundColor={this.state.plan[i][1]} value={this.state.plan[i][0]} onChange={this.SetPlan} onChangeArgument={this.state.plan[i]} />
                       <ImgOnClickArgument src={checkmark} onClick={this.Done} onClickArgument={this.state.plan[i]} />
                       <ImgOnClickArgument src={reset} onClick={this.ClearDone} onClickArgument={this.state.plan[i]} />
                       <ImgOnClickArgument src={close} onClick={this.CloseDone} onClickArgument={this.state.plan[i]} />
                     </td>
                   </tr>);
    }
    periods.push(<tr>
                   <td style={{"border-style": "solid", "border-color": "black"}}>
                     11:00 am<br />
                     1:00 pm
                   </td>
                   <td style={{"border-style": "solid", "border-color": "black"}}>
                     <input style={{backgroundColor:this.state.plan[11][1]}} type="text" onChange={(event) => {this.SetPlan(event, this.state.plan[11])}} value={this.state.plan[11][0]} />
                     <img src={checkmark} onClick={() => {this.Done(this.state.plan[11])}} />
                     <img src={reset} onClick={() => {this.ClearDone(this.state.plan[11])}} />
                     <img src={close} onClick={() => {this.CloseDone(this.state.plan[11])}} />
                   </td>
                 </tr>);
    for(i=0;i!=10;i++){
      periods.push(<tr>
                     <td style={{"border-style": "solid", "border-color": "black"}}>
                       {i+1}:00 pm<br />
                       {i+2}:00 pm
                     </td>
                     <td style={{"border-style": "solid", "border-color": "black"}}>
                       <TextBox backgroundColor={this.state.plan[i+12][1]} value={this.state.plan[i+12][0]} onChange={this.SetPlan} onChangeArgument={this.state.plan[i+12]} />
                       <ImgOnClickArgument src={checkmark} onClick={this.Done} onClickArgument={this.state.plan[i+12]} />
                       <ImgOnClickArgument src={reset} onClick={this.ClearDone} onClickArgument={this.state.plan[i+12]} />
                       <ImgOnClickArgument src={close} onClick={this.CloseDone} onClickArgument={this.state.plan[i+12]} />
                     </td>
                   </tr>);
    }
    periods.push(<tr>
                   <td style={{"border-style": "solid", "border-color": "black"}}>
                     11:00 pm<br />
                     12:00 am
                   </td>
                   <td style={{"border-style": "solid", "border-color": "black"}}>
                     <input style={{backgroundColor:this.state.plan[22][1]}} type="text" onChange={(event) => {this.SetPlan(event, this.state.plan[22])}} value={this.state.plan[22][0]} />
                     <img src={checkmark} onClick={() => {this.Done(this.state.plan[22])}} />
                     <img src={reset} onClick={() => {this.ClearDone(this.state.plan[22])}} />
                     <img src={close} onClick={() => {this.CloseDone(this.state.plan[22])}} />
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