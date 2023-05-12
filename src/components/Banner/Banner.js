import React from "react";
import img1 from "./../../assets/hg5.jpg";

const Banner = () => {
  return (
    <>
      <div className="relative  w-full  h-[90vh]  ">
        <img src={img1} alt="" className="w-full h-full" />
        <div className=" text-left absolute top-1/3 right-[80px] ">
          <div className="flex flex-col justify-start items-start space-y-2 text-[#faf0e9] text-xl md:text-3xl font-bold  font-mono tracking-wide">
            <div className="flex items-center justify-center gap-2">
              <i class="fa-solid fa-sack-dollar text-green2"></i>
              <h3>
                Mess Balance--{" "}
                <strong className=" text-green">1500 Taka</strong>{" "}
              </h3>
            </div>
            <div className="flex items-center justify-center gap-2">
              <i class="fa-solid fa-money-bill-transfer text-green2"></i>
              <h3>
                Total Deposite--{" "}
                <strong className=" text-green">10000 Taka</strong>{" "}
              </h3>
            </div>
            <div className="flex items-center justify-center gap-2">
              <i class="fa-solid fa-yin-yang text-green2"></i>
              <h3>
                Total Meal Cost--{" "}
                <strong className=" text-green">8500 Taka</strong>{" "}
              </h3>
            </div>
            <div className="flex items-center justify-center gap-2">
              <i class="fa-solid fa-bowl-rice text-green2"></i>
              <h3>
                Total Meal-- <strong className=" text-green">350 </strong>{" "}
              </h3>
            </div>
            <div className="flex items-center justify-center gap-2">
              <i class="fa-solid fa-money-bill-1-wave text-green2"></i>
              <h3>
                Total Other Cost--{" "}
                <strong className=" text-green">950 Taka</strong>{" "}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
