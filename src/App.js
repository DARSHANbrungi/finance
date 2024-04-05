import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import Finance from './components/finance/fin.js'; // Import your page components
//import Calc from './components/emicalc/emicalc.js';
import Construction from './components/legal/legal.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Construction/>} />
        {/* <Route path="/" element={<Finance />} />
       <Route path="/emi-calculator" element={<Calc />} />  */}
        {/* Add more routes for other pages */}
      </Routes>
    </Router>
  );
}

export default App;