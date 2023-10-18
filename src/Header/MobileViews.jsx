import React from "react";
import { BiSearch } from "react-icons/bi";
import { IoNotifications } from "react-icons/io5";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { BsFillCalendar2Fill } from "react-icons/bs";
import { FaUsersRectangle } from "react-icons/fa6";

import { RxDoubleArrowLeft } from "react-icons/rx";
import { TbBrandWindows,TbHexagonLetterO } from "react-icons/tb";
import {
  MdKeyboardArrowRight
} from "react-icons/md";
import SearchField from "../components/SearchBox/SearchField";
const MobileViews = (props) => {
  return (
    <div
    className={` lg:hidden w-full sm:w-max    h-full bg-[#0c122b] text-left py-10 px-10  absolute top-0 ${props.controlSideBar}  z-50 transition-all ease-in-out duration-1000 `}
  >
    {/* <img src={tri} alt='triangle' className='indivne float-left'/> */}
    <div className="w-4/5 mx-auto sm:mx-0 lg:mx-auto text-left grid gap-y-5 ">
      <div className="flex lg:gap-x-4 lg:justify-start justify-between">

        <h1 className="text-white font-semibold text-left ">Gallery</h1>
        <RxDoubleArrowLeft
          onClick={() => props.setControlSideBar("-left-[200%]")}
          className="cursor-pointer lg:hidden my-auto text-3xl font-bold text-white"
        />
      </div>
     <SearchField side setQuery={props.setQuery} setThumbImages={props.setThumbImages} />

      <div className="flex  p-2 rounded-md justify-between text-gray-300 bg-[#5555b8]">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Home</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            <div className="flex  justify-between text-gray-300">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Explore</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            <div className="flex  justify-between text-gray-300">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Connection</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            <div className="flex  justify-between text-gray-300">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Community</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
            <div className="flex  justify-between text-gray-300">
              <div className="flex justify-start gap-x-4">
                <TbBrandWindows className="my-auto text-2xl" />
                <p className="self-center">Dark Mode</p>
              </div>
              <MdKeyboardArrowRight className="my-auto text-xl text-[#7879f1]" />
            </div>
      
    </div>
    </div>
  );
};

export default MobileViews;
