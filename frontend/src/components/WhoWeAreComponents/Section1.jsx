import React from 'react';

const Section1 = () => {
  return (
    <div className="py-12 flex flex-col md:flex-row items-center justify-center">
   
      <div className="w-full md:w-1/3 p-2">
        <img src="https://via.placeholder.com/300" alt="Left" className="w-full h-auto object-cover" />
      </div>


      <div className="w-full md:w-1/3 p-2 md:scale-110">
        <img src="https://via.placeholder.com/400" alt="Middle" className="w-full h-auto object-cover" />
      </div>


      <div className="w-full md:w-1/3 p-2">
        <img src="https://via.placeholder.com/300" alt="Right" className="w-full h-auto object-cover" />
      </div>
    </div>
  );
}

export default Section1;
