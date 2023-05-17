import React from "react";

const Certified = () => {
  return (
    <div className="mt-16 lg:px-0 px-4">
      <div className="">
        <div className=" flex items-center justify-center ">
          <div className=" xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-[#e1e1e1]"></div>
          <div className=" xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-[#ffd000]"></div>
          <div className=" xl:w-[60px] lg:w-[50px] md:w-[40px] sm:w-[30px] w-[25px] h-[2px] bg-[#e1e1e1]"></div>
        </div>
        <div
          style={{ fontFamily: "Poppins" }}
          className="flex flex-col items-center justify-center space-y-2 text-left  lg:mt-7 md:mt-5 mt-3 lg:px-0 px-4"
        >
          <h1 className=" lg:text-4xl md:text-2xl sm:text-xl text-lg text-black font-bold ">
            We are Certified by
          </h1>
        </div>
      </div>
      {/*============================= card section  */}
      <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  lg:gap-3 gap-2  lg:mt-6 mb-20 mt-4">
        {/* =============== Andaman Tourism card  */}
        <div className="shadow-inner translate hover:-translate-y-2 transition-transform duration-700  ">
          <div className="bg-white p-6 rounded  shadow-2xl border hover ">
            <div className="flex flex-col items-center text-black ">
              <div className="lg:text-6xl md:text-4xl sm:text-2xl text-xl">
                <img
                  className="w-full h-full"
                  src="https://www.andamancab.in/assets/img/icons/and-tourism.png"
                  alt=""
                />
              </div>
              <div className="font-serif  space-y-2">
                <h1 className="text-bold lg:text-lg md:text-md text-sm  ">
                  Andaman Tourism
                </h1>
                <p className="lg:text-sm  text-xs text-gray-500 ">
                  Approved by Directorate of Tourism Andaman & Nicobar
                  Administration
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* =============== IATTE card */}
        <div className="bg-white p-6 rounded border shadow-2xl translate hover:-translate-y-2 transition-transform duration-700  ">
          <div className="flex flex-col items-center text-black ">
            <div className="lg:text-6xl md:text-4xl sm:text-2xl text-xl">
              <img
                className="w-full h-full"
                src="https://www.andamancab.in/assets/img/icons/iatte-logo.png"
                alt=""
              />
            </div>
            <div className="font-serif  space-y-2">
              <h1 className="text-bold lg:text-2xl ">IATTE</h1>
              <p className="lg:text-md md:text-md sm:text-sm text-xs text-gray-500 ">
                Proud Member of Indian association of Travel and Tourism experts
              </p>
            </div>
          </div>
        </div>
        {/*  =============We are Official Partner */}
        <div className="bg-white p-6 rounded border shadow-2xl translate hover:-translate-y-2 transition-transform duration-700  ">
          <div className="flex flex-col items-center text-black ">
            <div className="lg:text-6xl md:text-4xl sm:text-2xl text-xl">
              <img
                className="w-full h-full"
                src="https://www.andamancab.in/assets/img/icons/cruise-logo.png"
                alt=""
              />
            </div>
            <div className="font-serif lg:mt-4">
              <p className="lg:text-md md:text-md sm:text-sm text-xs text-gray-500 ">
                We are Official Partner
              </p>
            </div>
          </div>
        </div>
        {/* ==================== ANTAO */}
        <div className="bg-white p-6 rounded border shadow-2xl translate hover:-translate-y-2 transition-transform duration-700  ">
          <div className="flex flex-col items-center text-black ">
            <div className="lg:text-6xl md:text-4xl sm:text-2xl text-xl">
              <img
                className="w-full h-full"
                src="https://www.andamancab.in/assets/img/icons/antoa-logo.png"
                alt=""
              />
            </div>
            <div className="font-serif  space-y-2">
              <h1 className="text-bold lg:text-2xl ">ANTAO</h1>
              <p className="lg:text-md md:text-md sm:text-sm text-xs text-gray-500 ">
                Proud Member of Andaman Nicobar Tour Operator Association
              </p>
            </div>
          </div>
        </div>
        {/* ========================IATO */}
        <div className="bg-white p-6 rounded border shadow-2xl translate hover:-translate-y-2 transition-transform duration-700  ">
          <div className="flex flex-col items-center text-black ">
            <div className="lg:text-6xl md:text-4xl sm:text-2xl text-xl">
              <img
                className="w-full h-full"
                src="https://www.andamancab.in/assets/img/icons/iato-logo.png"
                alt=""
              />
            </div>
            <div className="font-serif  space-y-2">
              <h1 className="text-bold lg:text-2xl ">IATO</h1>
              <p className="lg:text-md md:text-md sm:text-sm text-xs text-gray-500 ">
                Indian Association of Tour Operators
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certified;
