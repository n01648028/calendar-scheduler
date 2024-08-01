import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import Settings from './Settings';
import Save from './Save';
import Open from './Open';

function App() {
  return (
    <div className="App">
      <br></br>
      Welcome to our Calendar App! devloped by Danyyil & Russell. 
      <br></br>  
      <br></br>
      Please use the links below to navigate the app. 
      <br></br>
      <br></br>
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
            <Route path="/Save" element={<Save />} />
            <Route path="/Settings" element={<Settings />} />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
