import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Navbar from './Components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Start />} />
      </Routes>
    </>
  );
}

export default App;
