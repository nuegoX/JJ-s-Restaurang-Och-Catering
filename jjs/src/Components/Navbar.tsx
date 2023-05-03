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
    <nav className='flex w-full h-fit justify-between items-center bg-black'>
      <Link to='/'><img src="https://i.ibb.co/MRksVVP/LOGO.png" width='70px' height='auto' alt="LOGO" className='ml-3' /></Link>
      
    </nav>
    ) : (
    <nav>
      <p>Laptop</p>
      <a href="https://ibb.co/pdRKWxw"><img src="https://i.ibb.co/YhydD3Q/JJS.png" alt="JJS" width='70px' className='mr-3' /></a>

      <div className='mr-5 h-full w-fit text-white text-xl hover:cursor-pointer'>| | |</div>
    </nav>
    )}
    </>
  )
}

export default Navbar