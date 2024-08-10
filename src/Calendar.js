import React, { useState, useEffect } from 'react';
import './Calendar.css';
import DayBox from './DayBox';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [weatherData, setWeatherData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showForms, setShowForms] = useState(true);
  const [calendarColor, setCalendarColor] = useState('#0048FF');
  const [boxLength, setBoxLength] = useState(100);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const startDay = 1; // Adjust based on the starting day of the month
  const totalDays = 31;

  useEffect(() => {
    const savedPlans = JSON.parse(localStorage.getItem('savedPlans'));
    const savedSettings = JSON.parse(localStorage.getItem('calendarSettings'));

    if (savedSettings) {
      setShowForms(savedSettings.showForms);
      setCalendarColor(savedSettings.calendarColor);
      setBoxLength(savedSettings.boxLength);
    }

    if (savedPlans) {
      // Set saved plans if needed
    }
  }, []);

  useEffect(() => {
    if (selectedDate) {
      fetchWeatherData(selectedDate);
    }
  }, [selectedDate]);

  const fetchWeatherData = (date) => {
    const latitude = 43.653225;
    const longitude = -79.383186;
    const apiKey = 'mqey0foiks41msndfyvgu25pb6t95vu4dj1v22z3';
    const apiUrl = `https://www.meteosource.com/api/v1/free/point?lat=${latitude}&lon=${longitude}&sections=all&timezone=UTC&language=en&units=metric&key=${apiKey}`;

    setIsLoading(true);
    setWeatherData(null);
    setError(null);

    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
        localStorage.setItem('weatherData', JSON.stringify(data));
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  const handleDayClick = (date) => {
    setSelectedDate(date);
  };

  const calendarStyle = { backgroundColor: calendarColor };
  const cellStyle = { width: `${boxLength}px`, height: `${boxLength}px` };

  return (
    <div className="calendar-container" style={calendarStyle}>
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
                const date = dateIndex < startDay ? null : dateIndex - startDay + 1;
                return (
                  <DayBox
                    key={dateIndex}
                    colIndex={colIndex}
                    date={date || null}
                    onClick={() => handleDayClick(date)}
                    isActive={selectedDate === date}
                    showForm={showForms}
                    cellStyle={cellStyle}
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
          {isLoading ? (
            <p>Loading weather data...</p>
          ) : error ? (
            <p>Error: {error}</p>
          ) : weatherData ? (
            <div>
              <p>Temperature: {weatherData.current.temperature}°C</p>
              <p>Condition: {weatherData.current.summary}</p>
            </div>
          ) : (
            <p>Select a date to see the weather.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Calendar;
