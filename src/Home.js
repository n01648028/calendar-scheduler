import React from 'react';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Welcome to the Calendar App</h1>
        <p>Schedule your next plan</p>
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