import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import Answers from './pages/Answers';

function App() {
  return (
    <BrowserRouter>
      <div className='app'>
        <Routes>
          <Route index element={<Home />} />
          <Route path="answers" element={<Answers />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
