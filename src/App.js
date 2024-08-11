import './App.css';
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link,} from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import Settings from './Settings';
import Save from './Save';
import Open from './Open';
import UseParams from './UseParams';
import DayPlan from './DayPlan';
import DailyPlan from './DailyPlan';

function App() {
  const [dayPlans, setDayPlans] = useState([]);
  const [dailyPlan, setDailyPlan] = useState([]);
  var i;
  for(i=0;i!=30;i++){
    dayPlans.push([]);
  }
  return (
    <div className="App">
      <br></br>
      Welcome to our Calendar App! devloped by Danyyil & Russell. 
      <br></br>  
      <br></br>
      Please use the links below to navigate the app. 
      <br></br>
      <br></br>
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/home">home</Link> | {" "}
            <Link to="/calendar">Calendar</Link> | {" "}
            <Link to="/Open">Open</Link> | {" "}
            <Link to="/Save">Save</Link> | {" "}
            <Link to="/Settings">Settings</Link> | {" "}

          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/Open" element={<Open />} />
            <Route path="/Save" element={<Save />} />
            <Route path="/Settings" element={<Settings />} />
            <Route path="/DayPlan/:day" element={<UseParams><DayPlan plans={dayPlans} /></UseParams>} />
            <Route path="/DailyPlan" element={<UseParams><DailyPlan plan={dailyPlan} /></UseParams>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;