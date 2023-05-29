import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Navbar from './Components/Navbar';
import Lunchmeny from './Pages/Lunchmeny';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/lunchmeny' element={<Lunchmeny />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
