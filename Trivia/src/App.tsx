import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Landing from './component/Landing';
import Multi from './component/Multi';
// import Secondscreen from './component/Secondscreen';
import './landing.css';
import './Multi.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Landing /> */}
        <Routes>
          <Route path="/" element={<Multi />} />
          {/* <Route path="/" element={<Secondscreen />} /> */}
          {/* <Route path="/" element={<Home />} /> */}
          {/* Add more routes as you develop your trivia app */}
          {/* Example: */}
          {/* <Route path="/game" element={<Game />} /> */}
          {/* <Route path="/leaderboard" element={<Leaderboard />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;