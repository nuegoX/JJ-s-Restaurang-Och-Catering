import React, { useState, useEffect } from 'react';

const Catering = () => {
    const [onmobile, setOnmobile] = useState(window.innerWidth <= 768);

    const [deviceWidth, setDeviceWidth] = useState(window.innerWidth);
    
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
        <div className='flex w-full items-center justify-center'>
        <div className={`flex flex-col w-full ${!onmobile && 'max-w-5xl mr-4 ml-4 mt-0'} h-fit justify-between items-center bg-black`}>
          <p className='text-white'>helo</p>
          
        </div>
        </div>
      )
}

export default Catering