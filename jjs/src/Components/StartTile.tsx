import React from 'react'
import { Interface } from 'readline'

interface Types {
    Title: String;
    Description: String;
}

const StartTile = ({Title, Description}:Types) => {
  return (
    <div className='flex flex-col w-[230px] md:w-[350px] lg:w-[220px] items-center mt-10'>
      <img src='http://jjrestaurang.se/ImageSlider/1568/201311041383570893HrxLiVKW.jpg' className='w-[170px] h-[170px] sm:h-[225px] sm:w-[225px] md:h-[320px] md:w-[320px] lg:w-[215px] lg:h-[215px] rounded-full object-cover'></img>
      <p className='text-3xl mb-3 text-white'>{Title}</p>
      <p className='text-white'>{Description}</p>
    </div>
  )
}

export default StartTile