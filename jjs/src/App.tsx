import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Navbar from './Components/Navbar';
import Lunchmeny from './Pages/Lunchmeny';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/lunchmeny' element={<Lunchmeny />} />
      </Routes>
    </>
  );
}

export default App;
