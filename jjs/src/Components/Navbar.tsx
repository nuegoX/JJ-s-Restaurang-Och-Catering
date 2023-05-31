import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    // State for whether the navbar is open or closed and a state that changes it.
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    
    // State for whether the user is on a mobile device.
    const [onmobile, setOnmobile] = useState(window.innerWidth <= 768);

    // Device width hook.
    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    
    // Updates mobile hook when device width is changed.
    useEffect(() => {
      function handleResize() {
        setDeviceWidth(window.innerWidth);
        setOnmobile(window.innerWidth <= 768);
      }

      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    
  return (
    <>
    {onmobile ? (
    <nav className='flex w-full h-fit justify-between items-center bg-black fixed'>
      <Link to='/'><img src="https://i.ibb.co/MRksVVP/LOGO.png" width='70px' height='auto' alt="LOGO" className='ml-3' /></Link>
      <img alt="svgImg" onClick={handleNav} className={`w-[40px] mr-3 transition-all ${nav && 'rotate-[130deg]'}`} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iNjQiIGhlaWdodD0iNjQiCnZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9ImZpbGw6I0ZGRkZGRjsiPgo8cGF0aCBkPSJNNyAyOXY1bDUwIDF2LTdMNyAyOXpNNyAxMXY2aDUwdi02SDd6TTcgNDZ2N2w1MC0xdi01TDcgNDZ6Ij48L3BhdGg+Cjwvc3ZnPg=="/>
      {nav && (
        <div className={`h-full fixed flex flex-col justify-center items-center right-0 ${nav ? "top-16" : "top-0"} w-full bg-black rounded-lg py-2 px-4`}>
          <div className="mb-[200px] box-border h-[50%] flex flex-col justify-center items-center w-full rounded-lg py-2 px-4 bg-gradient-to-b from-yellow-300 to-yellow-500">
            <ul className='flex flex-col gap-6 mt-4 mb-4'>
              <Link to={'/'} onClick={handleNav}><li className='text-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>START</li></Link>
              <Link to={'/lunchmeny'} onClick={handleNav}><li className='text-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Lunchmeny</li></Link>
              <Link to={'/catering'} onClick={handleNav}><li className='text-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Catering</li></Link>
              <Link to={'/hitta'} onClick={handleNav}><li className='text-3xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]'>Hitta till oss</li></Link>
            </ul>
          </div>
       </div>
      )}
    </nav>
    
    // ^ On mobile device
    ) : (
    // Bigger screen navbar
    <div className='flex w-full items-center justify-center'>
    
    <nav className='flex w-full max-w-5xl h-fit justify-between items-center bg-black rounded-t-[40px] mt-2 mr-4 ml-4'>
      <Link to='/'><img src="https://i.ibb.co/MRksVVP/LOGO.png" width='80px' height='auto' alt="LOGO" className='ml-3 lg:ml-5' /></Link>
      
      <ul className='w-fit h-full mr-3 flex sm:gap-5 lg:gap-6 lg:mr-7'>
        <Link to={'/lunchmeny'}><li className='navlinks md:text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>Lunchmeny</li></Link>
        <Link to={'/catering'}><li className='navlinks md:text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>Catering</li></Link>
        <Link to={'/hitta'}><li className='navlinks md:text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>Hitta till oss</li></Link>
      </ul>

    </nav>
    </div>
    
    )}
    </>
  )
}

export default Navbar