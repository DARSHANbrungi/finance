import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Finance from './components/finance/fin.js'; // Import your page components
//import Calc from './components/emicalc/emicalc.js';
import Site from './components/sitespage/sitespage.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Site/>} />
        {/* <Route path="/" element={<Finance />} />
       <Route path="/emi-calculator" element={<Calc />} />  */}
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;