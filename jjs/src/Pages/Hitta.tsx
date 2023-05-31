import React, { useState, useEffect } from 'react';

const Hitta = () => {
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
       <div className={`mt-[70px] md:mt-0 p-3 text-center border-t border-orange-300 flex flex-col w-full ${!onmobile ? 'max-w-5xl mr-4 ml-4 mt-0' : ''} h-fit justify-center md:justify-between items-center pb-40 md:pb-0 bg-black ${onmobile && "bg-gradient-to-b from-yellow-500 to-yellow-800 h-[90vh] object-cover bg-cover"}`}>
          <h1 className='text-white text-3xl sm:text-4xl mt-10 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>HITTA TILL OSS!</h1>
          <p className='text-white sm:text-xl md:text-base [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>J&J Restaurang & Catering finns sedan 2006 i Länsstyrelsen hus. Nischen för JJ restaurang är att erbjuda en bred meny. Här kan dem flesta hittar något som faller i smaken. Internationell vällagad mat med inspiration från Sydamerika, Asien och framförallt alltid vällagad Svensk husmanskost. </p>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13195.097624417349!2d22.095733074316406!3d65.58146099999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x467f6558b803a767%3A0x54061629991cba3b!2sJJ-Restaurang%20%26%20Catering!5e0!3m2!1ssv!2sse!4v1685519166266!5m2!1ssv!2sse" height="450"  loading="lazy" className='rounded-lg w-full mt-5'></iframe>
          <div className='flex gap-10 mt-4'>
              <a href="tel:+46790552392"><button className='w-9 h-9 border-2 rounded-full p-10 flex justify-center items-center text-5xl bg-green-400 hover:bg-green-500 transition-all'>📞</button></a>
              <a href="mailto:jjrestaurang@gmail.com"><button className='w-9 h-9 border-2 rounded-full pt-10 pb-10 pr-10 pl-10 flex justify-center items-center text-5xl bg-blue-500 hover:bg-blue-600 transition all'>📧</button></a>
            </div>
        </div>
        </div>
      )
}

export default Hitta