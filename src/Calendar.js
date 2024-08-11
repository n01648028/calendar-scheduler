import React, { useState, useEffect } from 'react';
import './Calendar.css';
import DayBox from './DayBox';

const ItemList = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [settings, setSettings] = useState({
    showForms: true,
    calendarColor: '#0048FF',
    boxLength: 100,
  });

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDay = 1; // Adjust based on the starting day of the month
  const totalDays = 31;

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  useEffect(() => {
    const savedSettings = JSON.parse(localStorage.getItem('calendarSettings'));
    if (savedSettings) {
      setSettings(savedSettings);
    }
  }, []);

  const handleDayClick = (date) => {
    console.log("Day clicked in ItemList:", date);
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container" style={{ backgroundColor: settings.calendarColor }}>
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
                    date={date || null}
                    onClick={handleDayClick}
                    isActive={selectedDate === date}
                    showForm={settings.showForms} // Pass showForms as showForm
                    cellStyle={{
                      width: `${settings.boxLength}px`,
                      height: `${settings.boxLength}px`,
                    }} // Pass box length as cellStyle
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
          {/* Add weather component or data here */}
        </div>
      )}
    </div>
  );
};

export default ItemList;
