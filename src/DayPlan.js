import React from 'react';
import checkmark from './checkmark.svg';
import reset from './reset.svg';
import close from './close.svg';
import TextBox from './TextBox';
import ImgOnClickArgument from './ImgOnClickArgument';

class DayPlan extends React.Component {
  constructor(props) {
    super(props);
    this.state = { day: 0, plan: [] };
    this.SetPlan = this.SetPlan.bind(this);
    this.Done = this.Done.bind(this);
    this.ClearDone = this.ClearDone.bind(this);
    this.CloseDone = this.CloseDone.bind(this);
  }

  componentDidMount() {
    const { day } = this.props.params;
    this.loadPlan(day);
  }

  componentDidUpdate(prevProps) {
    const { day } = this.props.params;
    if (prevProps.params.day !== day) {
      this.loadPlan(day);
    }
  }

  loadPlan(day) {
    const savedPlan = JSON.parse(localStorage.getItem(`dayPlan-${day}`)) || [];
    if (savedPlan.length === 0) {
      for (let i = 0; i < 23; i++) {
        savedPlan.push(["", ""]);
      }
    }
    this.setState({ day, plan: savedPlan });
  }

  savePlan(day, plan) {
    localStorage.setItem(`dayPlan-${day}`, JSON.stringify(plan));
  }

  SetPlan(event, plan) {
    plan[0] = event.target.value;
    this.setState(prevState => ({
      plan: [...prevState.plan]
    }), () => this.savePlan(this.state.day, this.state.plan));
  }

  Done(plan) {
    plan[1] = "green";
    this.setState(prevState => ({
      plan: [...prevState.plan]
    }), () => this.savePlan(this.state.day, this.state.plan));
  }

  ClearDone(plan) {
    plan[1] = "";
    this.setState(prevState => ({
      plan: [...prevState.plan]
    }), () => this.savePlan(this.state.day, this.state.plan));
  }

  CloseDone(plan) {
    plan[0] = "";
    plan[1] = "";
    this.setState(prevState => ({
      plan: [...prevState.plan]
    }), () => this.savePlan(this.state.day, this.state.plan));
  }

  render() {
    const { day } = this.props.params;
    const { plan } = this.state;
    const periods = [];

    if (plan.length === 0) {
      for (let i = 0; i < 23; i++) {
        plan.push(["", ""]);
      }
    }

    const times = [
      "12:00 am", "1:00 am", "2:00 am", "3:00 am", "4:00 am", "5:00 am", "6:00 am", "7:00 am", "8:00 am", "9:00 am", "10:00 am", "11:00 am",
      "12:00 pm", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm", "5:00 pm", "6:00 pm", "7:00 pm", "8:00 pm", "9:00 pm", "10:00 pm", "11:00 pm"
    ];

    for (let i = 0; i < 23; i++) {
      periods.push(
        <tr key={i}>
          <td style={{ borderStyle: "solid", borderColor: "black" }}>
            {times[i]}<br />{times[i + 1]}
          </td>
          <td style={{ borderStyle: "solid", borderColor: "black" }}>
            <TextBox
              backgroundColor={plan[i][1]}
              value={plan[i][0]}
              onChange={this.SetPlan}
              onChangeArgument={plan[i]}
            />
            <ImgOnClickArgument src={checkmark} onClick={this.Done} onClickArgument={plan[i]} />
            <ImgOnClickArgument src={reset} onClick={this.ClearDone} onClickArgument={plan[i]} />
            <ImgOnClickArgument src={close} onClick={this.CloseDone} onClickArgument={plan[i]} />
          </td>
        </tr>
      );
    }

    return (
      <div>
        Make your day plan for day {day}.
        <table>
          {periods}
        </table>
      </div>
    );
  }
}

export default DayPlan;
