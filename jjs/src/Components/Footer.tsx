import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className='flex w-full items-center justify-center'>
    
    <div className='flex w-full max-w-5xl h-fit justify-between items-center bg-black rounded-b-[40px] mt-1 mr-4 ml-4'>
      <Link to='/'><img src="https://i.ibb.co/MRksVVP/LOGO.png" width='80px' height='auto' alt="LOGO" className='ml-3 lg:ml-5' /></Link>
      
      <ul className='w-fit h-full mr-3 flex sm:gap-5 lg:gap-6 lg:mr-7'>
        <Link to='/lunchmeny'><li className='navlinks md:text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>Lunchmeny</li></Link>
        <li className='navlinks md:text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>Catering</li>
        <li className='navlinks md:text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>Om oss</li>
        <li className='navlinks md:text-xl [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>Hitta till oss</li>
      </ul>

    </div>
    </div>
    
    )}

export default Footer