// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Landing from './component/Landing';
// import Multi from './component/Multi';
import Secondscreen from './component/Secondscreen';
// import Thirdscreen from './component/Thirdscreen';
// import './landing.css';
// import './Multi.css';
import './style.css';
// import './Third.css';

function App() {
  return (
    <Router>
      <div className="app">
        {/* <Landing /> */}
        <Routes>
          {/* <Route path="/" element={<Landing />} /> */}
          {/* <Route path="/" element={<Multi />} /> */}
          <Route path="/" element={<Secondscreen />} />
          {/* <Route path="/" element={<Thirdscreen />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;