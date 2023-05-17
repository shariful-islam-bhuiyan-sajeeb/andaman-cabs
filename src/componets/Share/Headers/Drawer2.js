import React, { useState } from "react";
import Header from "../Header";
import { Link, Outlet } from "react-router-dom";
import Activities from "./Activities";
import { RxCross2 } from "react-icons/rx";
import { MdKeyboardArrowDown } from "react-icons/md";
import Footer from "../Footer/Footer";

const Drawer2 = () => {
  const [remove, setRemove] = useState(true);

  const handleRemove = () => {
    setRemove(false);
  };
  const leftMenuItems = (
    <>
      {/* ============================HOME */}
      <div className="flex items-start justify-start hover:bg-black hover:text-[#ffd000] border w-full text-left">
        <button className="py-0 px-3 font-semibold uppercase ">HOME</button>
      </div>
      {/* ============================= Know  */}
      <div className="dropdown  relative flex border py-0 hover:text-[#ffd000] ">
        <label
          tabIndex={0}
          className=" flex items-center justify-between w-full  py-3 px-3  gap-x-1 font-semibold  hover:bg-black hover:text-[#ffd000] cursor-pointer uppercase "
        >
          Know
          <MdKeyboardArrowDown className="text-lg text-gray-400 hover:text-[#ffd000] " />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content absolute text-left   top-12 border bg-base-100 text-black  w-72"
        >
          <li className="hover:bg-black hover:text-[#ffd000]     border-0 rounded-none">
            <Link>About Andaman Cabs</Link>
          </li>
          <li className="hover:bg-black hover:text-[#ffd000]  border-0 rounded-none">
            <Link>How to Reach Andaman Islands</Link>
          </li>
          <li className="hover:bg-black hover:text-[#ffd000] px-4   border-0 rounded-none">
            <Link>Do's & Dont's</Link>
          </li>
          <li className="hover:bg-black hover:text-[#ffd000] px-4   border-0 rounded-none">
            <Link>Fun Facts</Link>
          </li>
        </ul>
      </div>
      {/*============================== Location  */}
      <div className="dropdown  flex relative border py-0 hover:bg-black hover:text-[#ffd000]">
        <label
          tabIndex={0}
          className="flex items-center justify-between w-full  py-3 px-3  hover:text-[#ffd000]  gap-x-1 font-semibold uppercase"
        >
          Location
          <MdKeyboardArrowDown className="text-lg text-gray-400" />
        </label>
      </div>
      {/*==============================Activities */}
      <div className="dropdown  flex relative border py-0 hover:bg-black hover:text-[#ffd000]">
        <label
          tabIndex={0}
          className="flex items-center justify-between w-full  py-3 px-3  hover:text-[#ffd000]  gap-x-1 font-semibold uppercase"
        >
          Activities
          <MdKeyboardArrowDown className="text-lg text-gray-400" />
        </label>
        <div
          tabIndex={0}
          className="  dropdown-content absolute xl:-left-56 lg:-left-40  top-12 flex items-center gap-x-1 text-left   shadow bg-white text-black 2xl:w-[1200px] xl:w-[1100px] lg:w-[950px] "
        >
          <div className="   w-full  ">
            <Activities />
          </div>
        </div>
      </div>
      {/* ===========================top deals*/}
      <div className="flex border py-0 hover:bg-black  hover:text-[#ffd000] ">
        <button className="flex items-center justify-between w-full  py-3 px-3  hover:text-[#ffd000] font-semibold uppercase ">
          top deals
        </button>
      </div>

      {/* ===============Boat Tickets */}
      <div className="flex border py-0 hover:bg-black  hover:text-[#ffd000]">
        <Link className="flex items-center justify-between w-full  py-3 px-3  hover:text-[#ffd000] uppercase font-semibold ">
          Boat Tickets
        </Link>
      </div>
      {/*===================Cab rental */}
      <div className="dropdown  flex border py-0 hover:bg-black  hover:text-[#ffd000] ">
        <label
          tabIndex={0}
          className=" flex items-center justify-between w-full  py-3 px-3   hover:text-[#ffd000]  gap-x-1 font-semibold cursor-pointer uppercase "
        >
          Cab rental
          <MdKeyboardArrowDown className="text-lg text-gray-400" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content text-center top-14 border bg-slate-200 text-black   w-11/12 mx-auto"
        >
          <li className="hover:bg-black hover:text-[#ffd000]    border-0 rounded-none">
            <Link>Cabs in Port Blair</Link>
          </li>
          <li className="hover:bg-black hover:text-[#ffd000]    border-0 rounded-none">
            <Link>Cabs in Havelock Island</Link>
          </li>
          <li className="hover:bg-black hover:text-[#ffd000]    border-0 rounded-none">
            <Link>Cabs in Neil Island</Link>
          </li>
        </ul>
      </div>
      {/* ================vehicle types */}
      <div className="flex border py-0 hover:bg-black hover:text-[#ffd000]">
        <Link className="flex items-center justify-between w-full  py-3 px-3  hover:text-[#ffd000] uppercase font-semibold">
          vehicle types
        </Link>
      </div>
      {/* =======================Ferries */}
      <div className="dropdown relative  flex border py-0 hover:bg-black hover:text-[#ffd000]">
        <label
          tabIndex={0}
          className=" flex items-center justify-between w-full  py-3 px-3  hover:text-[#ffd000]  gap-x-1 font-semibold cursor-pointer uppercase "
        >
          Ferries
          <MdKeyboardArrowDown className="text-lg text-gray-400" />
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content absolute text-left top-12 border bg-base-100 text-black  w-44"
        >
          <li className="hover:text-[#ffd000] hover:bg-black    border-0 rounded-none">
            <Link>Green Ocean 1</Link>
          </li>
          <li className="hover:text-[#ffd000] hover:bg-black    border-0 rounded-none">
            <Link>Nautika Lite</Link>
          </li>
          <li className="hover:text-[#ffd000] hover:bg-black    border-0 rounded-none">
            <Link>Green Ocean 2 </Link>
          </li>
          <li className="hover:text-[#ffd000] hover:bg-black    border-0 rounded-none">
            <Link>Nautika </Link>
          </li>
          <li className="hover:text-[#ffd000] hover:bg-black    border-0 rounded-none">
            <Link>Nautika Lite</Link>
          </li>
          <li className="hover:text-[#ffd000] hover:bg-black    border-0 rounded-none">
            <Link>Makruzz </Link>
          </li>
        </ul>
      </div>
      {/* =========================Blogs */}
      <div className="flex border py-0 hover:bg-black hover:text-[#ffd000]">
        <Link className="flex items-center justify-between w-full  py-3 px-3  hover:text-[#ffd000] uppercase font-semibold">
          Blogs
        </Link>
      </div>
      {/* ======================contact us */}
      <div className="flex border py-0 hover:bg-black hover:text-[#ffd000]">
        <Link className="flex items-center justify-between w-full  py-3 px-3  hover:text-[#ffd000] uppercase font-semibold">
          contact us
        </Link>
      </div>
    </>
  );

  return (
    <div>
      <div className="drawer ">
        <input id="drawer2 " type="checkbox" className="drawer-toggle" />
        <div className="drawer-content h-full">
          {/* <!-- Page content here --> */}
          <Header />
          <Outlet />
          <Footer />
        </div>
        <div className="drawer-side ">
          <label htmlFor="drawer2 " className="drawer-overlay"></label>

          <ul className=" menu flex flex-col  items-center pt-6  w-80 h-full bg-base-100 text-base-content">
            <div className="text-right lg:pr-4 md:pr-3 pr-2 w-full ">
              <button onClick={handleRemove}>
                <RxCross2 className="text-3xl  " />
              </button>
            </div>
            <li className="w-full lg:mt-6 md:mt-4 mt-2 ">{leftMenuItems}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Drawer2;
