import React, { useEffect, useState } from "react";
import "../../Home/cabsCard.css";

const CruisesCard = () => {
  const [cabs, setCabs] = useState([]);
  useEffect(() => {
    fetch("Home/Cruises.json")
      .then((res) => res.json())
      .then((data) => setCabs(data));
  }, []);
  return (
    <div>
      <div className="lg:mb-6 mb-4 sm:px-0 px-4">
        {/* ========card section  */}
        <div className="shadow-2xl shadow-red-200 border">
          <div className="grid  md:grid-cols-3 sm:grid-cols-2 grid-col-1  lg:gap-6 md:gap-4 sm:gap-3 gap-2 xl:px-10 lg:px-8 md:px-6 px-4 xl:py-10 lg:py-8 md:py-6 py-4 ">
            {cabs?.map((cab) => (
              <div key={cab.id} className="relative mt-4">
                <div
                  style={{ fontFamily: "Poppins" }}
                  className="w-full mx-auto"
                >
                  <div className=" gradient1 ease-in-out duration-500 transform hover:scale-95 ">
                    <img className="w-full" src={cab?.img} alt="" />
                  </div>
                  <h2 className="absolute md:bottom-2 bottom-1 lg:left-16 md:left-12 sm:left-16 left-20 lg:text-xl md:text-md text-md   text-white lg:font-semibold font-medium  text-center lg:px-4 md:px-3  px-4 ">
                    {cab?.title?.length > 90
                      ? cab?.title?.slice(0, 90) + "..."
                      : cab?.title}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CruisesCard;
