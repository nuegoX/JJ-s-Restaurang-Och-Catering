import React from 'react'
import { Interface } from 'readline'

interface Types {
    Title: String;
    Description: String;
}

const StartTile = ({Title, Description}:Types) => {
  return (
    <div className='flex flex-col justify-center items-center w-[360px] pt-10 pb-10'>
        <img src='http://jjrestaurang.se/ImageSlider/1568/201311041383570893HrxLiVKW.jpg' className='w-[230px] h-[230px] object-cover rounded-full'></img>
        <p className='text-3xl'>{Title}</p>
        <p className='flex justify-center items-center w-[250px]'>{Description}</p>
    </div>
  )
}

export default StartTile