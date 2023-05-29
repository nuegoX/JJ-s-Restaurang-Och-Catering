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
      
      <div className={`${!onmobile && 'p-0'} w-full box-border bg-orange-400 flex flex-col items-center`}>
        <h1 className=' text-xl sm:text-2xl md:text-3xl pt-1 pb-2'>JJ Restaurang & Catering</h1>
        <img src='http://jjrestaurang.se/ImageSlider/1568/201311041383570893HrxLiVKW.jpg' className={`h-[500px] w-full object-cover ${!onmobile && 'rounded-lg'}`}></img>

        <div className='w-full h-fit bg-blue-300 flex flex-row justify-center'>
          <StartTile Title={'HÄR FINNS VI'} Description={'Vi finns sedan i Länsstyrelsen hus. Välkomna till oss!'} />
          <StartTile Title={'DAGENS LUNCH'} Description={'I dagens lunch för 89:- ingår stor sallads buffé, dagens soppa, hembakat bröd, måltidsdricka och kaffe.'} />
          <StartTile Title={'OM MATEN'} Description={'Hos oss kan de flesta hittar något som faller i smaken. Internationell vällagad mat med inspiration från Sydamerika, Asien och framförallt alltid vällagad Svensk husmanskost.'} />
          <StartTile Title={'KONTAKTA OSS'} Description={'Vill du beställa catering, eller bara boka ett bord? Välkommen att kontakta oss på telefon 0920-211 404.'} />
        </div>
      </div>
      
    
    </div>
    </div>
  )
}

export default Start