import React, { useState, useEffect } from 'react';
import './Calendar.css';
import DayBox from './DayBox';

const ItemList = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [settings, setSettings] = useState({
    showForms: true,
    calendarColor: '#0048FF',
    boxLength: 100,
  });

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();
  const totalDays = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();
  const startDay = new Date(today.getFullYear(), today.getMonth(), 1).getDay(); // Adjust based on the starting day of the month

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  useEffect(() => {
    const latitude = 43.653225;
    const longitude = -79.383186;
    const apiKey = 'mqey0foiks41msndfyvgu25pb6t95vu4dj1v22z3';
    const apiUrl = `https://www.meteosource.com/api/v1/free/point?lat=${latitude}&lon=${longitude}&sections=all&timezone=UTC&language=en&units=metric&key=${apiKey}`;
    const savedSettings = JSON.parse(localStorage.getItem('calendarSettings'));
    if (savedSettings) {
      setSettings(savedSettings);
    }
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
      })
      .catch(error => {})
      .finally(() => {});
  }, []);

  const handleDayClick = (date) => {
    console.log("Day clicked in ItemList:", date);
    setSelectedDate(date);
  };

  return (
    <div className="calendar-container" style={{ backgroundColor: settings.calendarColor }}>
      <h1>Calendar</h1>
      <h2>{months[today.getMonth()]}</h2>
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
