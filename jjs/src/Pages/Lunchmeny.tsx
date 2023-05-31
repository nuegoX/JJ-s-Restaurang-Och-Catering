import React, { useState, useEffect } from 'react';

const Lunchmeny = () => {
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
       <div className={`p-3 border-t border-orange-300 flex flex-col w-full ${!onmobile ? 'max-w-5xl mr-4 ml-4 mt-0' : ''} h-fit justify-center md:justify-between items-center pb-40 md:pb-10 bg-black`}>
          <h1 className='text-white text-3xl sm:text-4xl mt-10'>Veckans lunchmeny</h1>
          
        </div>
        </div>
      )
}

export default Lunchmeny