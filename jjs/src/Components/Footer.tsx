import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
    <div className='flex w-full items-center justify-center'>
    
    <div className='flex w-full max-w-5xl h-fit justify-between items-center bg-black md:rounded-b-[40px] mt-0 md:mr-4 md:ml-4'>
      <p className='ml-3 text-white lg:ml-5 pt-6 pb-6 sm:text-xl'>📍Stationsgatan 5, Luleå</p>
      
      <p className='text-white mr-5 sm:text-xl'>📞079-055-23-92</p>

    </div>
    </div>
    
    )}

export default Footer