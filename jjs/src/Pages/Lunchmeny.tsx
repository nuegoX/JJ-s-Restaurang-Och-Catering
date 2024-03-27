import React, { useState, useEffect } from 'react';
import FoodDish from '../Components/FoodDish';

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
      <>
      <div className='flex w-full items-center justify-center'>
        <div className={`mt-[70px] md:mt-0 p-3 border-orange-300 flex flex-col w-full ${!onmobile && 'max-w-5xl mr-4 ml-4 mt-0'} h-fit justify-center md:justify-between items-center pb-40 md:pb-10 bg-#667079`}>
          <h1 className='text-white text-3xl sm:text-4xl mt-10'>Veckans lunchmeny</h1>
          <div className='flex flex-col w-full'>
            <FoodDish Day={'Måndag'} Dish={'- Torsk med ägg & persiljasås.'} Dish2={'- Korv Stroganoff.'} Dish3={'- Morotssoppa.'} />
            <FoodDish Day={'Tisdag'} Dish={'- Pasta med kyckling i currysås.'} Dish2={'- Medelhavs fiskgratäng.'} Dish3={'- Pasta med ratatouille.'} />
            <FoodDish Day={'Onsdag'} Dish={'- Wokad fläskytterfilé med ostronsås.'} Dish2={'- Ångad torsk.'} Dish3={'- Wokade grönsaker.'} />
            <FoodDish Day={'Torsdag'} Dish={'- Ärtsoppa & husets egna stekta plättar.'} Dish2={'- Örtmarinerade karrékotletter.'} Dish3={'- Ärtsoppa & plättar.'} />
            <FoodDish Day={'Fredag'} Dish={'- Helstekt fläskfilé.'} Dish2={'- Panko panerad rödspättafilé.'} Dish3={'- Fyllda zucchini.'} />
          </div>
        </div>
      </div>
        </>
      )
}

export default Lunchmeny