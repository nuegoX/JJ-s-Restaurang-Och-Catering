import React from 'react';
import './index.css';
import { Routes, Route } from 'react-router-dom';
import Start from './Pages/Start';
import Navbar from './Components/Navbar';
import Lunchmeny from './Pages/Lunchmeny';
import Footer from './Components/Footer';
import Catering from './Pages/Catering';
import Hitta from './Pages/Hitta';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/lunchmeny' element={<Lunchmeny />} />
        <Route path='/catering' element={<Catering />} />
        <Route path='/hitta' element={<Hitta />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
