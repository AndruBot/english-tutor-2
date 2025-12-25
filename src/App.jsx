import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.scss';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Classes from './pages/Classes/Classes';
import Booking from './pages/Booking/Booking';
import Faq from './pages/Faq/Faq';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/classes" element={<Classes />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </Router>
  );
}

export default App;
