import React, { useState } from 'react';
import './Calendar.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import DayBox from './DayBox';
import DayPlan from './DayPlan';
import DailyPlan from './DailyPlan';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDay = 1; // Assuming the month starts on Monday
  const totalDays = 31;

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  const handleDayClick = (date) => {
    console.log("Day clicked in ItemList:", date); // Debugging log
    setSelectedDate(date);
  };

  const OpenDayPlan = () => {
    window.location.pathname = "/dayplan";
  }

  const OpenDailyPlan = () => {
    window.location.pathname = "/dailyplan";
  }

  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
      <br />
      <h2>August</h2>
      <table className="calendar-table">
        <thead>
          <tr>
            {daysOfWeek.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.ceil((totalDays + startDay) / 7) }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {daysOfWeek.map((_, colIndex) => {
                const dateIndex = rowIndex * 7 + colIndex;
                const date = dateIndex < startDay ? null : dates[dateIndex - startDay];
                return (
                  <DayBox
                    key={dateIndex}
                    colIndex={colIndex}
                    date={date}
                    onClick={handleDayClick} // Pass handleDayClick as onClick prop
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {selectedDate && (
        <div className="day-plan">
          <h2 onClick={OpenDayPlan}>Day Plan</h2>
          <h3 onClick={OpenDailyPlan}>Daily Plan</h3>
          <p>Selected Date: {selectedDate}</p>
        </div>
      )}
    </div>
  );
};

export default Calendar;