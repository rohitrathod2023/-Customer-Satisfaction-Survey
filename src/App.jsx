import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './components/Welcome';
import Survey from './components/Survey';
import ThankYou from './components/ThankYou';

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/survey" element={<Survey />} />
          <Route path="/thankyou" element={<ThankYou />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
