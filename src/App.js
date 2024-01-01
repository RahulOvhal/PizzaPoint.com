import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages...
import Home from './Pages/Home/Home';
import About from './Pages/Home/About';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
