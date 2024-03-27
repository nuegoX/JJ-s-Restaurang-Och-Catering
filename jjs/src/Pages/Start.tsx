import React, { useState, useEffect } from 'react';
import StartTile from '../Components/StartTile';


const Start = () => {
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
      <img src='https://i.ibb.co/grXHXg4/jjrestaurang2-1-220-upscayl-16x-Real-ESRGAN-General-x4-v3.png' alt='' className='w-full h-[600px] bg-cover object-cover'></img>
    </div>
  )
}

export default Start