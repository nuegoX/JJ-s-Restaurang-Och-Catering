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
    <div className={`flex flex-col w-full ${!onmobile && 'max-w-5xl mr-4 ml-4 mt-0'} h-fit justify-between items-center bg-black`}>
      
      <div className={`${!onmobile && 'p-0'} w-full box-border bg-orange-500 flex flex-col items-center`}>
        <h1 className='text-white text-xl sm:text-2xl md:text-3xl pt-1 pb-2 [text-shadow:_0_2px_0_rgb(0_0_0_/_40%)]'>Stationsgatan 5</h1>

        <div className="bg-[url('http://jjrestaurang.se/ImageSlider/1568/201311041383570893HrxLiVKW.jpg')] object-cover h-[500px] w-full bg-cover flex justify-center items-center">
          <p className='text-white text-3xl sm:text-5xl md:text-6xl lg:text-7xl mb-20 [text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>JJ Restaurang & Catering</p>
        </div>

        <div className='w-full h-fit bg-black flex flex-col items-center gap-5 lg:gap-9 lg:items-start lg:flex-row justify-center'>
          <StartTile Title={'HÄR FINNS VI'} Description={'Vi finns sedan i Länsstyrelsen hus. Välkomna till oss!'} />
          <StartTile Title={'DAGENS LUNCH'} Description={'I dagens lunch för 120:- ingår stor sallads buffé, dagens soppa, hembakat bröd, måltidsdricka och kaffe.'} />
          <StartTile Title={'OM MATEN'} Description={'Hos oss kan de flesta hittar något som faller i smaken. Internationell vällagad mat med inspiration från Sydamerika, Asien och framförallt alltid vällagad Svensk husmanskost.'} />
          <StartTile Title={'KONTAKTA OSS'} Description={'Vill du beställa catering, eller bara boka ett bord? Välkommen att kontakta oss på telefon 0920-211 404.'} />
        </div>


        </div>
        <div className='mt-10 border box-border p-10 rounded-lg'>
          <p className='text-white text-center text-xl'>VÅRA SAMARBETSPARTNERS</p>
            <div className='flex justify-between gap-10'>
              <img src='http://jjrestaurang.se/ElemImage/svenskcater_220.jpg' className='w-[100px] sm:w-[200px]'></img>
              <img src='http://jjrestaurang.se/ElemImage/lappsimon(3)_220.jpg' className='w-[100px] sm:w-[200px]'></img>
            </div>
        </div>
      <div>

      </div>
      
    
    </div>
    </div>
  )
}

export default Start