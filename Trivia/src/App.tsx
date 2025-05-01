import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './component/Landing';
import Home from './component/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/" element={<Home />} />
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