import React from "react";
import img4 from "./../../assets/cc1.jpg";
import img3 from "./../../assets/clock.jpg";
import Calendar from "./Calendar";

const BazarSchedule = () => {
  return (
    <>
      <div className="mb-[20px]">
        <div className="my-[30px] flex flex-col items-center justify-center">
          <h2 className="text-xl md:text-3xl  font-Robbi font-bold text-gray-800">
            Bazar Schedule
          </h2>
          <h4 className=" text-base md:text-lg font-abc text-gray-800 font-bold">
            February 2023
          </h4>
          <div className="flex  items-center">
            <div className=" bg-green2 w-[95px] md:w-[185px] h-[1px] p-[1px]"></div>
            <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
          </div>
        </div>
        <div className=" grid md:grid-cols-3  px-[40px] mx-auto gap-4">
          <div className=" grid md:col-span-2  ">
            <Calendar />
          </div>
          <div className="">
            <div className=" grid grid-cols-2 gap-3">
              <div className=" grid col-span-1"></div>
              <div className=" grid col-span-1">
                <img
                  src={img3}
                  alt=""
                  className=" w-[206px] h-[256px] rounded-md"
                />
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div className=" grid col-span-1">
                <img
                  src={img4}
                  alt=""
                  className="  w-[206px] h-[256px] rounded-md"
                />
              </div>
              <div className=" grid col-span-1"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BazarSchedule;
