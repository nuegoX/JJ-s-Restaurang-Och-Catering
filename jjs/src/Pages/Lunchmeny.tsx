import React, { useEffect } from 'react';

const Lunchmeny = () => {
  useEffect(() => {
    window.onload = function () {
      (function () {

      })();
    };
  }, []);
  fetch('https://www.matochmat.se/rest/menu/?restaurant=cShcWkTul9O81cS92Rsmcw==')
  .then(response => response.json())
  .then(data => {
    console.log(data.data.raw[0].content);
    // You can access and work with the parsed JSON data here
  })
  .catch(error => {
    console.log('An error occurred:', error);
  });

  return (
    <div className='flex justify-center items-center w-full max-w-5xl m-auto'>
      <div className="matochmat-wrap pl-10 pr-10 bg-black text-white border-t border-orange-300">
        <div className="no-js-fallback">
          <h3>J&J Restaurang & Catering</h3>
          <a href="https://www.matochmat.se/rest/menu?pdf=true&restaurant=cShcWkTul9O81cS92Rsmcw%3D%3D" target="_blank">
            Visa veckans meny (PDF)
          </a>
        </div>
      </div>
    </div>
  );
};

export default Lunchmeny;
