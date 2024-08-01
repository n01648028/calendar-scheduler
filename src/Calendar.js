import React from 'react';
import './Calendar.css';
import DayBox from './DayBox'

const Calendar = () => {
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDay = 1; // Assuming the month starts on Monday
  const totalDays = 31;

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);
  const emptyCells = Array.from({ length: startDay }, (_, i) => null);

  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
      <br></br>
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
                  <DayBox colIndex={colIndex} date={date} />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;