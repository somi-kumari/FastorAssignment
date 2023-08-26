import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EmailInput from './components/EmailInput';
import OtpInput from './components/OtpInput';
import RestaurentList from './components/RestaurentList';
import RestaurentDetails from './components/RestaurentDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <h1 style={{ color: "salmon", textAlign: "center" }}>Fastor</h1>
        <Routes>
          <Route path="/" element={<EmailInput />} />
          <Route path="/otp/:otp" element={<OtpInput />} />
          <Route path="/hotel-list" element={<RestaurentList />} />
          <Route path="/hotel-details/:hotelId" element={<RestaurentDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;