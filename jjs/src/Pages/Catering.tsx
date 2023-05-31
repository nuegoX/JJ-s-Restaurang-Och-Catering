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
       <div className={`p-3 text-center border-t border-orange-300 flex flex-col w-full ${!onmobile ? 'max-w-5xl mr-4 ml-4 mt-0' : ''} h-fit justify-center md:justify-between items-center pb-40 md:pb-10 bg-black ${onmobile && "bg-[url('http://jjrestaurang.se/ImageSlider/1568/201311041383570893HrxLiVKW.jpg')] h-[90vh] object-cover bg-cover"}`}>
          <h1 className='text-white text-3xl sm:text-4xl mt-10'>Catering</h1>
          <p className='text-white sm:text-xl md:text-base'>Vi anpassar meny efter dina önskemål. Välkommen att kontakta oss vid frågor på telefon 0920-211 404.</p>
          {!onmobile && (<img src='http://jjrestaurang.se/ImageSlider/1568/201311041383570536aHMTgC2p.jpg' className='w-[95%] mt-3 rounded-lg'></img>)}
          {onmobile && (
            <div className='flex gap-10 mt-4'>
              <a href="tel:+46790552392"><button className='w-9 h-9 border-2 rounded-full p-10 flex justify-center items-center text-5xl bg-green-400 hover:bg-green-500 transition-all'>📞</button></a>
              <a href="mailto:jjrestaurang@gmail.com"><button className='w-9 h-9 border-2 rounded-full pt-10 pb-10 pr-10 pl-10 flex justify-center items-center text-5xl bg-blue-500 hover:bg-blue-600 transition all'>📧</button></a>
            </div>
          )}
        </div>
        </div>
      )
}

export default Catering