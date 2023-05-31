import React from 'react'

interface Types {
    Day: String;
    Dish: String;
    Dish2: String;
    Dish3: String;
}

const FoodDish = ({Day, Dish, Dish2, Dish3}:Types) => {
  return (
    <div className='flex justify-between w-full items-center border-b-2 border-orange-400 box-border p-4'>
    <p className='text-white text-xl font-bold'>{Day}<br></br><p className='text-base font-thin'>{Dish}<br></br>{Dish2}<br></br>{Dish3}</p></p><p className='text-white text-base sm:text-xl'>120kr</p>
  </div>
  )
}

export default FoodDish