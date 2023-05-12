import React from "react";
import SingleMember from "./SingleMember";

const AllMemberInfo = () => {
  return (
    <>
      <div className="px-[40px] my-[50px]">
        <div className="my-[40px] flex flex-col items-center justify-center">
          <h2 className=" text-xl md:text-3xl  font-Robbi font-bold text-gray-800">
            {" "}
            All Member Information{" "}
          </h2>

          <div className="flex  items-center">
            <div className=" bg-green2 w-[95px] md:w-[185px] h-[1px] p-[1px]"></div>
            <div className="bg-green2  rounded-full w-[6px] h-[6px] p-[2px]"></div>
          </div>
        </div>

        <div className="">
          <div className=" grid  grid-cols-1 md:grid-cols-4 gap-[30px]  ">
            <div>
              <SingleMember />
            </div>
            <div>
              <SingleMember />
            </div>
            <div>
              <SingleMember />
            </div>
            <div>
              <SingleMember />
            </div>
            <div>
              <SingleMember />
            </div>
            <div>
              <SingleMember />
            </div>
            <div>
              <SingleMember />
            </div>
            <div>
              <SingleMember />
            </div>
            <div>
              <SingleMember />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllMemberInfo;
