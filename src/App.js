import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import Settings from './Settings';
import Save from './Save';
import Open from './Open';
import UseParams from './UseParams';
import DayPlan from './DayPlan';
import DailyPlan from './DailyPlan';

function App() {
  const [dayPlans, setDayPlans] = useState(Array.from({ length: 30 }, () => [])); // Initialize dayPlans
  const [dailyPlan, setDailyPlan] = useState([]);
  const [settings, setSettings] = useState({
    showForms: true,
    calendarColor: '#0048FF',
    boxLength: 100,
  });

  useEffect(() => {
    // Load settings from local storage or other source if needed
    const savedSettings = JSON.parse(localStorage.getItem('calendarSettings'));
    if (savedSettings) {
      setSettings(savedSettings);
    }
  }, []);

  return (
    <div className="App">
      <br />
      Welcome to our Calendar App! Developed by Danyyil & Russell.
      <br /><br />
      Please use the links below to navigate the app.
      <br /><br />
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
            <Route path="/Save" element={<Save dayPlans={dayPlans} settings={settings} />} />
            <Route path="/Settings" element={<Settings settings={settings} setSettings={setSettings} />} />
            <Route path="/DayPlan/:day" element={<UseParams><DayPlan plans={dayPlans} /></UseParams>} />
            <Route path="/DailyPlan" element={<UseParams><DailyPlan plan={dailyPlan} /></UseParams>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
