import React from 'react';

const Home = () => {
  const months = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const today = new Date();
  var srcLoc = "https://cdn.jim-nielsen.com/macos/512/calendar-";
  var altStr = "";
  srcLoc += today.getFullYear();
  srcLoc += "-";
  srcLoc += today.getDate();
  srcLoc += "-";
  srcLoc += today.getMonth();
  srcLoc += ".png?rf=1024";
  altStr += months[today.getMonth()];
  altStr += " ";
  altStr += today.getDate();
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Calendar App</h1>
        <p>Schedule your Days</p>
      </header>
      <img
          src="https://cdn.jim-nielsen.com/macos/512/calendar-2021-04-29.png?rf=1024"
          alt="Calendar"
          className="calendar-image"
        />
      <main className="home-main">
      </main>
    </div>
  );
}

export default Home;