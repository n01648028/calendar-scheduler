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
  const day = today.getDate();

  const dates = Array.from({ length: totalDays }, (_, i) => i + 1);

  useEffect(() => {
    var apiUrl = "http://ip-api.com/json";
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) throw new Error(`Failed to fetch location data: ${response.statusText}`);
        return response.json();
      })
      .then(data => {
        var latitude;
        var longitude;
        var apiKey;
        var apiUrl;
        latitude=data.lat;
        longitude=data.lon;
        apiKey = 'mqey0foiks41msndfyvgu25pb6t95vu4dj1v22z3';
        apiUrl = `https://www.meteosource.com/api/v1/free/point?lat=${latitude}&lon=${longitude}&sections=all&timezone=UTC&language=en&units=metric&key=${apiKey}`;
        setWeatherData({"lat":"43.6066N","lon":"79.5928W","elevation":127,"timezone":"UTC","units":"metric","current":{"icon":"partly_clear","icon_num":28,"summary":"Partly clear","temperature":16,"wind":{"speed":3.5,"angle":274,"dir":"W"},"precipitation":{"total":0,"type":"none"},"cloud_cover":49},"hourly":{"data":[{"date":"2024-08-12T02:00:00","weather":"partly_clear","icon":28,"summary":"Partly clear","temperature":16,"wind":{"speed":3.5,"dir":"W","angle":274},"cloud_cover":{"total":49},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T03:00:00","weather":"partly_clear","icon":28,"summary":"Partly clear","temperature":15,"wind":{"speed":2.9,"dir":"WNW","angle":293},"cloud_cover":{"total":41},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T04:00:00","weather":"partly_clear","icon":28,"summary":"Partly clear","temperature":14.5,"wind":{"speed":2.7,"dir":"WNW","angle":294},"cloud_cover":{"total":63},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T05:00:00","weather":"cloudy","icon":30,"summary":"Cloudy","temperature":15.5,"wind":{"speed":2.9,"dir":"WNW","angle":288},"cloud_cover":{"total":84},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T06:00:00","weather":"partly_clear","icon":28,"summary":"Partly clear","temperature":15.2,"wind":{"speed":2.7,"dir":"WNW","angle":284},"cloud_cover":{"total":64},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T07:00:00","weather":"cloudy","icon":30,"summary":"Cloudy","temperature":15.2,"wind":{"speed":2.6,"dir":"WNW","angle":282},"cloud_cover":{"total":81},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T08:00:00","weather":"overcast","icon":7,"summary":"Overcast","temperature":15.2,"wind":{"speed":2.6,"dir":"W","angle":276},"cloud_cover":{"total":97},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T09:00:00","weather":"cloudy","icon":30,"summary":"Cloudy","temperature":15,"wind":{"speed":2.8,"dir":"WNW","angle":282},"cloud_cover":{"total":81},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T10:00:00","weather":"mostly_cloudy","icon":5,"summary":"Mostly cloudy","temperature":15,"wind":{"speed":2.8,"dir":"WNW","angle":289},"cloud_cover":{"total":69},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T11:00:00","weather":"overcast","icon":7,"summary":"Overcast","temperature":14.8,"wind":{"speed":2.5,"dir":"WNW","angle":294},"cloud_cover":{"total":100},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T12:00:00","weather":"overcast","icon":7,"summary":"Overcast","temperature":15.5,"wind":{"speed":2.6,"dir":"WNW","angle":298},"cloud_cover":{"total":100},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T13:00:00","weather":"cloudy","icon":6,"summary":"Cloudy","temperature":16.8,"wind":{"speed":2.8,"dir":"WNW","angle":288},"cloud_cover":{"total":84},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T14:00:00","weather":"mostly_cloudy","icon":5,"summary":"Mostly cloudy","temperature":18.5,"wind":{"speed":3.6,"dir":"W","angle":272},"cloud_cover":{"total":75},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T15:00:00","weather":"partly_sunny","icon":4,"summary":"Partly sunny","temperature":19.8,"wind":{"speed":3.7,"dir":"WNW","angle":284},"cloud_cover":{"total":48},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T16:00:00","weather":"partly_sunny","icon":4,"summary":"Partly sunny","temperature":21.2,"wind":{"speed":4.2,"dir":"WNW","angle":294},"cloud_cover":{"total":41},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T17:00:00","weather":"partly_sunny","icon":4,"summary":"Partly sunny","temperature":22,"wind":{"speed":4.5,"dir":"WNW","angle":299},"cloud_cover":{"total":26},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T18:00:00","weather":"rain_shower","icon":13,"summary":"Rain shower","temperature":22.8,"wind":{"speed":4.5,"dir":"WNW","angle":300},"cloud_cover":{"total":68},"precipitation":{"total":0.2,"type":"rain"}},{"date":"2024-08-12T19:00:00","weather":"cloudy","icon":6,"summary":"Cloudy","temperature":23.2,"wind":{"speed":4.1,"dir":"WNW","angle":290},"cloud_cover":{"total":82},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T20:00:00","weather":"cloudy","icon":6,"summary":"Cloudy","temperature":23.2,"wind":{"speed":4.1,"dir":"W","angle":279},"cloud_cover":{"total":86},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T21:00:00","weather":"overcast","icon":7,"summary":"Overcast","temperature":23,"wind":{"speed":3.9,"dir":"W","angle":267},"cloud_cover":{"total":92},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T22:00:00","weather":"partly_sunny","icon":4,"summary":"Partly sunny","temperature":23,"wind":{"speed":4.2,"dir":"WNW","angle":286},"cloud_cover":{"total":47},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-12T23:00:00","weather":"mostly_cloudy","icon":5,"summary":"Mostly cloudy","temperature":22,"wind":{"speed":4,"dir":"NW","angle":312},"cloud_cover":{"total":73},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-13T00:00:00","weather":"mostly_sunny","icon":3,"summary":"Mostly sunny","temperature":20.8,"wind":{"speed":2.9,"dir":"NNW","angle":344},"cloud_cover":{"total":19},"precipitation":{"total":0,"type":"none"}},{"date":"2024-08-13T01:00:00","weather":"clear","icon":26,"summary":"Clear","temperature":19.5,"wind":{"speed":2.2,"dir":"NNW","angle":341},"cloud_cover":{"total":4},"precipitation":{"total":0,"type":"none"}}]},"daily":{"data":[{"day":"2024-08-11","weather":"partly_sunny","icon":4,"summary":"Mostly cloudy, fewer clouds in the evening. Temperature 15/21 °C. Wind from W.","all_day":{"weather":"partly_sunny","icon":4,"temperature":18,"temperature_min":15,"temperature_max":20.5,"wind":{"speed":5,"dir":"W","angle":267},"cloud_cover":{"total":54},"precipitation":{"total":0,"type":"none"}},"morning":null,"afternoon":null,"evening":null},{"day":"2024-08-12","weather":"partly_sunny","icon":4,"summary":"Mostly cloudy, fewer clouds in the evening. Temperature 15/23 °C.","all_day":{"weather":"partly_sunny","icon":4,"temperature":18.8,"temperature_min":14.5,"temperature_max":23.2,"wind":{"speed":3.2,"dir":"WNW","angle":292},"cloud_cover":{"total":62},"precipitation":{"total":0.2,"type":"rain"}},"morning":null,"afternoon":null,"evening":null},{"day":"2024-08-13","weather":"mostly_cloudy","icon":5,"summary":"Cloudy changing to partly sunny by evening. Temperature 15/27 °C.","all_day":{"weather":"mostly_cloudy","icon":5,"temperature":21,"temperature_min":15.2,"temperature_max":26.8,"wind":{"speed":2,"dir":"W","angle":268},"cloud_cover":{"total":51},"precipitation":{"total":0,"type":"none"}},"morning":null,"afternoon":null,"evening":null},{"day":"2024-08-14","weather":"sunny","icon":2,"summary":"Sunny. Temperature 16/29 °C.","all_day":{"weather":"sunny","icon":2,"temperature":22.5,"temperature_min":16.2,"temperature_max":28.5,"wind":{"speed":1.7,"dir":"WNW","angle":283},"cloud_cover":{"total":5},"precipitation":{"total":0,"type":"none"}},"morning":null,"afternoon":null,"evening":null},{"day":"2024-08-15","weather":"partly_sunny","icon":4,"summary":"Sunny, more clouds in the afternoon. Temperature 18/29 °C.","all_day":{"weather":"partly_sunny","icon":4,"temperature":23,"temperature_min":17.5,"temperature_max":29,"wind":{"speed":1.4,"dir":"S","angle":169},"cloud_cover":{"total":28},"precipitation":{"total":0,"type":"none"}},"morning":null,"afternoon":null,"evening":null},{"day":"2024-08-16","weather":"cloudy","icon":6,"summary":"Mostly cloudy, more clouds in the afternoon and evening. Temperature 20/28 °C.","all_day":{"weather":"cloudy","icon":6,"temperature":23.5,"temperature_min":19.5,"temperature_max":27.8,"wind":{"speed":3,"dir":"E","angle":84},"cloud_cover":{"total":74},"precipitation":{"total":0,"type":"none"}},"morning":null,"afternoon":null,"evening":null},{"day":"2024-08-17","weather":"light_rain","icon":10,"summary":"Light rain. Temperature 20/23 °C.","all_day":{"weather":"light_rain","icon":10,"temperature":21.5,"temperature_min":20,"temperature_max":23,"wind":{"speed":3.2,"dir":"SSE","angle":156},"cloud_cover":{"total":98},"precipitation":{"total":7.4,"type":"rain"}},"morning":null,"afternoon":null,"evening":null}]}});
        //fetch(apiUrl)
        //  .then(response => {
        //    if (!response.ok) throw new Error(`Failed to fetch weather data: ${response.statusText}`);
        //    return response.json();
        //  })
        //  .then(data => {
        //    //alert(JSON.stringify(data));
        //    setWeatherData(data);
        //  })
        //.catch(error => {})
        //.finally(() => {});
      })
    .catch(error => {})
    .finally(() => {});
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
                    }} // Pass box length as cellStylezzweatherData.daily.data == null || weatherData.daily.data.length <= date - day ? 10 : weatherData.daily.data[0]
                    weather={day > date || weatherData == null ? "" : "default"}
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
