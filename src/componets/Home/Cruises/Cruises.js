import React from "react";

const Cruises = () => {
  return (
    <div className="lg:mt-10 md:mt-7 mt-5">
      <div className="lg:space-y-3 md:space-y-2 space-y-1 font-serif">
        <h2 className="lg:text-4xl sm:text-2xl text-xl font-bold">Cruises</h2>
        <p className="lg:text-2xl md:text-xl text-lg text-gray-500 ">
          Travel in the luxury cruise
        </p>
      </div>
      <div className="lg:mt-8 md:mt-6 mt-4 lg:px-0 px-4">
        <img
          className="w-full h-full"
          src="https://www.andamancab.in/uploads/cruise-bg.jpg"
          alt=""
        />
      </div>
      {/* <CruisesCard /> */}
    </div>
  );
};

export default Cruises;
