import React, { useState } from 'react';
import './Calendar.css';
import DayBox from './DayBox';

const ItemList = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDay = 1; 
  const totalDays = 31;

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  const handleDayClick = (date) => {
    console.log("Day clicked in ItemList:", date); 
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container">
      <h1>Calendar</h1>
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
        <div className="weather-plan">
          <h2>Weather:</h2>

        </div>
      )}
    </div>
  );
};

export default ItemList;



