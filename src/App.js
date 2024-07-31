import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Link, useNavigate } from 'react-router-dom';
import Home from './Home';
import Calendar from './Calendar';
import Settings from './Settings';

function App() {
  return (
    <div className="App">
      Home
      
      <BrowserRouter>
        <div>
          <nav>
            <Link to="/home">home</Link> | {" "}
            <Link to="/calendar">Calendar</Link> | {" "}
          </nav>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/calendar" element={<Calendar />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
